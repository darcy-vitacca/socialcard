import { FC } from "react";
import { TextArea } from "../inputs/TextArea";

export interface IBiography {
  edit: boolean;
}

export const Biography: FC<IBiography> = ({ edit }) => {
  return (
    <div className="mt-4">
      {edit ? (
        <TextArea label="My Bio" />
      ) : (
        <p className="mt-2">This is my bio</p>
      )}
    </div>
  );
};
