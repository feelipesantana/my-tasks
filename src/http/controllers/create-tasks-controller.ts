import { Status } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { CreateTasksFactory } from "../../use-cases/factory/create-tasks-factory";


export async function CreateTasksController(request: FastifyRequest, reply: FastifyReply) {
    const schemaZod = z.object({
        name: z.string(),
        status: z.nativeEnum(Status),
        startTime: z.string().datetime(),
        endTime: z.string().datetime()
    })

    const { name, status, startTime, endTime } = schemaZod.parse(request.body);


    try {
        const tasksFactory = CreateTasksFactory();

        const createTask = await tasksFactory.execute({
            name,
            status,
            startTime,
            endTime,
        })

        if (!createTask) {
            reply.status(404).send("Error to create task")
        }

        reply.status(201).send(createTask)
    } catch (err) {
        console.log(err)
    }

}