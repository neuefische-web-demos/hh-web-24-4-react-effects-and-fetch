import { useState, useEffect } from "react";

export default function App() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (clicked) {
      timeoutId = setTimeout(() => {
        setClicked(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [clicked]);

  return (
    <>
      <h1>Effects and Fetch</h1>

      <button
        onClick={() => {
          setClicked(true);
        }}
      >
        {clicked ? "Ich wurde geklickt" : "Klich mich"}
      </button>
    </>
  );
}
