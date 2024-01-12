import { STATUS_CODE } from "./constants";
import Moment from "moment";

class ApiResponse {
  status: any;
  result: any;
  error: any;
  time: any;
  constructor(status: any, result: any) {
    this.status = status;
    if (status == STATUS_CODE.SUCCESS) {
      result ? (this.result = result) : {};
    } else {
      result ? (this.error = result) : {};
    }
    // this.time = Moment(new Date()).format("dddd h:mm:ss D MMM YYYY");
    this.time=new Date().getTime();
  }
}

export default ApiResponse;
