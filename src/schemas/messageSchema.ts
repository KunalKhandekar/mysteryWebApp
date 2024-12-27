import {z} from "zod"

export const messageSchema = z.object({
    content: z.string().min(10, { message: "Message must be of minimum 10 characters" }).max(300, { message : "Message cannot exceed the limit of 300 characters"
     })
})