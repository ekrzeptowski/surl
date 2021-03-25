import { FC, HTMLAttributes } from "react";
export const Main: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  return (
    <main className="flex flex-1 flex-col pt-2 dark:bg-gray-800 dark:text-gray-200" {...props}>
      {children}
    </main>
  );
}
