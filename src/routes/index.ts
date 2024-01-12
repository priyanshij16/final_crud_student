import {Router} from 'express'
import {StudentController} from '../controller/studentController';
import { AddressController } from '../controller/addressController';
// this is for validator 
import Studentvalidator from "../Validators/validator";
import Addressvalidator from '../Validators/valid-add';
// const mainRouter = Router();

 const valid = new Studentvalidator();
  const valid_add = new Addressvalidator();

export class MainRouter {

    router: Router
    studentModule: StudentController
    addressModule: AddressController
     //A A constructor is a special function that exists inside a class, that is called only once 
     //when the object is created. Classes are unique, and therefore so are the constructor function calls.
    constructor() {
        // Initialize  Controller Object
        this.studentModule = new StudentController()
        this.addressModule = new AddressController()
       
        // Initialize Router Object
        this.router = Router()
        this.studentRoutes()
        this.addressRoutes()
   }
    private studentRoutes() {
        // firstly validation function comes then normal create function 
        this.router.route("/api/v1/students").post(valid.makeValidation('create'),this.studentModule.createStudent )
        this.router.route("/api/v1/students").get(this.studentModule.getStudent)
        this.router.route("/api/v1/students/:id").get(this.studentModule.getStudentById)
        this.router.route("/api/v1/students/:id").patch(valid.makeValidation('update'),this.studentModule.updateStudent)
        this.router.route("/api/v1/students/:id").delete(this.studentModule.deleteStudent)
    }
    private addressRoutes(){
        this.router.route("/api/v1/address").post(valid_add.makeValidation('create'),this.addressModule.createAddress)
        this.router.route("/api/v1/address").get(this.addressModule.getAddress)
        this.router.route("/api/v1/address/:id").get(this.addressModule.getAddressById)
        this.router.route("/api/v1/address/:id").patch(valid_add.makeValidation('update'),this.addressModule.updateAddress)
        this.router.route("/api/v1/address/:id").delete(this.addressModule.deleteAddress)
    }
   
}

let mainRoute = new MainRouter().router
export default mainRoute