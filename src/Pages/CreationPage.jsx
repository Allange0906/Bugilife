import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import '../Classes/CreationPage.css'
import TextField from '../Components/TextField'

export default function CreatePage() {
  const [data, SetData] = useState({})

  return (
    <>
      <CreationWindow onSave={(data) => SetData(data)} />
      <div className="equal-interval" style={{width: '50vw'}}>
        <h2>유형: {data.roomTag}</h2>
        <h2>방제: {data.roomTitle}</h2>
        <h2>인원: {data.requiredMembers}</h2>
        <h2>돈: {data.requiredMoney}</h2>
      </div>
    </>
  )
}

// 만들기 창
function CreationWindow({onSave}) {

  const [form, SetForm] = useState({
    roomTag: "default",
    roomTitle: "",
    requiredMembers: "",
    requiredMoney: ""
  })

  const selectList = [
    {value: "default", name: "태그 선택"},
    {value: "ice-cream", name: "아이스크림"},
    {value: "beverage", name: "음료수"},
    {value: "academic-exchange", name: "학술교류"},
    {value: "project", name: "학년활동"}
  ]

  const [isUIOpened, toggleUI] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");
  const needMoney = (form.roomTag === "ice-cream" || form.roomTag === "beverage");

  // 모든 방 정보 입력했는지 확인
  // trim => 빈 문자열 체크
  const isFullData =
    form.roomTag !== "default" &&
    form.roomTag.trim() !== "" &&
    form.roomTitle.trim() !== "" &&
    form.requiredMembers.trim() !== "" &&
    (!needMoney || form.requiredMoney.trim() !== "");

  const navigate = useNavigate("/find");

  // 필요한 정보 모두 입력했을 때에만 창 닫고 저장
  const handleComplete = () => {
    if (!isFullData) {
      setErrorMsg("모든 정보를 입력해주세요.");
      return;
    }
    const room = {
      roomTag: form.roomTag,
      roomTitle: form.roomTitle,
      requiredMembers: form.requiredMembers,
      requiredMoney: form.requiredMoney,
    };

    localStorage.setItem("newRoom", JSON.stringify(room));
    toggleUI(false)
    navigate("/find");
  };

  // 
  const handleChange = (e, key) => {
    SetForm({
      ...form,
      [key]: e.target.value,
    });
  };

  return (
    <>
      <h1 className="creation-button" onClick={() => toggleUI(!isUIOpened)}>방 생성하기</h1>
      {isUIOpened && (
        <>
          <div className="UI-background"/>
          <div className="create-UI">
            <h4 className="back-button" onClick={() => toggleUI(isUIOpened => !isUIOpened)}>
              뒤로가기
            </h4>
            <h2>방 생성</h2>
            <div className="column" style={{gap: '1em', alignItems: 'center'}}>

              <select 
                className="select-widget" 
                name="roomTag" 
                value={form.roomTag} 
                onChange={(e) => handleChange(e, "roomTag")}
                // 여기 바꿨음: controlled component에서는 defaultValue 제거
              >
                {selectList.map((item) => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>

              <TextField 
                label="방 제목" 
                value={form.roomTitle} 
                onChange={(e) => handleChange(e, "roomTitle")}
              />

              <TextField 
                label="필요 인원" 
                value={form.requiredMembers} 
                onChange={(e) => handleChange(e, "requiredMembers")}
              />

              {(form.roomTag == "ice-cream" || form.roomTag == "beverage") && (
                <TextField 
                label="필요 금액(1인당)" 
                value={form.requiredMoney} 
                onChange={(e) => handleChange(e, "requiredMoney")}
              />
              )}

              {errorMsg && 
                <h4 className="error-msg">{errorMsg}</h4>}
            </div>

            <div className="complete-button" onClick={handleComplete}>
              <h3>저장</h3>
            </div>
          </div>
        </>
      )}
    </>
  )
}