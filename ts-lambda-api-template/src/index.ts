import { APIGatewayProxyHandler } from "aws-lambda";
import Response from "./model/Response";
import Controller from "./Controller";
import Request from "./model/Request";

export const handler : APIGatewayProxyHandler = (event , context , callback) => {
    const buildHttpResponse = (statusCode : number, body : string) => {
        return {
            statusCode,
            body,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            },
        }
    }
    const handleSuccess = (response : Response) => {
        callback(null, buildHttpResponse(200, JSON.stringify(response)));
    }
    const handleError = (err : any) => {
        callback(null, buildHttpResponse(500, err.message));
    }
    if(event.body == null){
        handleError(new Error("Body was empty or null"));
        return ;
    }
    const body = JSON.parse(event.body!);
    Controller.execute(Request.deserialize(body))
        .then(handleSuccess)
        .catch(handleError)
}