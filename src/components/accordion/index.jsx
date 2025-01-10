import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [selectedMultiple, setSelectedMultiple] = useState([]);
  const [enableMultiple, setEnableMultiple] = useState(false);

  const handleSingleSelection = (paramId) => {
    setSelected(() => (paramId === selected ? null : paramId));
  };

  const handleMultipleSelection = (paramId) => {
    const tempArray = selectedMultiple.includes(paramId)
      ? selectedMultiple.filter((item) => item !== paramId)
      : [...selectedMultiple, paramId];
    setSelectedMultiple(tempArray);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiple((current) => !current)}>
        {enableMultiple ? "Disable" : "Enable"} Multi Selection
      </button>
      <div className="accordion">
        {data.length > 0 ? (
          <>
            {data.map((item) => {
              return (
                <div key={item.id} className="item">
                  <div
                    className="title"
                    onClick={() => {
                      enableMultiple
                        ? handleMultipleSelection(item.id)
                        : handleSingleSelection(item.id);
                    }}
                  >
                    <h3>{item.question}</h3>
                    {enableMultiple ? (
                      <span>
                        {selectedMultiple.includes(item.id) ? "-" : "+"}
                      </span>
                    ) : (
                      <span>{item.id === selected ? "-" : "+"}</span>
                    )}
                  </div>
                  {enableMultiple ? (
                    <>
                      {selectedMultiple.includes(item.id) ? (
                        <div>{item.answer}</div>
                      ) : null}
                    </>
                  ) : (
                    <>
                      {item.id === selected ? <div>{item.answer}</div> : null}
                    </>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
