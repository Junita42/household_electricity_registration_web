import React, { useState } from "react";

export default function Title() {
  const [clicks, setClicks] = useState<number>(0);
  return (
    <div>
      <h1>Clicks {clicks} times!</h1>
      <button onClick={() => setClicks(clicks + 1)}>Click</button>
    </div>
  );
}

// def useState(initialValue):
//   x = initialValue

//   def setX(newValue):
//     x = newValue

//   return [x, setX]
