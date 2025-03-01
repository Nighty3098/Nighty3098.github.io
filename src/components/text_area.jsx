import React, { useEffect, useRef, useState, useCallback } from "react";
import animationStyles from "./text_area_animations";

const Textra = (props) => {
  const selectedAnimation = props.effect || "simple";
  const animationRef = useRef(null);
  const [style, setStyle] = useState(animationStyles[selectedAnimation][0]);
  const textArrIndex = useRef(0);
  const previousTime = useRef(null);
  const animationDuration = props.duration || 500;
  const stopDuration = props.stopDuration || 1000;
  const currentRoundStartTime = useRef(0);
  const singleRoundDuration = stopDuration + 2 * animationDuration;
  const easeOutQuad = (t) => t * (2 - t);
  const text = props.data[textArrIndex.current];

  useEffect(() => {
    setStyle(animationStyles[selectedAnimation][0]);
  }, [selectedAnimation]);

  const runShowTextAnimation = (elapsed) => {
    const showingTranlateInitial =
      animationStyles[selectedAnimation][1].translate.value;
    const showingTranlateDiffrence =
      animationStyles[selectedAnimation][1].translate.value -
      animationStyles[selectedAnimation][0].translate.value;
    const showingTiming = easeOutQuad(
      (elapsed - currentRoundStartTime.current) / animationDuration,
    );
    setStyle((s) => ({
      translate: {
        ...s.translate,
        value:
          showingTranlateInitial - showingTranlateDiffrence * showingTiming,
      },
      opacity: showingTiming,
    }));
  };

  const runHideTextAnimation = (elapsed) => {
    const hidingTraslateInitial =
      animationStyles[selectedAnimation][0].translate.value;
    const hidingTranslateDiffrence =
      animationStyles[selectedAnimation][0].translate.value -
      animationStyles[selectedAnimation][1].translate.value;
    const hidingOpacityInitial = animationStyles[selectedAnimation][0].opacity;
    const hidingTiming = easeOutQuad(
      (elapsed -
        (currentRoundStartTime.current +
          singleRoundDuration -
          animationDuration)) /
        animationDuration,
    );
    setStyle((s) => ({
      translate: {
        ...s.translate,
        value: hidingTraslateInitial - hidingTranslateDiffrence * hidingTiming,
      },
      opacity: hidingOpacityInitial - hidingTiming,
    }));
  };

  const updateTextIndex = () => {
    if (textArrIndex.current === props.data.length - 1) {
      textArrIndex.current = 0;
    } else {
      textArrIndex.current = textArrIndex.current + 1;
    }
  };
  const updateRoudStartTime = () => {
    currentRoundStartTime.current += singleRoundDuration;
  };
  const handlePropEvents = () => {
    props.onUpdate && props.onUpdate(textArrIndex.current);
  };

  const runAnimation = useCallback(
    (timestamps) => {
      if (previousTime.current === null) previousTime.current = timestamps;
      const elapsed = timestamps - previousTime.current;

      if (
        elapsed > currentRoundStartTime.current &&
        elapsed < currentRoundStartTime.current + animationDuration
      ) {
        runShowTextAnimation(elapsed);
      }

      if (
        elapsed >
          currentRoundStartTime.current +
            singleRoundDuration -
            animationDuration &&
        elapsed < currentRoundStartTime.current + singleRoundDuration
      ) {
        runHideTextAnimation(elapsed);
      }

      if (elapsed > currentRoundStartTime.current + singleRoundDuration) {
        updateRoudStartTime();
        updateTextIndex();
        handlePropEvents();
      }

      animationRef.current = window.requestAnimationFrame(runAnimation);
    },
    [
      selectedAnimation,
      props.data.length,
      singleRoundDuration,
      animationDuration,
    ],
  );

  useEffect(() => {
    animationRef.current = window.requestAnimationFrame(runAnimation);

    return () => window.cancelAnimationFrame(animationRef.current);
  }, [runAnimation, props.effect]);

  return (
    <>
      <span
        style={{
          display: "inline-block",
          transform: `${style.translate.type}(${style.translate.value}${style.translate.unit})`,
          opacity: style.opacity,
        }}
        {...props}
      >
        {text}
      </span>
    </>
  );
};

export default Textra;
