import { Button, Card } from "antd";
import { useState } from "react";
import { Formik, Form, type FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

import CommonInput from "../../Components/Common/CommonForm/CommonInput";
import CommonCheckbox from "../../Components/Common/CommonForm/CommonCheckbox";
import { LoginSchema } from "../../Utils";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";
import { setLogin, setSignOut, useAppDispatch } from "../../Store";
import { Mutations } from "../../Api";
import type { LoginFormValues, LoginPayload } from "../../Types";
import { ROUTES } from "../../Constants";

const Login = () => {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending: isLoginPending } = Mutations.useLogin();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    values: LoginFormValues,
    { resetForm }: FormikHelpers<LoginFormValues>
  ) => {
    const payload: LoginPayload = {
      userName: values.email.toLowerCase(),
      password: values.password,
    };

    login(payload, {
      onSuccess: (response) => {
        const res = response?.data;
        const data = res ?? res;

        if (!data?.token) {
          console.error("Invalid login response", response);
          return;
        }

        dispatch(setSignOut());
        dispatch(setLogin(data));

        const role = data.user?.role;

        if (role === "admin") {
          navigate(ROUTES.DASHBOARD, { replace: true });
        } else {
          navigate(ROUTES.USER.HOME, { replace: true });
        }

        resetForm();
      }
    });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent-50 px-4">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-100 h-100 bg-brand-200 rounded-full blur-3xl opacity-40 -top-25 -left-25" />
      <div className="absolute w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-30 bottom-0 right-0" />

      <Card
        className="
          rounded-[36px]!
          [&_.ant-card]:rounded-[36px]!
          relative z-10 
          w-full max-w-md
          border border-white/40 
          bg-white/70 backdrop-blur-2xl 
          shadow-theme-xl
          px-8 py-10
        "
      >

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center text-lg font-bold shadow-theme-md">
              PG
            </div>
          </div>

          <h1 className="text-gray-900 text-2xl font-semibold tracking-tight">
            Payment Gateway
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Secure access to your dashboard
          </p>
        </div>

        {/* FORM */}
        <Formik<LoginFormValues>
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">

            {/* EMAIL */}
            <div className="space-y-1.5">
              <CommonInput
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative space-y-1.5">
              <CommonInput
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 cursor-pointer text-gray-400 hover:text-brand-600 transition"
              >
                {showPassword ? <EyeInvisibleFilled /> : <EyeFilled />}
              </span>
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm pt-1">
              <CommonCheckbox
                label="Remember me"
                checked={remember}
                onChange={setRemember}
              />
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
                !bg-brand-500 
                hover:!bg-brand-600 
                active:!bg-brand-700
                border-none 
                font-medium
                shadow-theme-md
              "
              loading={isLoginPending}
            >
              Continue
            </Button>

          </Form>
        </Formik>

      </Card>
    </div>
  );
};

export default Login;