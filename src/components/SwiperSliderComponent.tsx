import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

export default function SwiperSliderComponent({
    data = [],
    renderItem,
    swiperConfig = {}
} : {
    data: any[];
    renderItem: (item: any) => React.ReactNode;
    swiperConfig?: any;
}) {
    const defaultConfig = {
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: true,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
        },
        autoHeight: true,
    };

    return (
        <Swiper {...defaultConfig} {...swiperConfig} className="my-14">
            {data.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                    {renderItem(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
