import React from 'react';
import Slider from "@/Components/Slider";

function Index() {
    return (
        // Renders a container div with center-aligned text and items
        <div className="w-screen h-screen text-center items-center content-center">
            {/* Renders a Slider component and logs the value when it changes */}
            <Slider onValueChange={val => console.log(val)} />
        </div>
    );
}

export default Index;