import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreationPage'
import SearchPage from './Pages/SearchPage'
import SalePage from './Pages/SalePage'
import StudentCouncilPage from './Pages/StudentCouncilPage'
import EtcPage from './Pages/EtcPage'
import LogInPage from './Pages/LoginPage'

import NavBar from './Components/NavBar'



// http://localhost:5173/

// <div> = 투명한 상자(구역 나누는 역할. division) 
// <h1 ~ h6> = 제목(1에서 6으로 갈수록 작아짐)
// <p> = 일반 텍스트 
// <button> = 버튼 
// 태그 닫을 때에는 / 붙이기 (Ex - <p> ~~~ </p>)
// shyPoint >= 5 ? (shyPoint >= 10 ? : ) : null
// ***GOAT*** : https://break-time-for.tistory.com/entry/React-Text-%EC%9E%85%EB%A0%A5-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0-1-textarea-input

function App() { 
  
  return (
    <BrowserRouter>
      <div className='background'>

        {/* 상단 네비게이션 바 */}
        <div className='top'>
          <div className='nav'>
            <NavBar/>
          </div>
        </div>

        {/* 구분선 */}
        <div style={{height: '10vh'}} />
        <div className='separate-window'/>

        {/* 페이지 */}
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/find' element={<SearchPage/>} />
            <Route path='/create' element={<CreatePage/>} />
            <Route path='/sale' element={<SalePage/>} />
            <Route path='/studentcouncil' element={<StudentCouncilPage/>} />
            <Route path='/etc' element={<EtcPage/>} />
            <Route path='/login' element={<LogInPage/>} />
          </Routes>
        </div>


      </div>
    </BrowserRouter>
  )
}

export default App
