import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string(), // Email or userName
  password: z.string(),
});
