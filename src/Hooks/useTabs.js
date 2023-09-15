import React, { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  //function이 시작될 때 에러를 확인함 => 만약 allTabs가 true가 아니거나 배열이 아닐때 => 오류로 간주하고 function 종료
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    //내가 현재 선택한 content의 인덱스를 얻을 수
    //BUT 기본적으로 allTabs의 인덱스는 0임 =>why? const tabs = useTab(0,content)으로 첫번째 탭은 0인것을 확인
    // ==> content에도 동일하게 적용됨
    changeItem: setCurrentIndex
  };
};
