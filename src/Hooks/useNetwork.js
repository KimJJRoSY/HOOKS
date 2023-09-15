import React, { useEffect, useRef, useState } from "react";

const useNetwork = (onChange) => {
  // navigator.onLine은 true 또는 false를 말함
  // navogator가 online이면 항상 현재의 status를 줌
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
