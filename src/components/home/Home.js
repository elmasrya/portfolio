import career from "../../images/career.png";
import hello from "../../images/hello.png";
import hobbies from "../../images/hobbies.png";
import family from "../../images/family.png";
import React, { useState, useEffect } from 'react';


import'./Home.css';

function Home() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

     const [avatarSize, setAvatarSize] = useState({
         width: '200px',
         height: '200px',
         top: '50px',
         left: '50px',
     });
    // State to store the div's size and position
    /*const [avatarPosition, setAvatarPosition] = useState({
        top: '50px',
        left: '50px',
    });*/

    // Function to update the window size
    const updateWindowSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    // Add event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []);

    // Update the div's size and position based on window size
    useEffect(() => {
        console.log("react rendered!")
        const newWidth = windowSize.width * 0.20; // 50% of window width
        const newHeight = windowSize.height * .30;// 30% of window height
        //const newHeight = newWidth; // 30% of window height
        const newTop = windowSize.height * 0.35; // 10% from the top
        const newLeft = windowSize.width * 0.22; // 20% from the left

        setAvatarSize({
            width: `${newWidth}px`,
            height: `${newHeight}px`,
            top: `${newTop}px`,
            left: `${newLeft}px`,
        });
        /*setAvatarPosition({
            top: `${newTop}px`,
            left: `${newLeft}px`,
        });*/
    }, [windowSize]);
    return (
        <div className="home-container">
            <img style={avatarSize} src={career} className="me-select career-img" alt="career"/>

            {/*<div style={avatarPosition} className="image-container career-container">
                <label className="image-label">Career</label>
            </div>
            <div className="image-container hello-container">
                <label className="image-label hello-label">Hello</label>
                <img src={hello} className="me-select hello-img" alt="hello"/>
            </div>
            <div className="image-container hobbies-container">
                <label className="image-label hobbies-label">Hobbies</label>
                <img src={hobbies} className="me-select hobbies-img" alt="hobbies"/>
            </div>
            <div className="image-container family-container">
                <label className="image-label">Family</label>
                <img src={family} className="me-select family-img" alt="family"/>
            </div>*/}
        </div>
    )
}

export {Home};