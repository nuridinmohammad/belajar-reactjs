import MenuList from "./MenuList";
import menus from "./data.js";

export default function TreeView() {
  return (
    <div>
      <MenuList menuList={menus} />
    </div>
  );
}
