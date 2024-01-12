
class Exception {
    errType: any;
    message: any;
    err: any;
    constructor(errType:any, message:any, stackTrace?:any) {
      this.errType = errType;
      this.message = message;
      if (stackTrace) {
        this.err = stackTrace;
      }
    }
  }

export default Exception 