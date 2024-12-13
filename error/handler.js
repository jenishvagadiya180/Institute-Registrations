import { HttpStatus, ErrorCode } from "./index.js";
import services from "../helper/index.js";
import message from "../helper/message.js";
const send = services.sendResponse


function errorHandler(error, req, res, next) {
    console.log('error :>> ', error);

    let status = HttpStatus.INTERNAL_SERVER_ERROR
    let code = ErrorCode.INTERNAL_SERVER_ERROR_CODE
    let msg = message.SOMETHING_WENT_WRONG

    if (error) {
        status = error.status || status
        code = error.code || code
        msg = error.message || msg
    }

    let detail = {}
    let log = {}
    detail.time = Date.now()
    detail.message = error.message
    detail.stack = error.stack
    log.title = error.name
    log.routeName = req.path
    log.path = error.lineNumber
    log.errorData = detail
    return send(res, status, code, msg, log)
}

export default errorHandler