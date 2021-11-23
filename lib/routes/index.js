"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import User from '../user';
const router = express_1.default.Router();
const ResponseHandler = (status, message, data) => {
    return { status, message, data, success: true };
};
const Data = [];
// /GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { Data });
});
/* GET one user. */
router.get('/:name', function (req, res, next) {
    const { name } = req.params;
    const includes = Data.includes(name);
    if (includes) {
        const index = Data.indexOf(name);
        return res.status(200).json({ data: Data[index] });
    }
    res.status(404).json({ message: 'sorry user wasent found' });
});
/* POST add user. */
router.post('/', function (req, res, next) {
    const { name, age, gender, phone, address, role } = req.body;
    Data.push(name, age, gender, phone, address, role);
    const response = ResponseHandler(201, "successful", Data);
    res.send(response);
});
exports.default = router;
