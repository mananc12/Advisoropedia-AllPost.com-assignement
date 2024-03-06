const { z } = require("zod");

//login validator zod schema

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email can't be greater than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255, { message: "Password can't be greater than 1024 characters" }),
});

module.exports = loginSchema;
