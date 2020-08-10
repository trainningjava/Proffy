import { Request, Response } from "express";
import db from "../database/connection";

export default class CoursesController {
  async index(request: Request, response: Response) {
    const course = await db("course");

    return response.json(course);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    await db("course").insert({
      name,
    });

    return response.status(201).send();
  }
}
