import "./App.css";
import { useState } from "react";

function App() {
  const [billValue, setBillValue] = useState(null);
  const [totalTip, setTotalTip] = useState(0);

  return (
    <div>
      <p>{billValue}</p>
      <HandleBillValue onSetBillValue={setBillValue} />

      <HandleServiceValue OnSetTotalTip={setTotalTip} OnTotalTip={totalTip}>
        <h2>How did you like the service?</h2>
      </HandleServiceValue>
    </div>
  );
}

function HandleBillValue({ onSetBillValue }) {
  function setBillWithFormat(inputValue) {
    if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
      onSetBillValue(inputValue);
    } else {
      window.alert("wrong input");
      onSetBillValue(null);
    }
  }

  return (
    <div className="fillableInput">
      <h2>How much was the bill?</h2>
      <input
        type="text"
        style={{ color: "red" }}
        onBlur={(event) => {
          setBillWithFormat(event.target.value);
        }}
      />
    </div>
  );
}

function HandleServiceValue({ OnTotalTip, OnSetTotalTip, children }) {
  const [serviceValue, setServiceValue] = useState(0);

  function handleTipValue(tipValue) {
    setServiceValue(tipValue);
    OnSetTotalTip(OnTotalTip + tipValue);
  }

  return (
    <div className="fillableInput">
      {children}
      <select
        value={serviceValue}
        onChange={(event) => setServiceValue(parseInt(event.target.value))}
      >
        <option value={0}>Bad service (0%)</option>
        <option value={5}>It was ok.. (5%)</option>
        <option value={10}>The service was good (10%)</option>
        <option value={15}>Service was excellent! (15%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default App;
