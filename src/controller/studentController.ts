import { error } from "console";
import { respHandler } from "../res-handler";
import { RESPONSE_STATUS } from "../res-handler/constants";
import studentService from "../service/studentService";

export class StudentController {

    async createStudent(req: any, res: any) {
        try{
            let message = `student created successfully`
            let result:any = await studentService.createStudent(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async getStudent(req: any, res: any) {
        try{
            let message = `All student fetched successfully`
            let result:any = await studentService.getStudent(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async getStudentById(req: any, res: any) {
        try{
            let message = `Fetched student by id successfully`
            let result:any = await studentService.getStudentById(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async updateStudent(req: any, res: any) {
        try{
            let message = `student updated successfully`
            let result:any = await studentService.updateStudent(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async deleteStudent(req: any, res: any) {
        try{
            let message = `student deleted successfully`
            let result:any = await studentService.deleteStudentById(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
}
