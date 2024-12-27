import { z } from "zod";

export const userNameValidation = z
    .string()
    .min(2, { message: "Username should be atleast of 2 characters" })
    .max(30, { message: "Username cannot exceed 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username cannot contain a special character" }
    );

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, { message: "Password must be atleast of 6 characters"}),
});