import {HashLink} from 'react-router-hash-link'
import '../Classes/Info.css'

export default function InfoComponent() {
  return (
    <>
      <div className='info'>
        <div className='box'>
          <h1>BUGILIFE</h1>
          <h2>Copyright 2026. BUGILIFE Co. All rights reserved.</h2>
          <h3>TELL: 010-7495-XXXX</h3>
          <h3>E-Mail: junyiappleXXXX@gmail.com</h3>
        </div>
        <div className='box' style={{paddingLeft: '10em', flexDirection: 'column'}}>
          <QuickMenu />
        </div>
      </div>
    </>
    )
}

function QuickMenu() {
  return (
    <>
      <h2>Quick Menu</h2>
      <HashLink smooth to='/find#CU' className='quickMenu'>
        <h3>CU 공동구매 인원모집 바로가기</h3></HashLink>
      <HashLink smooth to='/find#academic-exchange' className='quickMenu'>
        <h3>학술교류 인원모집 바로가기</h3></HashLink>
    </>
  )
}