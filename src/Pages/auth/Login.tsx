import { Button, Card } from "antd"
import { useState } from "react";
import { Formik, Form } from 'formik';
import CommonInput from "../../Components/Common/commonForm/commonInput";
import CommonCheckbox from "../../Components/Common/commonForm/commonCheckbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [step, setStep] = useState<"login" | "otp">("otp");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[var(--primary-20)]">
        <Card className="bg-white rounded-2xl px-8 pt-10 pb-8 shadow-lg border border-slate-100 w-[400px] max-[480px]:w-full">
          <div className="text-center mb-8">
           <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-[var(--primary-20)] flex items-center justify-center text-sm font-semibold text-[var(--black)]">
                PG
              </div>
            </div>
            <h1 className="text-slate-800 text-[1.75rem] font-bold mb-[6px] tracking-[-0.025em] max-[480px]:text-[1.5rem]">
              Payment Gateway
              
            </h1>
            
            <p className="text-slate-500 text-sm font-medium">
              Trusted & encrypted payment access
            </p>
          </div>
          {step === "login" && (
            <>
              <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {
                console.log(values);
                setStep("otp");
              }}>
                <Form className="space-y-4">
                  <CommonInput name="email" label="Email" type="email" placeholder="Enter your email" />
                  <CommonInput name="password" label="Password" type="password" placeholder="Enter your password" />
                  <div className="flex items-center justify-between mt-4">
                    <CommonCheckbox
                      label="Remember me"
                      checked={remember}
                      onChange={setRemember}
                    />
                    <Button
                      type="link"
                      className="text-sm font-medium"
                      onClick={() => navigate("/forgot-password")}
                      >
                      Forgot Password?
                      </Button>
                  </div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    className="mt-2 h-11 rounded-lg font-medium"
                  >
                    Login
                  </Button>
                </Form>
              </Formik>
            </>
          )}
          {step === "otp" && (
            <Formik
              initialValues={{ otp: "" }}
              onSubmit={(values) => {
                console.log("OTP:", values.otp);
              }}
            >
              <Form>
                <p className="text-sm text-slate-500 mb-2 text-center">
                  Verify your identity to continue
                </p>

                <p className="text-xs text-slate-400 text-center mb-4">
                  A secure code was sent to your registered email
                </p>
                <CommonInput
                  name="otp"
                  label="Enter OTP"
                  placeholder="Enter 6-digit OTP"
                  type="text"
                />

                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="mt-4"
                >
                  Verify OTP
                </Button>
                <div className="flex justify-between mt-3 text-sm">
                  <span className="text-slate-500">Didn’t receive OTP?</span>
                  <Button type="link" className="p-0 h-auto">
                    Resend
                  </Button>
                </div>

                <div className="text-center mt-4">
                  <Button
                    type="link"
                    onClick={() => setStep("login")}
                  >
                    Back to Login
                  </Button>
                </div>
              </Form>
            </Formik>
          )}
        </Card>
      </div>
    </>
  )
}

export default Login
