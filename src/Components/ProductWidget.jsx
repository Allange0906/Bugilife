import React from 'react';
import '../Classes/ProductWidget.css';


// 위젯에 들어갈 데이터를 프로퍼티(props)로 전달받습니다.
const ProductWidget = ({ name, imageUrl, productTag, price, bgColor = '#f9f9f9' }) => {
  return (
    <div className='slider-background' style={{ backgroundColor: bgColor }}>
      {/* 1. 행사 유형 태그 (1+1, 2+1 등) */}
      <div className='product-tag'>
        {productTag}
      </div>

      {/* 2. 상품 이미지 */}
      <div className='product-img'>
        <img 
          src={imageUrl} 
          alt={name} 
        />
      </div>

      {/* 3. 상품 이름 및 가격 */}
      <div className='product-info'>
        <h4>{name}</h4>
        <p>{price}원</p>
      </div>
    </div>
  );
};

export default ProductWidget;