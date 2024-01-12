import sequelize from "sequelize";
import Student, { StudentAttributes } from "../models/student"
import { Exception } from "../res-handler";
import { ERROR_TYPE, RESPONSE_STATUS } from "../res-handler/constants";
import messages from "../res-handler/messages";
import databaseInstance from "../config/db";
import { log } from "console";

export class StudentService {

    async createStudent(req: any) {
        const transaction = await databaseInstance.transaction();
        try {
            let {
                studentId,
                studentName,
                email,
                contactNumber,
                gender,
                dateOfBirth,
                createdBy,

            } = req.body

            let studentBody: StudentAttributes = {
                studentId: studentId,
                studentName: studentName,
                email: email,
                contactNumber: contactNumber,
                gender: gender,
                dateOfBirth: dateOfBirth,
                createdBy: createdBy,

            }
            let studentExist = await Student.findOne
                ({ where: { email: studentBody.email } })
            //console.log("  >>>return this data", studentExist);

            if (studentExist) {
                if (studentExist.email === req.body.email) {
                    throw new Exception(RESPONSE_STATUS.ALREADY_EXISTS, ERROR_TYPE.ALREADY_EXISTS, `Email Already Exist`)
                }
            }
            else {
                let studentData = await Student.create(studentBody)
                console.log("student has been created.")
                await transaction.commit();
                return Promise.resolve(studentData);
            }
        }
        catch (err) {
            console.error("Error in creating the student", err)
            await transaction.rollback();
            return Promise.reject(err);
        }
    }

    async updateStudent(req: any) {
        let transaction = await databaseInstance.transaction();
        try {
            let studentId = req?.params?.id

            let {
                studentName,
                contactNumber,
                gender,
                dateOfBirth,
            } = req.body

            let studentBody = {
                studentName,
                contactNumber,
                gender,
                dateOfBirth,
            }

            let studentExist = await Student.findOne({ where: { studentId: studentId } })
            if (!studentExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, ERROR_TYPE.NOT_FOUND, `${studentId}studentId does not exists`)
            }
              console.log(" >>>> after updating checking what it is returning",studentExist );
                  
            await Student.update(studentBody, { where: { studentId: studentId } })
            let updatedStudent = await Student.findOne({ where: { studentId: studentId } })
           
            console.log("student updated successfully");
            await transaction.commit();
            return Promise.resolve(updatedStudent);
        }
        catch (err) {
            console.log("Error in updation", err);
            await transaction.rollback();
            return Promise.resolve(err);
        }
    }
    async getStudent(req: any) {

        try {
            let data = await Student.findAll()
            console.log("All student fetched successfully");
            return Promise.resolve(data);
        }
        catch (err) {
            console.log("Error in fetching data", err);
            return Promise.reject(err);
        }
    }

    async getStudentById(req: any) {
        let studentId = req?.params?.id

        try {
            let studentExist = await Student.findOne({ where: { studentId: studentId } })
            if (!studentExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, ERROR_TYPE.NOT_FOUND, `${studentId}studentId does not exists`)
            }

            console.log("Fetched student data by Id");
            return Promise.resolve(studentExist);
        }
        catch (err) {
            console.log("Error in fetching data by Id", err);
            return Promise.reject(err);
        }
    }

    async deleteStudentById(req: any) {
        let studentId = req?.params?.id
        let transaction = await databaseInstance.transaction()

        try {
            let studentExist = await Student.findOne({ where: { studentId: studentId } })
            if (!studentExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, ERROR_TYPE.NOT_FOUND, `${studentId}studentId does not exists`)
            }

            let deletedData = await Student.destroy({ where: { studentId: studentId } })
            await transaction.commit();
            console.log("student Deleted Successfully");
            return Promise.resolve(deletedData);
        }
        catch (err) {
            console.log("Error in deleting student by Id", err);
            await transaction.rollback();
            return Promise.reject(err);
        }
    }

}
export default new StudentService();