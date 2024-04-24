import { Prisma, Tasks } from "@prisma/client";

export interface TasksRepository {
    create: (data: Prisma.TasksCreateInput) => Promise<Tasks>
    findAll: () => Promise<Tasks[]>
}