import { HttpStatus, ErrorCode } from "./httpCodes.js";

class requestError extends Error {
    constructor(status, code, message, data) {
        super(message)
        this.status = status
        this.code = code
        this.data = data
    }
}

class badRequestError extends requestError {
    constructor(code, message, data) {
        super(HttpStatus.BAD_REQUEST, code, message, data)
    }
}

class notFoundError extends requestError {
    constructor(code, message, data) {
        super(HttpStatus.NOT_FOUND, code, message, data)
    }
}   

export {HttpStatus, ErrorCode, requestError, badRequestError, notFoundError }