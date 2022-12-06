import { BiArrowBack } from "@react-icons/all-files/bi/BiArrowBack";
import Link from "next/link";
import { ReactChild } from "react";

export const BackButton = ({ href, children }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className="text-blue-500 dark:text-blue-400 font-bold hover:underline inline-flex items-center"
    >
      <BiArrowBack />
      {children}
    </Link>
  );
};

interface BackButtonProps {
  href: string;
  children: ReactChild;
}
