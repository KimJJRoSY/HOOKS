import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    //스크롤하면 색상이 바뀌는게 보임
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    // event를 추가했으면 같은 이름과 같은 핸들러로 지워줘야 됨
    //=>ex) addEventListener을 추가했으니 removeEventListener로 지워야줘야됨
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();
  return (
    // height 1000vh 로 하니까 스크롤 가능
    <div className="App" style={{ height: "1000vh" }}>
      {/* y가 100보다 크면 빨간색이고 100보다 작으먄 파란색으로 보임    */}
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
}
