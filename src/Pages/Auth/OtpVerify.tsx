import { Button, Card } from "antd";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import CommonOtpInput from "../../Components/Common/CommonForm/CommonOtpInput";
import { useOtpTimer } from "../../Utils";

const OtpVerify = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const { formatted, canResend, start } = useOtpTimer(600);

  useEffect(() => {
    start(); // start timer on mount
  }, [start]);

  const handleSubmit = () => {
    if (otp.length !== 6) return;
    console.log("OTP:", otp);
    navigate("/dashboard");
  };

  const handleResend = () => {
    if (!canResend) return;

    console.log("Resend OTP");
    // call API here

    start();
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent-50 px-4">

      {/* BACKGROUND */}
      <div className="absolute w-125 h-125 bg-brand-200 rounded-full blur-3xl opacity-40 -top-25 -left-25" />
      <div className="absolute w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-30 bottom-0 right-0" />

      <Card
        className="
          rounded-[36px]!
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
            Verify OTP
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        {/* FORM */}
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">

            {/* OTP INPUT */}
            <div className="space-y-3">
              <label className="text-sm text-gray-600 font-medium">
                OTP Code
              </label>

              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-sm">
                <CommonOtpInput value={otp} setValue={setOtp} />
              </div>
            </div>

            {/* TIMER + RESEND */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">
                {canResend
                  ? "You can request a new code"
                  : `Resend in ${formatted}`}
              </span>

              <button
                type="button"
                onClick={handleResend}
                disabled={!canResend}
                className={`font-medium transition ${
                  canResend
                    ? "text-brand-700 hover:text-brand-600"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                Resend
              </button>
            </div>

            {/* BUTTON */}
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              disabled={otp.length !== 6}
              className="
                h-12 
                rounded-[20px]!
                bg-brand-500 
                hover:!bg-brand-600 
                active:!bg-brand-700
                disabled:!bg-gray-300
                border-none 
                font-medium
                shadow-theme-md
              "
            >
              Verify & Continue
            </Button>

          </Form>
        </Formik>

      </Card>
    </div>
  );
};

export default OtpVerify;