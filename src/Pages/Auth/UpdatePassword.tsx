import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckCircleFilled } from "@ant-design/icons";

const UpdatePassword = () => {
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
          px-8 py-12
          text-center
        "
      >

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shadow-inner">
            <CheckCircleFilled className="text-green-600 text-3xl" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-gray-900 text-2xl font-semibold tracking-tight">
          Password Updated
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-500 text-sm mt-2">
          Your password has been successfully updated.  
          You can now log in with your new credentials.
        </p>

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
          onClick={() => navigate("/auth/login")}
        >
          Go to Login
        </Button>

      </Card>
    </div>
  );
};

export default UpdatePassword;