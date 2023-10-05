import React from 'react';

function Slider({min=0, max=100, defaultValue, onValueChange, ...rest}: any) {
    return (
        <input
            type="range"
            min = {min}
            max = {max}
            defaultValue={defaultValue}
            onChange={({target:{value}})=>onValueChange(value)}
            {...rest}
        />
    );
}

export default Slider;