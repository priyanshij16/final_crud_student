const Exception = require('./exception')
const {Error_Type} = require('./constants')

export default {
    notFoundError(msg: any,err: any){
        return new Exception(
            Error_Type.Not_Found,
            msg || 'NotFound Error',
            err,
        )
    },
    badRequestError(msg: any,err: any){
        return new Exception(
            Error_Type.Bad_Request, 
            msg || 'Bad Request', 
            err,
        )
    },
    notImplementedEror(msg: any, err: any){
        return new Exception(
            Error_Type.Not_Implemented,
            msg || 'NotImplemented Error',
            err,
        )
    },
    alreadyExistError(msg: any,err: any){
        return new Exception(
            Error_Type.Already_Exists,
            msg || 'AlreadyExist Error',
            err,
        )
    },
 
    notAllowedError(msg: any,err: any){
        return new Exception(
            Error_Type.Not_Allowed,
            msg || 'NotAllowed Error',
            err,
        )
    },
    internalServerError(msg: any, err: any){
        return new Exception(
            Error_Type.Internal_Server_Error,
            msg || 'Hey Internal Server Error, please try after some time.',
            err,
        )
    },
    unAuthenticatedAccess(msg: any, err: any){
        return new Exception(
            Error_Type.Unauthorized,
            msg || 'Unauthorized Access',
            err,
        )
    },
    forbiddenAccess(msg: any, err: any){
        return new Exception(
            Error_Type.Forbidden,
            msg || 'Forbidden Access',
            err,
        )
    },
    badGatewayError(msg: any,err: any){
        return new Exception(
            Error_Type.Bad_Gateway,
            msg || 'BadGateway Error',
            err,
        )
    },
}