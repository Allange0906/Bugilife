import WidgetSlider from '../Components/WidgetSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // 'swiper'가 아니라 'swiper/modules' 확인!

// CSS가 빠지면 구조가 무너져서 안 보입니다.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SalePage() {
  return (
    <>
      <h1>CU 할인상품</h1>
      <WidgetSlider />
    </>
  )
}