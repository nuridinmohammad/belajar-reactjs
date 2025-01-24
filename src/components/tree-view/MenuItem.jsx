import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ menuItem = {} }) {
  const [isDisplay, setIsDisplay] = useState(false);

  function handleDisplay(display) {
    return !display;
  }

  return (
    <div>
      <span onClick={() => setIsDisplay(handleDisplay)} role="button">
        {menuItem.label}
        {menuItem.children ? <span> {isDisplay ? "-" : "+"} </span> : null}
      </span>
      {isDisplay ? (
        <>{menuItem.children && <MenuList menuList={menuItem.children} />}</>
      ) : null}
    </div>
  );
}
