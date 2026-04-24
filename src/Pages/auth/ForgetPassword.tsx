import { Button, Card } from "antd";
import { useState } from "react";
import { Formik, Form } from "formik";
import CommonInput from "../../Components/Common/commonForm/commonInput";

const ForgotPassword = () => {
  const [step, setStep] = useState<"email" | "reset">("email");
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--primary-20)]">
      <Card className="bg-white rounded-2xl px-8 pt-10 pb-8 shadow-lg border border-slate-100 w-[400px] max-[480px]:w-full">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-20)] flex items-center justify-center text-sm font-semibold text-[var(--black)]">
              PG
            </div>
          </div>

          <h1 className="text-slate-800 text-[1.75rem] font-bold mb-[6px]">
            Reset Password
          </h1>

          <p className="text-slate-500 text-sm">
            {step === "email"
              ? "Enter your email to receive OTP"
              : `Enter OTP sent to ${email}`}
          </p>
        </div>

        {/* STEP 1: EMAIL */}
        {step === "email" && (
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => {
              console.log("Send OTP:", values.email);
              setEmail(values.email);
              setStep("reset");
            }}
          >
            <Form className="space-y-4">
              <CommonInput
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
              />

              <Button type="primary" htmlType="submit" block>
                Send OTP
              </Button>

              <div className="text-center">
                <Button type="link" href="/login">
                  Back to Login
                </Button>
              </div>
            </Form>
          </Formik>
        )}

        {/* STEP 2: RESET */}
        {step === "reset" && (
          <Formik
            initialValues={{ otp: "", password: "" }}
            onSubmit={(values) => {
              console.log("Reset:", { email, ...values });
            }}
          >
            <Form className="space-y-4">

              <CommonInput
                name="otp"
                label="OTP"
                placeholder="Enter 6-digit OTP"
              />

              <CommonInput
                name="password"
                label="New Password"
                type="password"
                placeholder="Enter new password"
              />

              <Button type="primary" htmlType="submit" block>
                Reset Password
              </Button>

              <div className="flex justify-between text-sm mt-2">
                <span className="text-slate-500">Didn’t receive OTP?</span>
                <Button type="link" className="p-0 h-auto">
                  Resend
                </Button>
              </div>

              <div className="text-center">
                <Button type="link" href="/login">
                  Back to Login
                </Button>
              </div>
            </Form>
          </Formik>
        )}

      </Card>
    </div>
  );
};

export default ForgotPassword;