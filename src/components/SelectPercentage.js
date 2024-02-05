export function SelectPercentage({ onSetSelectedPercentage, children }) {
  return (
    <div className="fillableInput">
      {children}
      <select
        onChange={(event) =>
          onSetSelectedPercentage(parseFloat(event.target.value))
        }
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
