import { useState } from "react";

export function BillInput({ onSetBillValue, billValue }) {
  const [isCorrectFormat, setIsCorrectFormat] = useState(true);

  function setBillWithFormat(inputValue) {
    if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
      onSetBillValue(parseFloat(inputValue));
      setIsCorrectFormat(true);
    } else {
      onSetBillValue(parseFloat(1));
      setIsCorrectFormat(false);
    }
  }

  return (
    <div className="fillableInput">
      <h2>How much was the bill?</h2>
      <input
        className={isCorrectFormat ? undefined : "wrongFormat"}
        type="text"
        value={billValue}
        onChange={(event) => setBillWithFormat(Number(event.target.value))}
      />
      {!isCorrectFormat && <p className="wrongFormat">invalid input</p>}
    </div>
  );
}
