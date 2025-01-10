import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const generateNumberRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateColor = () => {
    if (typeColor === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let color = "#";
      for (let index = 0; index < 6; index++) {
        color += hex[generateNumberRandom(hex.length)];
      }
      setColor(color);
    } else {
      const r = generateNumberRandom(256);
      const g = generateNumberRandom(256);
      const b = generateNumberRandom(256);

      setColor(`rgb(${r},${g},${b})`);
    }
  };

  useEffect(() => {
    handleGenerateColor();
  }, [typeColor]);

  return (
    <div style={{ width: "100%", height: "100vh", background: color }}>
      <button onClick={() => setTypeColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
      <button onClick={handleGenerateColor}>Generate Color</button>
      <h1>{typeColor === "hex" ? `HEX ${color}` : `RGB ${color}`}</h1>
    </div>
  );
}
