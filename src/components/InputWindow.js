export function InputWindow({ setInput, children }) {
  return (
    <div className="fillableInput">
      {children}
      <input
        type="text"
        onBlur={(event) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
}
