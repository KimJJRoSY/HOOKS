import React, { useEffect, useRef, useState } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  // onConfirm이 존재하지 않거나 function이 아닐때 리턴
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  //onCancel이 존재하는데 함수가 아니면 리턴
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    // confirm 함수가 브라우저에 메세지를 가지고 있다면
    //=> confirm이 화면에 나타남 + callback 함수 마운트
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
