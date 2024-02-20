import React, { useEffect, useRef } from 'react';
import { IoCodeSlashOutline, IoPhonePortraitOutline, IoBasketOutline, IoChatbubbleOutline, IoCloseOutline, IoColorFilterOutline, IoDesktopOutline, IoMegaphoneOutline, IoPodiumOutline, IoSunny } from "react-icons/io5";

const icons = {
    IoBasketOutline: IoBasketOutline,
    IoChatbubbleOutline: IoChatbubbleOutline,
    IoCloseOutline: IoCloseOutline,
    IoColorFilterOutline: IoColorFilterOutline,
    IoDesktopOutline: IoDesktopOutline,
    IoMegaphoneOutline: IoMegaphoneOutline,
    IoPodiumOutline: IoPodiumOutline,
    IoPhonePortraitOutline: IoPhonePortraitOutline,
    IoCodeSlashOutline: IoCodeSlashOutline
};



const Slider = ({slides}) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const sliderContainer = slider.querySelector("[data-slider-container]");
        const sliderPrevBtn = slider.querySelector("[data-slider-prev]");
        const sliderNextBtn = slider.querySelector("[data-slider-next]");

        let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
        let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        let currentSlidePos = 0;

        const moveSliderItem = function () {
            sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
        }

        const slideNext = function () {
            const slideEnd = currentSlidePos >= totalSlidableItems;

            if (slideEnd) {
                currentSlidePos = 0;
            } else {
                currentSlidePos++;
            }

            moveSliderItem();
        }

        sliderNextBtn.addEventListener("click", slideNext);

        const slidePrev = function () {
            if (currentSlidePos <= 0) {
                currentSlidePos = totalSlidableItems;
            } else {
                currentSlidePos--;
            }

            moveSliderItem();
        }

        sliderPrevBtn.addEventListener("click", slidePrev);

        const dontHaveExtraItem = totalSlidableItems <= 0;
        if (dontHaveExtraItem) {
            sliderNextBtn.style.display = 'none';
            sliderPrevBtn.style.display = 'none';
        }

        slider.addEventListener("wheel", function (event) {
            if (event.shiftKey && event.deltaY > 0) slideNext();
            if (event.shiftKey && event.deltaY < 0) slidePrev();
        });

        window.addEventListener("resize", function () {
            totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
            totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

            moveSliderItem();
        });
    }, []);

    return (
        <div className="slider" ref={sliderRef} data-slider>
            <ul className="slider-container service-list" data-slider-container>

            {slides.map((slide, index) => {
                    const Icon = icons[slide.icon];
                    return (
                        <li className="slider-item" data-slider-item key={index}>
                            <div className="service-card">
                                <div className="card-icon">
                                    <Icon className="ion-icon" />
                                </div>
                                <h3 className="h3 card-title">{slide.title}</h3>
                                <p className="card-text">{slide.text}</p>
                                <span className="text-lg card-number">{slide.number}</span>
                                <a href={slide.link} className="layer-link" aria-label={`More about my ${slide.title} service`}></a>
                            </div>
                        </li>
                    );
                })}

            </ul>


            <div className="slider-controls">
                <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
                    <div className="line"></div>
                    <div className="arrow"></div>
                </button>

                <button className="slider-control next" data-slider-next aria-label="Slide to next item">
                    <div className="line"></div>
                    <div className="arrow"></div>
                </button>
            </div>
        </div>
    );
}

export default Slider;