import React from "react";

function Button({
  children,
  iconURL,
  backgroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white",
  fullWidth = "",
}) {
  const customStyle = `${backgroundColor} ${borderColor} ${textColor} ${fullWidth}`;

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full ${customStyle}`}>
      {children}
      {iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
}

export default Button;
