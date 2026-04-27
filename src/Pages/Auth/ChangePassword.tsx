import { Button, Card } from "antd";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";

import CommonInput from "../../Components/Common/CommonForm/CommonInput";

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const ChangePassword = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-linear-to-br from-brand-50 to-white px-4">

      {/* Background blur */}
      <div className="absolute w-125 h-125 bg-brand-100 rounded-full blur-3xl opacity-40 -top-25 -left-25" />

      <Card
        className="
          rounded-[36px]!
          relative z-10 
          w-full max-w-md
          border border-white/40 
          bg-white/70 backdrop-blur-2xl 
          shadow-2xl
          px-8 py-10
        "
      >

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center text-lg font-bold shadow-md">
              PG
            </div>
          </div>

          <h1 className="text-gray-900 text-2xl font-semibold tracking-tight">
            Set New Password
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Create a strong password to secure your account
          </p>
        </div>

        {/* FORM */}
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ChangePasswordSchema}
          onSubmit={(values) => {
            console.log(values);

            // success → login
            navigate("/auth/login");
          }}
        >
          <Form className="space-y-6">

            {/* PASSWORD */}
            <div className="relative space-y-1.5">
              <CommonInput
                name="password"
                label="New Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 cursor-pointer text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? <EyeInvisibleFilled /> : <EyeFilled />}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative space-y-1.5">
              <CommonInput
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
              />

              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-10 cursor-pointer text-gray-400 hover:text-gray-600 transition"
              >
                {showConfirm ? <EyeInvisibleFilled /> : <EyeFilled />}
              </span>
            </div>

            {/* BUTTON */}
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="
                h-12 
                rounded-[20px]!
                !bg-brand-800 
                hover:!bg-brand-600 
                active:!bg-brand-700
                border-none 
                font-medium
                shadow-theme-md
              "
            >
              Update Password
            </Button>

          </Form>
        </Formik>

      </Card>
    </div>
  );
};

export default ChangePassword;