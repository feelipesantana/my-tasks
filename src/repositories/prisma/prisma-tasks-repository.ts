import { Prisma } from "@prisma/client";
import { prisma } from "../../services/prisma";
import { TasksRepository } from "../tasks-repository";

export class PrismaTasksRepository implements TasksRepository {
    async create(data: Prisma.TasksCreateInput) {
        const createTask = await prisma.tasks.create({
            data: {
                name: data.name,
                startTime: data.startTime,
                endTime: data.endTime,
                status: data.status
            }
        })

        return createTask
    }
    async findAll() {
        const findAllTasks = await prisma.tasks.findMany()

        return findAllTasks
    }
}