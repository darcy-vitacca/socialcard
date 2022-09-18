import { FC } from "react";

interface ITextArea {
  label: string;
}

export const TextArea: FC<ITextArea> = ({ label }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder="Bio"
      ></textarea>
      <label className="label"></label>
    </div>
  );
};
