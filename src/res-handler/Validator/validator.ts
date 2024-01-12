'use strict'
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export class Validator {
    rules: any
    constructor(rules: any){
        this.rules = rules
    }
 makeValidation(key: string): any {
    // The makeValidation generates an array 
    //of middleware functions based on the provided key.
        try {
            if(!key){
                throw new Error(`Invalid validator key '${key}' supplied. `)
            }
     this.rules[key]

            return [
                ...this.rules[key],
                (req: Request, res: Response, next: NextFunction) => {
                    const errors = validationResult(req)
                    if(!errors.isEmpty()) {
                        return res.status(400).send({
                            errors: errors.array()
                        })
                    }
                    next()  
                }
            ]
        } catch(err) {
            console.log('Error' + err);
        }
    }
}