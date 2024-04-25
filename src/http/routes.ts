import { FastifyInstance } from "fastify";
import { CreateTasksController } from "./controllers/create-tasks-controller";

export async function appRoutes(app: FastifyInstance) {
    app.post("/register", CreateTasksController)
}