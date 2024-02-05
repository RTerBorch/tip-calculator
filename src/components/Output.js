export function Output({ billValue, percentage1, percentage2 }) {
  const averagePercentage = (percentage1 + percentage2) / 2 / 100;
  const numericBillValue = parseFloat(billValue);
  const numericTotalTip = numericBillValue * averagePercentage;
  const totalPrice = numericBillValue + numericTotalTip;

  if (isNaN(totalPrice) || billValue === 0) {
    return <h1>Please enter the price of bill</h1>;
  }

  return (
    <h1>{`You pay $${totalPrice.toFixed(2)} ($${numericBillValue.toFixed(
      2
    )} + $${numericTotalTip.toFixed(2)} tip)`}</h1>
  );
}
