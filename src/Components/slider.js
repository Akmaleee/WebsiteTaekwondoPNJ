import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

export const Slider = ({slides}) => {
    return(
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={1}
      loop= {true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        autoplay:true
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} >
      <div className="relative bg-gray-800 h-fit -pb-10">
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title} className="gallery_image"/>
        </SwiperSlide>
       
      ))}</div>
      
      
     
    </Swiper>

    
    )
}