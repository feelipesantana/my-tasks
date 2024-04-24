import { PrismaTasksRepository } from "../../repositories/prisma/prisma-tasks-repository";
import { CreateTasksUseCase } from "../create-tasks";

export function CreateTasksFactory() {
    const prismaTasksRepository = new PrismaTasksRepository()
    const createTasksUseCase = new CreateTasksUseCase(prismaTasksRepository)

    return createTasksUseCase
}