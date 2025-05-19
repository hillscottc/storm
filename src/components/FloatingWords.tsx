import React, { useEffect, useRef, useState } from "react";
import { people } from "../constants";

type WordState = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
};

type FloatingWordsProps = {
  selectedWord?: string | null;
  setSelectedWord: (word: string) => void;
};

const FloatingWords: React.FC<FloatingWordsProps> = ({
  selectedWord,
  setSelectedWord,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wordStates = useRef<WordState[]>([]);

  // const [selectedWord, setSelectedWord] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Initialize word states
    wordStates.current = people.map(() => ({
      x: Math.random() * (width - 100),
      y: Math.random() * (height - 30),
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
      size: Math.random() * 16 + 16,
      opacity: Math.random() * 0.6 + 0.4,
    }));

    const animate = () => {
      wordStates.current.forEach((state, i) => {
        state.x += state.dx;
        state.y += state.dy;

        if (state.x < 0 || state.x > width - 100) state.dx *= -1;
        if (state.y < 0 || state.y > height - 30) state.dy *= -1;

        state.size += (Math.random() - 0.5) * 0.4;
        state.size = Math.max(14, Math.min(40, state.size));

        state.opacity += (Math.random() - 0.5) * 0.04;
        state.opacity = Math.max(0.3, Math.min(1, state.opacity));

        const el = wordRefs.current[i];
        if (el) {
          el.style.left = `${state.x}px`;
          el.style.top = `${state.y}px`;
          el.style.fontSize = `${state.size}px`;
          el.style.opacity = `${state.opacity}`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* <div style={styles.selectedBox}>
        {selectedWord ? `Selected: ${selectedWord}` : selectedWord}
      </div> */}
      <div ref={containerRef} style={styles.container}>
        {people.map((word, i) => (
          <div
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            style={{ ...styles.word, left: 0, top: 0, cursor: "pointer" }}
            onClick={() => setSelectedWord(word)}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  selectedBox: {
    color: "#fff",
    fontSize: "1.2rem",
    marginBottom: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#333",
    borderRadius: "8px",
    minHeight: "2rem",
  },
  container: {
    position: "relative",
    width: "80vw",
    height: "80vh",
    backgroundColor: "#1e1e1e",
    border: "2px solid #444",
    overflow: "hidden",
  },
  word: {
    position: "absolute",
    color: "#fff",
    whiteSpace: "nowrap",
    pointerEvents: "auto",
    transition: "transform 0.3s, opacity 0.3s",
  },
};

export default FloatingWords;
