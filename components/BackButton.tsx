import { BiArrowBack } from "@react-icons/all-files/bi/BiArrowBack";
import Link from "next/link";
import { ReactChild } from "react";

export const BackButton = ({ href, children }: BackButtonProps) => {
  return (
    <Link href={href}>
      <a className="text-blue-500 dark:text-blue-400 font-bold hover:underline inline-flex items-center">
        <BiArrowBack />
        {children}
      </a>
    </Link>
  );
};

interface BackButtonProps {
  href: string;
  children: ReactChild;
}
