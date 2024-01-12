import ApiResponse from './apiResponse'
import { RESPONSE_STATUS, ERROR_TYPE, STATUS_CODE } from './constants'
import exception from "./customException"


let result: any
// rslt - is the apiResponse result 
function sendResponse(res: any, rslt: any, statusCode: any = undefined) {
  let err = rslt && rslt.error

  if (err) {
    switch (err.message) {
      case ERROR_TYPE.INTERNAL_SERVER_ERROR:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send({ ...rslt, error: { ...rslt.error } })
      case ERROR_TYPE.BAD_REQUEST:
        return res.status(RESPONSE_STATUS.BAD_REQUEST).send({ ...rslt, error: { ...rslt.error} })
      case ERROR_TYPE.NOT_IMPLEMENTED:
        return res.status(RESPONSE_STATUS.NOT_IMPLEMENTED).send({ ...rslt, error: { ...rslt.error} })
      case ERROR_TYPE.ALREADY_EXISTS:
        return res.status(RESPONSE_STATUS.ALREADY_EXISTS).send({ ...rslt, error: { ...rslt.error }})
      case ERROR_TYPE.NOT_ALLOWED:
        return res.status(RESPONSE_STATUS.NOT_ALLOWED).send({ ...rslt, error: { ...rslt.error } })
      case ERROR_TYPE.NOT_FOUND:
        return res.status(RESPONSE_STATUS.NOT_FOUND).send({ ...rslt, error: { ...rslt.error } })
      case ERROR_TYPE.UNAUTHORIZED:
        return res.status(RESPONSE_STATUS.UNAUTHORIZED).send({ ...rslt, error: { ...rslt.error } })
      default:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send({ ...rslt, error: { ...rslt.error } })
    }
  }
 
  if (statusCode) return res.status(statusCode).send(rslt)
  return res.status(RESPONSE_STATUS.SUCCESS).send(rslt)
}

function sendError(res: any, err: any) {
  if (!err?.errType) {
    err = exception.internalServerError
  }

  result = new ApiResponse(STATUS_CODE.ERROR, err)
  sendResponse(res, result)
}

function handleError(err: any, req: any, res: any, next: any) {
  // unhandled error
  sendError(res, err)
}

function sendSuccess(res: any, result: any, statusCode = RESPONSE_STATUS.SUCCESS) {
  result = new ApiResponse(STATUS_CODE.SUCCESS, result)
  sendResponse(res, result, statusCode)
}

function sendSuccessWithMsg(res: any, msg: any, statusCode = RESPONSE_STATUS.SUCCESS) {
  let rslt = { message: msg }
  let result = new ApiResponse(STATUS_CODE.SUCCESS, rslt)
  sendResponse(res, result, statusCode)
}


function apiResponseSuccess(res: any, data: any, statusCode = RESPONSE_STATUS.SUCCESS, message: any = 'success') {
  message = message === "" ? "success" : message
  delete data.message
  delete data.status
  sendAPIResponse({ res, statusCode, message, data });
}

function apiResponseError(res: any, error: any, statusCode = RESPONSE_STATUS.FORBIDDEN) {
  let response = { statusCode, error }
  let result = new ApiResponse(STATUS_CODE.ERROR, response.error)
  sendResponse(res, result, statusCode)
}


// function sendAPIResponse({ res, statusCode, message, data }) {
//   let returnRes: any = {
//     status: 1,
//     statusCode,
//     message,
//     result: data
//   }
  function sendAPIResponse({ res, statusCode, message, data }: { res: any; statusCode: number; message: string; data: any }): void {
    let returnRes: any = {
      status: 1,
      statusCode,
      message,
      result: data
    };
  if (data?.count) {
    returnRes = {
      count: data?.count,
      ...returnRes,
      result: data?.rows,
    }
  }
  return res.status(statusCode).send(returnRes);
}


export {
  sendResponse,
  sendError,
  sendSuccess,
  sendSuccessWithMsg,
  apiResponseSuccess,
  apiResponseError,
}