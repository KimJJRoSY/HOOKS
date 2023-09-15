import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
    //콘솔 창에 new Date()치면 오늘 날짜랑 시간 나옴
    //new Date()==new Date().toISOString() == Date.now() ==> 출력되는 데이터는 같은데 자료형이 다름
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
    // []dependency에 뭔가를 넣으면 dependency는 바뀔것임
    //+ 이 케이스의 useEffect는 access request를 다시 할 거임
  }, [trigger]);
  // useEffect는 trigger를 지켜보고 있지만 이 케이스에서 trigger는 변하지 않을것
  // BUT setTrigger(Date.now());로 trigger을 변경하였기 때문에
  // ==> trigger가 바뀌면 useEffect 다시 실행 ==> we have a refetch!!
  return { ...state, refetch };
};

export default useAxios;
