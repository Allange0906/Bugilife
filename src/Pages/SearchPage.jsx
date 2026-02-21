import { useEffect, useState } from "react";
import '../Classes/SearchPage.css'

import bevImg from '../assets/BeverageImg.svg'
import iceImg from '../assets/IceCreamImg.svg'
import projectImg from '../assets/ProjectImg.svg'
import AcadImg from '../assets/AcademicExchangeImg.svg'

export default function SearchPage() {
  const [rooms, setRooms] = useState([]);

  // useEffect : 컴포넌트가 처음 렌더링될때 실행됨
  useEffect(() => {

    // JSON.parse : 문자열을 자바스크립트 객체로 변환
    // localStorage.getItem("allRooms") : allRooms라는 키로 저장된 데이터를 불러옴(없으면 null)
    const savedRooms = JSON.parse(localStorage.getItem("allRooms") || "[]");
    
    // 새로 만든 방이 localStorage에 있는지 확인
    const newRoomData = localStorage.getItem("newRoom");

    if(newRoomData) {
      const newRoom = JSON.parse(newRoomData);
      
      // 기존 savedRooms + newRoom
      const updatedRooms = [...savedRooms, newRoom];
      
      // updatedRooms를 localStorage에 저장하고 rooms 업데이트
      localStorage.setItem("allRooms", JSON.stringify(updatedRooms));
      setRooms(updatedRooms);

      // 이젠 새롭지 않음(이미 저장함) => localStorage에서 제거
      localStorage.removeItem("newRoom");
    }
    else {
      // 새로 만든거 없어도 저장된 방들 보여주기
      setRooms(savedRooms);
    }
  }, []);

  return (
    <>
      <h1>방 찾기</h1>
      <div className="column">
        <h1 style={{height: '100vh'}}>이거 외 않되.</h1>
        <h2 id="academic-exchange">학술교류 인원모집</h2>
        <h1 style={{height: '100vh'}}>이거 외 않되.</h1>
        <h2 id="CU">CU 공동구매 인원모집</h2>
        <div className="room-list">
          {rooms.map((room, idx) => (
            <RoomWidget
              key={room.roomTitle + idx}
              room={room}
            />
          ))}
        </div>
        <h1 style={{height: '100vh'}}>이거 외 않되.</h1>
      </div>
    </>
  )
}

function RoomWidget({ room }) {
  const formattedText = `${room.requiredMembers}명\n${room.requiredMoney ? room.requiredMoney + "원" : "없음"}`;
  return (
    <div className="room-widget">
      <div className="room-widget-section">
        <img src={
          room.roomTag === "ice-cream" ? iceImg
          : room.roomTag === "beverage" ? bevImg
          : room.roomTag === "project" ? projectImg
          : AcadImg} 
          style={{width: '100px', height: '100px'}}/>
        <div className="room-widget-info">
          <h2>{room.roomTitle}</h2>
          <h3>학번</h3>
        </div>
      </div>
      <div style={{justifyContent: 'flex-end'}} className="room-widget-section">
        <h3 style={{whiteSpace: 'pre-wrap'}}>{formattedText}</h3>
      </div>
    </div>
  );
}