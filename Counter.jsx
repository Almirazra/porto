import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function tambah() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Counter Latihan</h2>
      <p>Nilai: {count}</p>

      <button onClick={tambah}>
        Tambah
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;