import { ButtonHTMLAttributes, FC } from "react";

const base = "shadow rounded border px-3 cursor-pointer";

const button = `${base} border-gray-300 bg-white text-gray-700 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-200`;

const buttonPrimary = `${base} text-gray-200 border-blue-500 bg-blue-600`;

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button className={button} {...props} />
);

export { button, buttonPrimary, Button };
