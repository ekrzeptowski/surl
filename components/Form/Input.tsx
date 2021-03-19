import { motion } from "framer-motion";
import { forwardRef, HTMLProps } from "react";
import { FieldError } from "react-hook-form";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, name, placeholder, tooltip, pointer, ...props }, ref) => {
    const error = errors && errors[name];
    const input = (
      <input
        {...props}
        name={name}
        placeholder={error ? error.message || "Ivalid data" : placeholder}
        ref={ref}
        className={`flex-1 shadow rounded border-gray-300 dark:border-gray-700 ${
          error
            ? "bg-red-300 dark:bg-red-900 placeholder-gray-900"
            : "dark:bg-gray-900 placeholder-gray-700"
        } mr-2 dark:placeholder-gray-300 placeholder-opacity-50 dark:placeholder-opacity-50 ${
          pointer ? "cursor-pointer" : ""
        }`}
      />
    );
    return tooltip ? (
      <div className="relative flex flex-1">
        {input}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-2 -top-full p-2 text-sm leading-tight text-white bg-black rounded-lg shadow-lg"
        >
          {tooltip}
          <svg
            className="absolute text-black h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </motion.div>
      </div>
    ) : (
      input
    );
  },
);
type InputProps = HTMLProps<HTMLInputElement> & {
  errors?: { [key: string]: FieldError };
  name: string;
  tooltip?: string;
  pointer?: boolean;
};
