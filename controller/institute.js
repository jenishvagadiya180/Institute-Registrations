import { sequelize } from "../database/connection.js";

const institueController = {

    getAllInstitues: async () => {
        const instituteTypes = await sequelize.query(
            `SELECT * FROM public."Institutes"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return instituteTypes;
    },

    getAllBoards: async () => {
        const boardList = await sequelize.query(
            `SELECT * FROM public."Boards"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return boardList;
    },

    getAllMedium: async () => {
        const mediumList = await sequelize.query(
            `SELECT * FROM public."Medium"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return mediumList;
    },

    getAllClassCategory: async () => {
        const classCAtegoriesList = await sequelize.query(
            `SELECT * FROM public."ClassCategories"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return classCAtegoriesList;
    },

    getAllUniversity: async () => {
        const universitiesList = await sequelize.query(
            `SELECT * FROM public."Universities"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return universitiesList;
    },

    getAllStandard: async () => {
        const standardList = await sequelize.query(
            `SELECT * FROM public."Standards"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return standardList;
    },

    getAllSubject: async () => {
        const subjectList = await sequelize.query(
            `SELECT * FROM public."Subjects"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return subjectList;
    },
    getAllDegree: async () => {
        const degreeTypesList = await sequelize.query(
            `SELECT * FROM public."DegreeTypes"`,
            {
                type: sequelize.QueryTypes.SELECT,
                raw: true
            }
        );
        return degreeTypesList;
    },

    createRegistration: async (registrationData) => {
        const {
            userName,
            instituteId,
            boardId,
            medium,
            classCategoryId,
            universityId,
            subjectId,
            standardId,
            degreeId
        } = registrationData;

        const query = `
            INSERT INTO public."registrations" (
                "userName", "instituteId", "boardId", "medium", 
                "classCategoryId", "universityId", "subjectId", 
                "standardId", "degreeId", "createdAt", "updatedAt"
            )
            VALUES (
                :userName, :instituteId, :boardId, :medium, 
                :classCategoryId, :universityId, :subjectId, 
                :standardId, :degreeId, NOW(), NOW()
            ) RETURNING *; 
        `;

        const result = await sequelize.query(query, {
            replacements: {
                userName,
                instituteId,
                boardId,
                medium,
                classCategoryId,
                universityId,
                subjectId,
                standardId,
                degreeId
            },
            type: sequelize.QueryTypes.INSERT,
            raw: true
        });

        return result[0];
    }
}

export default institueController