from flask import escape
from src.predict import *
import sys

def main(request):
    # """HTTP Cloud Function.
    # Args:
    #     request (flask.Request): The request object.
    #     <https://flask.palletsprojects.com/en/1.1.x/api/#incoming-request-data>
    # Returns:
    #     The response text, or any set of values that can be turned into a
    #     Response object using `make_response`
    #     <https://flask.palletsprojects.com/en/1.1.x/api/#flask.make_response>.
    # """

    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        code = 204
    else:
        # Set CORS headers for the main request
        headers = {
            'Access-Control-Allow-Origin': '*'
        }

        code = 200

    request_args = request.args
    request_json = request.get_json()
    
    if request_args:
        if "diagnosis" in  request_args and "procedure" in request_args:
            index_diagnosis = request_args.get("diagnosis")
            index_procedure = request_args.get("procedure")
    elif request_json:
        if "diagnosis" in  request_json and "procedure" in request_json:
            index_diagnosis = request_json["diagnosis"]
            index_procedure = request_json["procedure"]
    else:
        result = escape("Hello World!")


    list_diagnosis = list(map(int, index_diagnosis.split("-")))
    list_procedure = list(map(int, index_procedure.split("-")))
    input_indices = [[list_diagnosis, list_procedure]]
    result = "-".join(predict(input_indices))

    return (result, code, headers)
