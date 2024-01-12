import { error } from "console";
import { respHandler } from "../res-handler";
import { RESPONSE_STATUS } from "../res-handler/constants";
import addressService from "../service/addressService";

export class AddressController {

    async createAddress(req: any, res: any) {
        try{
            let message = `Address created successfully`
            let result:any = await addressService.createAddress(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async getAddress(req: any, res: any) {
        try{
            let message = `All Address fetched successfully`
            let result:any = await addressService.getAddress(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async getAddressById(req: any, res: any) {
        try{
            let message = `Fetched address by id successfully`
            let result:any = await addressService.getAddressById(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async updateAddress(req: any, res: any) {
        try{
            let message = `Address updated successfully`
            let result:any = await addressService.updateAddress(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
    async deleteAddress(req: any, res: any) {
        try{
            let message = `Address deleted successfully`
            let result:any = await addressService.deleteAddressById(req)
            respHandler.apiResponseSuccess(res, result, RESPONSE_STATUS.SUCCESS, message)
        }
        catch(err){
            respHandler.sendError(res, err)
        }
    }
}
