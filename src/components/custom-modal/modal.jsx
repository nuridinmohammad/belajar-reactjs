export default function Modal({ header, body, footer, onCloce }) {
  return (
    <div>
      <div>
        {header ? header : "Header"}
        <button onClick={onCloce}>X</button>
      </div>
      <div>{body ? body : "Boody"}</div>
      <div>{footer ? footer : "Footer"}</div>
    </div>
  );
}
