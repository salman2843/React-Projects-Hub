import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const buttonStyles = {
    padding: "10px 20px",
    borderRadius: "50px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
  };

  // Left-side colors
  const leftSideColors = [
    { label: "Red", color: "#EE2E31" },
    { label: "Lion", color: "#B49A67" },
    { label: "Mauve", color: "#BAA5FF" },
    { label: "Tea Green", color: "#C3D898" },
    { label: "Cream", color: "#EDFBC1" },
    { label: "Mustard", color: "#F7CE5B" },
  ];

  // Right-side colors (Add new colors here)
  const rightSideColors = [
    { label: "Blue", color: "#1E90FF" },
    { label: "Green", color: "#32CD32" },
    { label: "Purple", color: "#8A2BE2" },
    { label: "Orange", color: "#FFA500" },
    { label: "Pink", color: "#FF69B4" },
    { label: "Cyan", color: "#00CED1" },
  ];

  return (
    <div
      className='w-full h-screen duration-200 flex items-center justify-center'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex justify-between items-start w-full px-10 top-6'>
        {/* Left-side buttons */}
        <div className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg w-1/4'>
          {leftSideColors.map((btn) => (
            <button
              key={btn.label}
              onClick={() => setColor(btn.color)}
              className='hover:scale-105 hover:shadow-md'
              style={{ ...buttonStyles, backgroundColor: btn.color }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Right-side buttons */}
        <div className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg w-1/4'>
          {rightSideColors.map((btn) => (
            <button
              key={btn.label}
              onClick={() => setColor(btn.color)}
              className='hover:scale-105 hover:shadow-md'
              style={{ ...buttonStyles, backgroundColor: btn.color }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
