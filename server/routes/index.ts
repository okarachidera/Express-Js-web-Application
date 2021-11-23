import  express from 'express';
import { NextFunction, Request, Response } from "express";
import { ErrorInt } from '../inteface';
// import User from '../user';


const router = express.Router();

const ResponseHandler = (status:number, message:string, data:object):ErrorInt =>{
  return { status, message, data, success: true }
}

const Data: string [] = [] 

// /GET home page. */
 router.get('/', function(req:Request, res:Response, next:NextFunction) {
 
  res.render('index', {Data});
});


/* GET one user. */
router.get('/:name', function(req:Request, res:Response, next:NextFunction) {
  const {name} = req.params
  const includes = Data.includes(name)
  if(includes){
    const index = Data.indexOf(name)
    return res.status(200).json({data: Data[index]})
  }
  res.status(404).json({message:'sorry user wasent found'})
});


/* POST add user. */
router.post('/', function(req:Request, res:Response, next:NextFunction) {
  const {name, age, gender, phone, address, role } = req.body;
 Data.push(name, age, gender, phone, address, role)
  const response = ResponseHandler(201, "successful", Data)
  res.send(response)
})





export default  router;


