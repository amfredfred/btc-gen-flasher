import DemoOne from '../../assets/Videos/sending-4-btc.mp4'
import DemoTwo from '../../assets/Videos/sending-10-btc.mp4'
import DemoThree from '../../assets/Videos/sending-1000-btc.mp4'
import Plyr from 'plyr'
import { useEffect } from 'react'

import 'plyr/dist/plyr.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function DemoGallerySection() {


    useEffect(() => {
        Array.from(document.querySelectorAll('#js-player')).map(el => new Plyr(el, { autopause: true, }))
    }, [])

    return (
        <section className="section-main" style={{ padding: 0 }}>
            <div className="section-inner" style={{ padding: 0, borderRadius: 10, boxShadow: 'none', background: 'transparent', backdropFilter:'none' }}>
                <div className="text-content" style={{ maxWidth: '100%', padding: 0 }}>
                    <h2 style={{ paddingInline: 10 }}>Demo Gallery</h2>
                    <div className="gallery-container">
                        <Swiper
                            slidesPerView={1.5}
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={50}
                            navigation={true}
                            // thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="gallery-swiper" >
                            {[{
                                vid: DemoOne, title: 'Sending 4 Btc Wallet to wallet transfer'
                            }, {
                                vid: DemoTwo, title: 'Sending 10 Btc Wallet to wallet transfer'
                            },
                            {
                                vid: DemoThree, title: 'Sending 1000 Btc Wallet to wallet transfer'
                            }].map(({ vid, title }) => (
                                <SwiperSlide className='gallery-slide'>
                                    <video className="js-player demo-video" id='js-player'>
                                        <source src={vid} type="video/mp4" />
                                    </video>
                                    <h4>{title}</h4>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

