"use client";

import { Checkbox } from "antd";

interface Props {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const CommonCheckbox = ({
  label,
  checked,
  onChange,
  required,
  error,
  disabled = false,
}: Props) => {
  return (
    <div className="w-full">
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="text-gray-700"
      >
        <span className="text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </Checkbox>

      {error && (
        <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
          {error}
        </p>
      )}
    </div>
  );
};

export default CommonCheckbox;