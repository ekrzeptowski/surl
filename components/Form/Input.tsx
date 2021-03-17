import { forwardRef, HTMLProps } from "react";
import { FieldError } from "react-hook-form";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, name, placeholder, ...props }, ref) => {
    const error = errors && errors[name];
    return (
      <input
        {...props}
        name={name}
        placeholder={error ? error.message || "Ivalid data" : placeholder}
        ref={ref}
        className={`flex-1 shadow rounded border-gray-300 dark:border-gray-700 ${
          error
            ? "bg-red-300 dark:bg-red-900 placeholder-gray-900"
            : "dark:bg-gray-900 placeholder-gray-700"
        } mr-2 dark:placeholder-gray-300 placeholder-opacity-50 dark:placeholder-opacity-50`}
      />
    );
  },
);
type InputProps = HTMLProps<HTMLInputElement> & {
  errors?: { [key: string]: FieldError };
  name: string;
};
