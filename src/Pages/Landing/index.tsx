import AboutSection from "../../Sections/About";
import BannerSection from "../../Sections/Banner";
import DemoSection from "../../Sections/Demos";
import FeaturesSection from "../../Sections/Features";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import DemoGallerySection from "../../Sections/Gallery";
import ProductSection from "../../Sections/Product";


export default function Landing() {
    return (
        <Swiper
            slidesPerView={1}
            direction="vertical"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper, "hjkl")}
            style={{ height: '100dvh', maxWidth:'100dvw' }}
            mousewheel={{ invert: true }} >
            <SwiperSlide> <BannerSection /></SwiperSlide>
            <SwiperSlide> <AboutSection /></SwiperSlide>
            <SwiperSlide> <DemoSection /></SwiperSlide>
            <SwiperSlide> <FeaturesSection /></SwiperSlide>
            <SwiperSlide> <DemoGallerySection /></SwiperSlide>
            <SwiperSlide> <ProductSection /></SwiperSlide>
        </Swiper>
    )
}