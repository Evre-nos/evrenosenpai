"use client"



import React, { useEffect, useRef } from 'react';
import ProjectSlider from "@/app/components/ProjectSlider";

const Projects = () => {

    const projects = [
        {
            title: 'Lab. 001',
            description: 'Website Design',
            image: 'portfolio-1.jpg',
            link: '#'
        },
        {
            title: 'Aer Agency',
            description: 'Website / Development',
            image: 'portfolio-2.jpg',
            link: '#'
        },
        {
            title: 'Joker Card',
            description: 'UX Design / Web App',
            image: 'portfolio-3.jpg',
            link: '#'
        },
        {
            title: 'Peaky Blinders',
            description: 'Website / UX Design',
            image: 'portfolio-4.jpg',
            link: '#'
        },
        {
            title: 'Design Zoom',
            description: 'Branding / Design',
            image: 'portfolio-5.jpg',
            link: '#'
        },
        {
            title: 'Out Zone',
            description: 'UX Design / Web App',
            image: 'portfolio-6.jpg',
            link: '#'
        }
    ];

    const sliderRef = useRef(null);

    useEffect(() => {
        const sliders = sliderRef.current.querySelectorAll("[data-slider]");
        for (let i = 0, len = sliders.length; i < len; i++) { 
            initSlider(sliders[i]); 
        }
    }, []);

    const initSlider = function (currentSlider) {
        

        const sliderContainer = currentSlider.querySelector("[data-slider-container]");
        const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
        const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

        let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
        let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        let currentSlidePos = 0;

        const moveSliderItem = function () {
            sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
        }

        /**
         * NEXT SLIDE
         */
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

        /**
         * PREVIOUS SLIDE
         */
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

        /**
         * slide with [shift + mouse wheel]
         */

        currentSlider.addEventListener("wheel", function (event) {
            if (event.shiftKey && event.deltaY > 0) slideNext();
            if (event.shiftKey && event.deltaY < 0) slidePrev();
        });

        /**
         * RESPONSIVE
         */

        window.addEventListener("resize", function () {
            totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
            totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

            moveSliderItem();
        });

    }


    return (
        <section id="projects" className="portfolio" aria-labelledby="portfolio-label" ref={sliderRef}>

            <div className="title-wrapper container">

                <div>
                    <p className="section-subtitle" id="portfolio-label">Our Works</p>

                    <h2 className="h2 section-title">Portfolio</h2>
                </div>

                <p className="section-text">
                    We have worked on a wide range of projects. Here are a few examples of our recent work. We are always looking for new challenges and we are excited to work with you on your next project. Let’s work together and take your business to the next level.
                </p>

            </div>

            <div className="slider" data-slider>

                <ProjectSlider projects={projects} />

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

        </section>
    )
}

export default Projects