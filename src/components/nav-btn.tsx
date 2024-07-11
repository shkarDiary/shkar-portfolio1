import React from "react";

function NavBtn({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type="button" onClick={onClick}>
      X
    </button>
  );
}

export default NavBtn;
