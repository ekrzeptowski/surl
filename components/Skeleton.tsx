import React from "react";

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <span
      className={`block bg-gray-200 dark:bg-gray-400 rounded ${className}`}
    ></span>
  );
};

interface SkeletonProps {
  className: string;
}
