export function Output({ billValue, tip }) {
  const totalPrice = billValue + tip;

  if (isNaN(totalPrice) || billValue === 0) {
    return <h1>Please enter the price of bill</h1>;
  }

  return (
    <h1>{`You pay $${totalPrice.toFixed(2)} ($${billValue.toFixed(
      2
    )} + $${tip.toFixed(2)} tip)`}</h1>
  );
}
