// WidgetSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductWidget from './ProductWidget'; // 아까 만든 위젯 컴포넌트

// ⭐ 중요: CSS 임포트는 사용하는 컴포넌트 안에 있어야 합니다.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestImg from '../assets/iceCreamImg.svg'

const WidgetSlider = () => {
  // 1. 데이터 배열 (이 프로퍼티들을 자유롭게 수정하세요)
  const productList = [
    { id: 1, name: "초코우유", price: "1,500", tag: "1+1", img: TestImg },
    { id: 2, name: "바나나우유", price: "1,700", tag: "2+1", img: TestImg },
    { id: 3, name: "생수 500ml", price: "900", tag: "1+1", img: TestImg },
    { id: 4, name: "감자칩", price: "2,500", tag: "2+1", img: TestImg },
    { id: 5, name: "해리포터 하리보", price: "1,000", tag: "1+1", img: "https://tqklhszfkvzk6518638.edge.naverncp.com/product/4001686013410.jpg" },
    { id: 6, name: "두쫀쿠", price: "1,800", tag: "5개 반값", img: "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801121288764.png" },
  ];

  return (
    <div style={{ width: '80vw', padding: '0 40px', height: '30vh'}}> {/* 화살표 공간 확보를 위한 패딩 */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}      // 위젯 사이 간격
        slidesPerView={4}    // 한 화면에 보일 개수 (소수점 사용 시 다음 위젯이 살짝 보임)
        navigation={true}      // ⭐ 좌우 화살표 활성화
        loop={true}            // ⭐ 무한 루프 활성화
        centeredSlides={false} // 슬라이드 시작점 (왼쪽 정렬)
        breakpoints={{         // 화면 크기별 반응형 설정
          320: { slidesPerView: 1.2, spaceBetween: 10 },
          768: { slidesPerView: 2.5, spaceBetween: 20 }
        }}
      >
        {productList.map((item) => (
          <SwiperSlide key={item.id}>
            {/* 2. ProductWidget에 데이터 전달 */}
            {/* 여기서 좌측 속성명(name=)은 ProductWidget이 받는 이름이고, 
                우측(item.name)은 위 productList의 키 이름입니다. */}
            <ProductWidget 
              name={item.name} 
              price={item.price} 
              productTag={item.tag} 
              imageUrl={item.img} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WidgetSlider;