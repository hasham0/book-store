import * as z from "zod";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginTS = z.infer<typeof loginSchema>;
export { loginSchema };
