import { FC } from "react";
import Link from "next/link";
import { TextInput } from "../inputs/TextInput";

interface ContactLink {
  edit: boolean;
  Icon?: any;
  label: string;
  href: string;
}
export const ContactLink: FC<ContactLink> = ({ Icon, label, edit, href }) => {
  return (
    <div className="flex flex-row items-center min-h-[84px] cursor-pointer">
      {Icon && (
        <Link href={href}>
          <Icon className="w-8 h-8 mr-3 mt-4" />
        </Link>
      )}
      {edit ? (
        <TextInput label={label} />
      ) : (
        <div className="text-md underline flex self-center break-all mt-3">
          <Link href={href}>{href}</Link>
        </div>
      )}
    </div>
  );
};
