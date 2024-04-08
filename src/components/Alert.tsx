import React from "react";
type AlertProps = {
  show: boolean;
  text: string;
  type: "success" | "danger";
};

const Alert = ({ show, text, type }: AlertProps) => {
  return (
    <div className="absolute top-10 right-0 left-10 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-50 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
