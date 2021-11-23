"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// view engine setup
app.set("views", path_1.default.join(__dirname, "/../views"));
app.set("view engine", "ejs");
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: ['http://localhost:3005/'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "/../public")));
app.use("/", index_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
// app.use(function (
//   err: HttpError,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};
//   console.log(err);
//   // render the error page
//   res.status(err.status || 500);
//   res.send(err);
// });
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port ${PORT}...`);
});
