import React, { useEffect, useRef, useState } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    //clientY는 마우스가 아래로 벗어나면 0임
    //So, 마우스가 위로 벗어날때만 콘솔창에 plz dont leave 뜸
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
    // console.log("leaving");
    // mouse가 document를 벗어났을 때 콘솔 창에 leaving 메세지 뜸
    onBefore();
    // hello에 마우스를 가져갔다가 벗어나면 콘솔 창에 Plz don't leave 뜸
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    //function을 지우기 위해서 return에 removeEventListener 추가함
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
