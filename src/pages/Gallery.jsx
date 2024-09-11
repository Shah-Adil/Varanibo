
import { Swiper, SwiperSlide } from 'swiper/react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

// import required modules
import {  Pagination, Navigation  , EffectCreative} from 'swiper/modules';

const Gallery = props => {
   
    return <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation , EffectCreative]}
        className="mySwiper"
        grabCursor={true}
        effect={'creative'}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
       
      >

        {props.hotelImage.map((i , index ) => {
            return (
                <SwiperSlide key={index} ><img  className="w-100" style={{aspectRatio: "16/9"}} src={i} alt="img" /></SwiperSlide>
            )
        })}
     

      </Swiper>
    </>
}



export default Gallery