"use client"

// Importing necessary dependencies and components
import "@/app/globals.css"; // Global CSS styles
import React, { useEffect } from 'react'; // React library and useEffect hook

// Preloader functional component
export default function Preloader() {

  // useEffect hook to run side effects after render
  // The empty array as the second argument means the effect will only run once after the initial render
  useEffect(() => {

    // Set a timer to run after 0 milliseconds (as soon as possible)
    const timer = setTimeout(() => {

      // Select the preloader element
      const preloader = document.querySelector('.preloader');

      // If the preloader element exists, add the 'loaded' class to it
      // This could trigger a CSS transition or animation, for example
      if (preloader) {
        preloader.classList.add('loaded');
      }

    }, 0);

    // Return a cleanup function to be run on unmount
    // This function will clear the timer, preventing it from running if the component is unmounted before the timer runs
    return () => clearTimeout(timer);

  }, []);

  // Render the preloader element
  // The preloader element is a div with the 'preloader' class and a 'data-preloader' attribute
  // It contains a span with the 'line' class
  return (
    <div className="preloader" data-preloader>
      <span className="line"></span>
    </div>
  );
}