import { HttpStatus, ErrorCode } from "../error/httpCodes.js"
import message from "./message.js";

class services {

    static prepareResponse = (httpStatusCode, message, data) => {
        if (data == null && " ") {
            return {
                responseCode: httpStatusCode,
                responseMessage: message,
            };
        }
        return {
            responseCode: httpStatusCode,
            responseMessage: message,
            responseData: data,
        };
    };


    static sendResponse = async (res, httpStatusCode, HttpStatus, message, data) => {
        await res.status(httpStatusCode).send(this.prepareResponse(HttpStatus, message, data));
    }


    static async sendSuccess(res, payload) {
        return services.sendResponse(res, HttpStatus.SUCCESS, HttpStatus.SUCCESS, message.SUCCESSFUL, payload)
    }
}

export default services