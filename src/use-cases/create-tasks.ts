import { Status, Tasks } from "@prisma/client";
import { TasksRepository } from "../repositories/tasks-repository";

interface CreateTaskUseCaseRequest {
    name: string;
    status: Status;
    startTime: Date;
    endTime: Date;
}

type CreateTaskUseCasResponse = Tasks

export class CreateTasksUseCase {
    constructor(private tasksRepository: TasksRepository) { }

    async execute({ name, status, startTime, endTime }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCasResponse> {
        const createTask = await this.tasksRepository.create({ name, status, startTime, endTime })

        if (!createTask) {
            throw new Error()
        }

        return createTask
    }
}