import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed();
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}

export default Counter;
