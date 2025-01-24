import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [persistText, setPersistText] = useState("");

  function handleChangeValue(e) {
    setText(e.target.value);
  }

  function handlePersisText() {
    setPersistText(text);
    setText("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="qrqode"
          id="qr-qode"
          placeholder="Enter text.."
          onChange={handleChangeValue}
          value={text}
        />
        <button
          onClick={handlePersisText}
          disabled={text.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          value={persistText}
          id="qr-code-value"
          size={40}
          bgColor="#fff"
        />
      </div>
    </div>
  );
}
