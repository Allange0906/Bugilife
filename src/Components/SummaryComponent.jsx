export default function SummaryComponent() {
  return(
    <div className="equal-interval" style={{height: '50vh'}}>
      <NoticeSection/>
      <AlmostFullSection/>
      <MealSection />
      <RequestSection/>
    </div>
  )
}

function NoticeSection() {
  return (
    <div className='widget'>
      <h2>학생회 공지</h2>
      <div className='divBar'/>
    </div>
  )
}

function AlmostFullSection() {
  return (
    <div className='widget'>
      <h2>모집 마감 임박</h2>
      <div className='divBar'/>
    </div>
  )
}

function MealSection() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <div className='widget'>
        <h2>오늘의 급식</h2>
        <div className='divBar'/>
        <p>{formattedDate}</p>
    </div>
  )
}

function RequestSection() {
  return (
    <div className='widget'>
      <h2>건의함</h2>
      <div className='divBar'/>
    </div>
  )
}