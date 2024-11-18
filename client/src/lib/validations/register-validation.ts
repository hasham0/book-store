import * as z from "zod";

const registerSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password should be 8 characters long",
    }),
});

export type RegisterTS = z.infer<typeof registerSchema>;
export { registerSchema };
