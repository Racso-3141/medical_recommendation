import dill
import numpy as np
import torch
from models import SafeDrugModel
from util import buildMPNN
import torch.nn.functional as F


# setting
model_name = 'SafeDrug'
best_path = "best.model"
dim = 64


def main():
    
    # load data
    data_path = '../data/records_final.pkl'
    voc_path = '../data/voc_final.pkl'

    ehr_adj_path = '../data/ehr_adj_final.pkl'
    ddi_adj_path = '../data/ddi_A_final.pkl'
    ddi_mask_path = '../data/ddi_mask_H.pkl'
    molecule_path = '../data/idx2drug.pkl'
    device = torch.device('cpu')

    ehr_adj = dill.load(open(ehr_adj_path, 'rb'))
    ddi_adj = dill.load(open(ddi_adj_path, 'rb'))
    ddi_mask_H = dill.load(open(ddi_mask_path, 'rb'))
    data = dill.load(open(data_path, 'rb'))
    molecule = dill.load(open(molecule_path, 'rb')) 

    voc = dill.load(open(voc_path, 'rb'))
    diag_voc, pro_voc, med_voc = voc['diag_voc'], voc['pro_voc'], voc['med_voc']

    split_point = int(len(data) * 2 / 3)
    data_train = data[:split_point]
    eval_len = int(len(data[split_point:]) / 2)
    data_test = data[split_point:split_point + eval_len]
    data_eval = data[split_point+eval_len:]

    MPNNSet, N_fingerprint, average_projection = buildMPNN(molecule, med_voc.idx2word, 2, device)
    voc_size = (len(diag_voc.idx2word), len(pro_voc.idx2word), len(med_voc.idx2word))

    model = SafeDrugModel(voc_size, ddi_adj, ddi_mask_H, MPNNSet, N_fingerprint, average_projection, emb_dim=dim, device=device)
    model.load_state_dict(torch.load(open(best_path, 'rb')))
    target_output, _ = model([[[4, 8, 11], [45, 9, 6]]])
    

    # prediction prod
    target_output = F.sigmoid(target_output).detach().cpu().numpy()[0]
    
    # prediction med set
    y_pred_tmp = target_output.copy()
    y_pred_tmp[y_pred_tmp>=0.5] = 1
    y_pred_tmp[y_pred_tmp<0.5] = 0

    # prediction label
    y_pred_label_tmp = np.where(y_pred_tmp == 1)[0]
    print(y_pred_label_tmp)

if __name__ == '__main__':
    main()
