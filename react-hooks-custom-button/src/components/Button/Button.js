import React from 'react';
import './../../styles/common.scss';


function Button({children, type}) {

  let localClass = "primary";
  if (type === "primary") {
    localClass = "primary"
  }
  if (type === "disabled") {
    localClass = "disabled";
  }
  const cls = `bgYellow fontBlack pad8 width100 radius15 ${localClass}`.trim();
  return (
    <div className="btnClass">
      <button className={cls}>{children}</button>
    </div>
  );
}

export default Button;
