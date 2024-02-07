import { useState } from "react";
import { BillInput } from "./components/BillInput";
import { Reset } from "./components/Reset";
import { Output } from "./components/Output";
import { SelectPercentage } from "./components/SelectPercentage";

export function TipCalculator() {
  const [billValue, setBillValue] = useState(0);
  const [selectedPercentage1, setSelectedPercentage1] = useState(0);
  const [selectedPercentage2, setSelectedPercentage2] = useState(0);

  const tip =
    (billValue * (selectedPercentage1 + selectedPercentage2)) / 2 / 100;

  function handleReset() {
    setBillValue(0);
    setSelectedPercentage1(0);
    setSelectedPercentage2(0);
  }

  return (
    <div>
      <BillInput onSetBillValue={setBillValue} billValue={billValue} />
      <SelectPercentage
        onSetSelectedPercentage={setSelectedPercentage1}
        onBillValue={billValue}
      >
        <h2>How did you like the service?</h2>
      </SelectPercentage>
      <SelectPercentage onSetSelectedPercentage={setSelectedPercentage2}>
        <h2>How did your friend like the service?</h2>
      </SelectPercentage>
      <Output billValue={billValue} tip={tip} />
      <Reset onHandleReset={handleReset} />
    </div>
  );
}
