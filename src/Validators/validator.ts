import { check } from "express-validator";
import { Validator } from "../res-handler/Validator/validator";

// validators are used to check whether input matches your criteria 
// also create will state this will go in body ::
class Studentvalidator extends Validator {
    constructor() {
        super({
            create: [
                // here trim is used to returns a copy of string  that not contain any spaces 
                check('studentName').trim().notEmpty().escape()
                    .withMessage("Student name required ").isAlpha(),
                // escape is used to protecting yourself from cross site scrtipting 

                // isEmail(): This validator checks if the incoming string is a valid email address..
                check('email').trim().notEmpty().withMessage("email is required").isEmail()
                    .withMessage("Email must be a valid address"),

                // now contact no
                check('contactNumber').trim().notEmpty().isLength({ min: 10, max: 10 })
                    .withMessage("phone number can't exceeds 20. "),
                // gender 

                check('gender').trim().notEmpty().withMessage("gender is Required").isString()
                    .withMessage("gender value must be string ").isIn(["Male", "Female", "Others"]),
                // isIn(): check if input value contains one of value present in array.

                check('dateOfBirth').trim().notEmpty().withMessage("dateOfBirth is required").isISO8601().isDate(),
                   
                // .isISO8601 internationally agreed way to represent dates: YYYY-MM-DD like 2012-09-27.
                // .isDate() is validate the date with formate dd/mm/yyyy

            ],
            update:[
                check('studentName').trim().optional().notEmpty().escape().withMessage("studentName is Required")
                .isAlpha() .withMessage("FirstName must be alphabet letters."),
                
                check('email').trim().optional().notEmpty().withMessage("email is required").isEmail()
                .withMessage("Email must be a valid email addresss."),

                check('phone').trim().optional().notEmpty().isLength({ min: 10, max: 20 })
                .withMessage("Phone Number shouldn't exceeds max length ."),

                check('gender').trim().optional().notEmpty().withMessage("gender is required").isString()
                .withMessage("Gender value must be string").isIn(["Male","Female","Other"]).withMessage("Gender value is invalid"),

                check('dateOfBirth').trim().optional().notEmpty().withMessage("DOB is required").isISO8601()
               .withMessage("DOB formate is in correct"),

            ]
        })
    }
}
 export default Studentvalidator;