const { z } = require("zod");

//object schema for registeration
const registerSchema = z.object({
  userName: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 1 characters" })
    .max(255, { message: "Username can't be greater than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email can't be greater than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255, { message: "Password can't be greater than 1024 characters" }),
  confirmPassword: z
    .string({ required_error: "Confirm your password" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255, { message: "Password can't be greater than 1024 characters" }),
  // profilePicture: z
  //   .string({ required_error: "Phone is required" })
  //   .trim()
  //   .min(10, { message: "Phone must be at least 10 characters" }),
  // name: z
  //   .string({ required_error: "Phone is required" })
  //   .trim()
  //   .min(3, { message: "Name must be at least 1 characters" })
  //   .max(255, { message: "Name can't be greater than 255 characters" }),
  check: z
    .boolean({ message: "Accept Terms and Conditions." })
    .refine((data) => data === true, {
      message: "You must accept Terms and Conditions.",
    }),
});

module.exports = registerSchema;
