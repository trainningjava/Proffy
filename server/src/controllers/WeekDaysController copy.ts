import { Request, Response } from "express";
import db from "../database/connection";

export default class WeekDaysController {
  async index(request: Request, response: Response) {
    const course = await db("weekday");

    return response.json(course);
  }
}
