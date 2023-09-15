import React, { useEffect, useRef, useState } from "react";

const useNotification = (title, options) => {
  // window의 notification에 접근한 게 아니면 리턴 안함
  // 콘솔 창에 new Notification("hello")치면 hello 알림 뜸

  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        // 조건이 맞다면 내가 notification을 보여줄 수 있다는 뜻
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
