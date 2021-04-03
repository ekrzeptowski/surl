import { ButtonHTMLAttributes, createElement } from "react";

const base =
  "inline-flex justify-center items-center px-4 py-2 rounded-md border shadow-sm cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900";

const variants = {
  normal: `border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-500 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-indigo-500 dark:focus:ring-indigo-500`,
  primary: `text-gray-100 border-blue-400 bg-blue-600 hover:bg-blue-700`,
  caution: `border-gray-300 dark:border-gray-700 bg-red-500 text-gray-50 hover:bg-red-600 focus:ring-red-500`,
};

function Button({ as = "button", variant = "normal", ...props }: ButtonProps) {
  return createElement(as, {
    className: `${base} ${variant ? variants[variant] : ""} `,
    ...props,
  });
}

export { Button };

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "caution" | "normal";
  as?: "a" | "button" | "input";
}
