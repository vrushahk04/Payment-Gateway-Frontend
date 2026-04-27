"use client";

import { Input } from "antd";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  prefix?: React.ReactNode;
  type?: string;
  disabled?: boolean;
}

const CommonInput = ({
  name,
  label,
  required,
  placeholder,
  prefix,
  type = "text",
  disabled = false,
}: Props) => {
  const [field, meta] = useField(name);

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <Input
  {...field}
  type={type}
  placeholder={placeholder}
  size="large"
  prefix={prefix}
  status={meta.touched && meta.error ? "error" : ""}
  disabled={disabled}
  className="custom-input rounded-lg h-12 text-base"
  style={{ borderRadius: 8 }}
/>

      {meta.touched && meta.error && (
        <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default CommonInput;

