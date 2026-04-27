/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

const CommonOtpInput = ({ value, setValue }: any) => {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (val: string, index: number) => {
    if (!/^\d*$/.test(val)) return;

    const otp = value.split("");
    otp[index] = val;
    const newOtp = otp.join("").slice(0, 6);

    setValue(newOtp);

    if (val && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <input
          key={i}
          ref={(el) => {
            inputs.current[i] = el;
            }}
          value={value[i] || ""}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          maxLength={1}
          className="
            w-12 h-12 text-center text-lg font-semibold
            border border-gray-300 rounded-xl
            focus:border-brand-500 focus:ring-2 focus:ring-brand-200
            outline-none transition
            bg-white shadow-sm
          "
        />
      ))}
    </div>
  );
};
export default CommonOtpInput;