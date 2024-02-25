"use client"

// Importing necessary components
import React, { useEffect, useRef } from 'react';
import ProjectSlider from "@/app/components/ProjectSlider";

// Projects functional component
const Projects = () => {

    // Array of project objects, each with properties for the title, description, image, and link
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


    // useRef hook to create a reference to the slider element
    const sliderRef = useRef(null);

    // useEffect hook to initialize the slider when the component mounts
    useEffect(() => {
        const sliders = sliderRef.current.querySelectorAll("[data-slider]");
        for (let i = 0, len = sliders.length; i < len; i++) {
            initSlider(sliders[i]);
        }
    }, []); // Empty dependency array means this effect runs once on mount

    // Function to initialize a slider
    const initSlider = function (currentSlider) {
        // Selecting necessary elements within the current slider
        const sliderContainer = currentSlider.querySelector("[data-slider-container]");
        const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
        const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");
    
        // Getting the total number of visible slider items and the total number of slidable items
        let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
        let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
    
        // Variable to keep track of the current slide position
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
    
        // If there are no extra items to slide, hide the next and previous buttons
        const dontHaveExtraItem = totalSlidableItems <= 0;
        if (dontHaveExtraItem) {
        sliderNextBtn.style.display = 'none';
        sliderPrevBtn.style.display = 'none';
        }
    
        // Adding an event listener to the slider to move to the next or previous slide when the shift key and mouse wheel are used
        currentSlider.addEventListener("wheel", function (event) {
        if (event.shiftKey && event.deltaY > 0) slideNext();
        if (event.shiftKey && event.deltaY < 0) slidePrev();
        });
    
        // Adding an event listener to the window to update the total number of visible and slidable items and move the slider to the current slide position when the window is resized
        window.addEventListener("resize", function () {
        totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
        totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
    
        moveSliderItem();
        });
    }


    // Render the Projects section
    return (
        // The section has an id of "projects", which can be used for navigation
        // The aria-labelledby attribute is used for accessibility, providing a label for screen readers
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

// Exporting the Projects component as the default export of this module
export default Projects