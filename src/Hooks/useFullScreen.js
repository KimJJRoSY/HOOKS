import React, { useEffect, useRef, useState } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    // 작동하는데 호환성 문제가 있어 if/else문이 많이 필요함
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScreen) {
        element.current.msRequestFullScreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozRequestFullScreen) {
      document.mozRequestFullScreen();
    } else if (document.webkitRequestFullScreen) {
      document.webkitRequestFullScreen();
    } else if (document.msRequestFullScreen) {
      document.msRequestFullScreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
