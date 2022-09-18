import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface ITextInput {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  register: UseFormRegister<FieldValues>;
}

export const TextInput: FC<ITextInput> = ({
  label,
  placeholder,
  name,
  register,
  type,
}) => {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="form-control w-full">
        <label className="label flex justify-between">
          <span className="label-text">{label}</span>
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered"
          {...register(name)}
        />
      </div>
    </div>
  );
};
