//duration의 디폴트는 1로 설정함
const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      // component가 마운트 되면 서서히 Hello 생김
      // 만약 이 훅을 더 크게 만들고 싶다면 transition을 쓰는 대신에 모든 property들을 각각 적용해주면 됨
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      //하나는 긴 duration을 가진 in-out과 delay가 될거임
      current.style.opacity = 1;
    }
  }, []);
  //props 처럼 보이게 만들기
  return { ref: element, style: { opacity: 0 } };
};
