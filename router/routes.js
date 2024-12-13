import express from "express";
import { asyncHandler } from "../middleware/middleware.js";
import institueController from "../controller/institute.js";
import services from "../helper/index.js";
const sendSuccess = services.sendSuccess;
const router = express.Router();



router.get("/getAllInstitues",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllInstitues()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)

router.get("/getAllBoards",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllBoards()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)

router.get("/getAllMedium",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllMedium()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)
router.get("/getAllClassCategory",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllClassCategory()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)
router.get("/getAllUniversity",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllUniversity()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)
router.get("/getAllStandard",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllStandard()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)
router.get("/getAllSubject",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllSubject()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)
router.get("/getAllDegree",
    asyncHandler(async function (req, res) {
        const responseData = await institueController.getAllDegree()
        if (responseData != undefined) { return sendSuccess(res, responseData) }
    })
)

router.post("/createRegistration",
    asyncHandler(async function (req, res) {
        const registrationData = req.body;

        const responseData = await institueController.createRegistration(registrationData);

        if (responseData !== undefined) {
            return sendSuccess(res, responseData);
        }

        return services.sendResponse(res, 400, 400, "Failed to create registration", null);
    })
);


export default router
