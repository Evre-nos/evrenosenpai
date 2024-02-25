// Importing necessary dependencies and components
import React, { useEffect, useRef } from 'react'; // React library, useEffect hook and useRef hook
import { IoCodeSlashOutline, IoPhonePortraitOutline, IoBasketOutline, IoChatbubbleOutline, IoCloseOutline, IoColorFilterOutline, IoDesktopOutline, IoMegaphoneOutline, IoPodiumOutline, IoSunny } from "react-icons/io5"; // Importing specific icons from react-icons library

// Mapping the imported icons to an object for easier access
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

// Slider functional component
// The component receives a 'slides' prop, which is an array of slide objects
const Slider = ({ slides }) => {
    // Using the useRef hook to get a reference to the slider element
    const sliderRef = useRef(null);

    // Using the useEffect hook to add functionality after the component has been rendered
    useEffect(() => {
        // Getting references to various elements within the slider
        const slider = sliderRef.current;
        const sliderContainer = slider.querySelector("[data-slider-container]");
        const sliderPrevBtn = slider.querySelector("[data-slider-prev]");
        const sliderNextBtn = slider.querySelector("[data-slider-next]");

        // Calculating the total number of visible and slidable items
        let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
        let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        // Keeping track of the current slide position
        let currentSlidePos = 0;

        // Function to move the slider to the current slide position
        const moveSliderItem = function () {
            sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
        }

        // Function to move to the next slide
        const slideNext = function () {
            const slideEnd = currentSlidePos >= totalSlidableItems;

            if (slideEnd) {
                currentSlidePos = 0;
            } else {
                currentSlidePos++;
            }

            moveSliderItem();
        }

        // Adding an event listener to the next button to move to the next slide when clicked
        sliderNextBtn.addEventListener("click", slideNext);

        // Function to move to the previous slide
        const slidePrev = function () {
            if (currentSlidePos <= 0) {
                currentSlidePos = totalSlidableItems;
            } else {
                currentSlidePos--;
            }

            moveSliderItem();
        }

        // Adding an event listener to the previous button to move to the previous slide when clicked
        sliderPrevBtn.addEventListener("click", slidePrev);

        // If there are no extra items to slide to, hide the next and previous buttons
        const dontHaveExtraItem = totalSlidableItems <= 0;
        if (dontHaveExtraItem) {
            sliderNextBtn.style.display = 'none';
            sliderPrevBtn.style.display = 'none';
        }

        // Adding an event listener to the slider to move to the next or previous slide when the wheel is scrolled while the shift key is pressed
        slider.addEventListener("wheel", function (event) {
            if (event.shiftKey && event.deltaY > 0) slideNext();
            if (event.shiftKey && event.deltaY < 0) slidePrev();
        });

        // Adding an event listener to the window to recalculate the total number of visible and slidable items and move the slider to the current slide position when the window is resized
        window.addEventListener("resize", function () {
            totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
            totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

            moveSliderItem();
        });
    }, []);

    // Rendering the Slider component
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

// Exporting the Slider component as the default export of this module
export default Slider;