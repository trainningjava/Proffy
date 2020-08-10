import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import CoursesController from "./controllers/CoursesController";
import WeekDaysController from "./controllers/WeekDaysController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const coursesController = new CoursesController();
const weekDaysController = new WeekDaysController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

routes.get("/courses", coursesController.index);
routes.post("/courses", coursesController.create);

routes.get("/weekdays", weekDaysController.index);

export default routes;
