import services from "../helper/index.js"


const asyncHandler = (fn) => {
    return function asyncUtilWrap(req, res, next) {
        const fnReturn = fn(req, res, next)
        return Promise.resolve(fnReturn).catch(next)

    }
}

export { asyncHandler }