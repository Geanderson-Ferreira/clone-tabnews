import { useState } from "react";

function Home() {
  const [emoji, setEmoji] = useState("😎");

  const emojis = ["😎", "🚀", "✨", "🏨", "🤖", "😍", "🔥", "📱"];

  function trocarEmoji() {
    const sorteado = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(sorteado);
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg,#4b6cb7,#182848)",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "40px", margin: 0 }}>
        Estamos por aqui {emoji}
      </h1>

      <button
        onClick={trocarEmoji}
        style={{
          padding: "12px 25px",
          background: "white",
          color: "#182848",
          border: "none",
          borderRadius: "8px",
          fontSize: "20px",
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        Trocar emoji
      </button>
    </div>
  );
}

export default Home;
