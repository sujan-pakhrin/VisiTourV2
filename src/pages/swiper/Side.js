// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './side.css'
const Side = () => {
    return (
        <div className='swipder-wrapper'>
            <Swiper
                className='swiper-main'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    786: {
                        slidesPerView: 2
                    },
                    990: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                }}
            >
                <SwiperSlide className='slide'>
                    <div class="card">
                        <div class="img-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img class="card-img" src="https://source.unsplash.com/featured" alt="" />
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="name">Name</h2>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                voluptatibus.</p>
                            <button class="button">View More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="img-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img class="card-img" src="https://source.unsplash.com/featured" alt="" />
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="name">Name</h2>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                voluptatibus.</p>
                            <button class="button">View More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="img-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img class="card-img" src="https://source.unsplash.com/featured" alt="" />
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="name">Name</h2>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                voluptatibus.</p>
                            <button class="button">View More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="img-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img class="card-img" src="https://source.unsplash.com/featured" alt="" />
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="name">Name</h2>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                voluptatibus.</p>
                            <button class="button">View More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="img-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img class="card-img" src="https://source.unsplash.com/featured" alt="" />
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="name">Name</h2>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                voluptatibus.</p>
                            <button class="button">View More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="img-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img class="card-img" src="https://source.unsplash.com/featured" alt="" />
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="name">Name</h2>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                voluptatibus.</p>
                            <button class="button">View More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="img-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img class="card-img" src="https://source.unsplash.com/featured" alt="" />
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="name">Name</h2>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                voluptatibus.</p>
                            <button class="button">View More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Side