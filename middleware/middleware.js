import { HttpStatus, ErrorCode } from "../error/httpCodes.js";
import message from "../helper/message.js";
import services from "../helper/index.js"
const send = services.sendResponse


const asyncHandler = (fn) => {
    return function asyncUtilWrap(req, res, next) {
        const error = getValidationErrors(req)
        if (error) {
            return send(res, HttpStatus.BAD_REQUEST, ErrorCode.BAD_REQUEST_CODE, message.VALIDATION_FAILED, error)
        } else {
            const fnReturn = fn(req, res, next)
            return Promise.resolve(fnReturn).catch(next)
        }
    }
}

export { asyncHandler }