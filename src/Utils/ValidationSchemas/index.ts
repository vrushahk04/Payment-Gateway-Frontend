import * as Yup from "yup";
import { Validation } from "./Validation";
import type { Primitive } from "../../Types";

export const RequiredWhen = (dependentField: string, requiredValues: Primitive[], label: string, type: "string" | "number" | "array" = "string", options?: { extraRules?: (schema: Yup.AnySchema) => Yup.AnySchema }) => {
    let schema: Yup.AnySchema;

    if (type === "number") schema = Yup.number();
    else if (type === "array") schema = Yup.array();
    else schema = Yup.string();

    if (options?.extraRules) schema = options.extraRules(schema);

    return schema.test("required-when", `${label} is required`, (value, { from }) => {
        const root = from?.[from.length - 1]?.value;
        const dependentValue = root?.[dependentField];
        const match = requiredValues.includes(dependentValue);

        if (match) {
            if (type === "array") return Array.isArray(value) && value.length > 0;
            if (type === "number") return value !== undefined && value !== null;
            return !!value;
        }

        return true;
    });
};

//Login
export const LoginSchema = Yup.object({
    email: Validation("string", "Email", {
        extraRules: (s) => s.email("Invalid email address"),
    }),
    password: Validation("string", "Password", {
        extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "Password must include at least one special character"),
    }),
});

//verfyOTP
export const VerifyOtpSchema = Yup.object({
    otp: Validation("string", "OTP", {
        extraRules: (s) => s.trim().length(6, "OTP must be 6 digits"),
    }),
});