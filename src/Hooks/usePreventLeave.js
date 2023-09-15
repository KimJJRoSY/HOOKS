import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  //만약 api에 뭔가를 보냈고 사람들이 브라우저를 닫지 않길 바란다면
  //=> 이걸 보호 할 수 있게 활성화시킴
  //BUT api가 응답을 해서 괜찮은 상태라면 => 사람들이 닫는 걸 신경쓰지 않아도 됨
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
