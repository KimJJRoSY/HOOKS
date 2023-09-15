import React, { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
  // onClick 타입이 함수가 아니면 아무것도 리턴하지 않음
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    // useEffect가 compoentDidMount일 때만 호출
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnmount일 때만 리턴
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
