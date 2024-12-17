export default function App() {
  function handleClick() {
    alert(" React is Fun ");
  }
  return (
    <div className="btn">
      <button onClick={handleClick}> Click Here </button>
    </div>
  );
}
