import MenuItem from "./MenuItem";

export default function MenuList({ menuList = [] }) {
  return (
    <ul>
      {menuList.map((item, index) => (
        <MenuItem menuItem={item} key={index} />
      ))}
    </ul>
  );
}
