export default function Suggestions({ handleClick, filteredData = [] }) {
  return (
    <div>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index} onClick={handleClick} style={{ cursor: "pointer" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
