import { FC, HTMLAttributes } from "react";

export const List = ({ children }: ListProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow rounded-lg max-w-screen-lg mx-auto overflow-hidden">
      <div className="divide-y divide-gray-200 dark:divide-gray-600">
        {children}
      </div>
    </div>
  );
};

export const ListItem: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <div
      className="px-4 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 flex break-all"
      {...props}
    >
      {children}
    </div>
  );
};

type ListProps = {
  children: React.ReactNode;
};
