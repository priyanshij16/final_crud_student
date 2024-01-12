import { check } from "express-validator";
import { Validator } from "../res-handler/Validator/validator";
import exp from "constants";

// validators are used to check whether input matches your criteria 
// also create will state this will go in body ::
class Addressvalidator  extends Validator {
    constructor() {
        super({
            create: [
                // here trim is used to returns a copy of string  that not contain any spaces 
                check('state').trim().notEmpty().escape()
                    .withMessage("State name is required ").isAlpha(),
                // escape is used to protecting yourself from cross site scrtipting 

                // isEmail(): This validator checks if the incoming string is a valid email address..
                check('city').trim().notEmpty().withMessage("city is required").isEmail()
                    .withMessage("city name requiredd"),

                // now contact no
                check('pincode').trim().notEmpty().isLength({ min: 6, max: 10 })
                    .withMessage("pincode should be within range "),

            ],
            update: [
                check('state').trim().optional().notEmpty().escape().withMessage("statName is Required")
                    .isAlpha().withMessage("state name first letter should be capital."),

                check('city').trim().optional().notEmpty().escape().withMessage("city name Required")
                    .isAlpha().withMessage("city must be alphabet letters."),

                check('pincode').trim().optional().notEmpty().isLength({ min: 10, max: 20 })
                    .withMessage("pincode shouldn't exceeds max length ."),
            ]
        })
    }
}
export default Addressvalidator;