import SummaryComponent from '../Components/SummaryComponent'
import InfoComponent from '../Components/Info'

export default function HomePage() {
  return (
    <>
      <h1>북일라이프에 오신 것을 환영합니다!</h1>
      <div className='column'>
        <SummaryComponent />
        <InfoComponent />
      </div>
    </>
  )
}