import {HashLink} from 'react-router-hash-link'
import '../classes/NavBar.css'

import bugilLogo from '../assets/bugilifeLogo.svg'

export default function NavComponent() {
  return (
    <>
      <div className='equal-interval'>
        <HashLink smooth to='/' style={{textDecoration: 'none', color: 'inherit'}}>
        <img src={bugilLogo} className='logo'/></HashLink>
        <HashLink smooth to='/find' style={{textDecoration: 'none', color: 'inherit'}}>
          <h3 className='card'>방 찾기</h3></HashLink>
        <HashLink smooth to='/create' style={{textDecoration: 'none', color: 'inherit'}}>
          <h3 className='card'>방 만들기</h3></HashLink>
        <HashLink smooth to='/sale' style={{textDecoration: 'none', color: 'inherit'}}>
          <h3 className='card'>CU 할인상품</h3></HashLink>
        <HashLink smooth to='/studentcouncil' style={{textDecoration: 'none', color: 'inherit'}}>
          <h3 className='card'>학생회</h3></HashLink>
        <HashLink smooth to='/etc' style={{textDecoration: 'none', color: 'inherit'}}>
          <h3 className='card'>더 알아보기</h3></HashLink>
        <HashLink smooth to='/login' style={{textDecoration: 'none', color: 'inherit'}}>
          <h3 className='card'>로그인</h3></HashLink>
      </div>
    </>
  )
}