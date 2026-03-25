import { useEffect } from "react";

const useAutoScroll = (scrollRef, isPaused, speed = 1) => {
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    let frameId;

    const tick = () => {
      if (!isPaused && node) {
        node.scrollLeft += speed;

        const singleSetWidth = node.scrollWidth / 3;

        if (node.scrollLeft >= singleSetWidth * 2) {
          node.scrollLeft -= singleSetWidth;
        }
      }
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isPaused, speed, scrollRef]);
};

export default useAutoScroll;
