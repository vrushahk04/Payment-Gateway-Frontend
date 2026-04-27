import { Button, Card } from "antd";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import CommonInput from "../../Components/Common/CommonForm/CommonInput";

const ForgotSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();

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
            Forgot Password
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Enter your email to receive a verification code
          </p>
        </div>

        {/* FORM */}
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotSchema}
          onSubmit={(values) => {
            console.log(values);
            navigate("/verify-otp");
          }}
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
              Send OTP
            </Button>

            {/* BACK */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate("/auth/login")}
                className="text-sm text-gray-500 hover:text-gray-700 transition"
              >
                Back to Login
              </button>
            </div>

          </Form>
        </Formik>

      </Card>
    </div>
  );
};

export default ForgotPassword;
