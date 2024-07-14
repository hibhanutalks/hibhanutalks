// src/components/DynamicDate.js
import React, { useState, useEffect } from 'react';

const DynamicDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return (
        <div className="inf">
            <strong>{currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</strong>
            <p>{formattedDate}</p>
        </div>
    );
};

export default DynamicDate;
