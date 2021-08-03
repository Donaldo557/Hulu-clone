import React from "react";

function HeaderItems({ Icon, title }) {
  return (
    <div className = "flex  items-center cursor-pointer flex-col group w-12 sm:wd-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className = "opacity-0  group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
}

export default HeaderItems;
