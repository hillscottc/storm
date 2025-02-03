import React, { useState, useEffect } from "react";
import type * as CSS from "csstype";

const fadeInStyle: CSS.Properties = {
  transition: "opacity 1s ease",
};

const fadeOutStyle: CSS.Properties = {
  opacity: 0,
  transition: "opacity 1s ease",
};

interface Props {
  text: string;
}

const Fader: React.FunctionComponent<Props> = (props) => {
  const [fadeState, setFadeState] = useState<{ fade: "fade-in" | "fade-out" }>({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeState.fade === "fade-in") {
        setFadeState({
          fade: "fade-out",
        });
      } else {
        setFadeState({
          fade: "fade-in",
        });
      }
    }, 4000);

    // cleanup required to prevent memory leak
    return () => clearInterval(timeout);
  }, [fadeState]);

  return (
    <>
      <h1
        data-testid="fader"
        style={fadeState.fade === "fade-in" ? fadeInStyle : fadeOutStyle}
      >
        {props.text}
      </h1>
    </>
  );
};

export default Fader;
