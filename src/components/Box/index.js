import React, {useState} from 'react';
import './style.css';

const Box = ({box}) => {
    const [marker, setMarker] = useState('');

    const handleClick = () => {
        setMarker('x');
    };

    return (
        <div className='box' onClick={handleClick}>
            <span>{marker}</span>
        </div>
    );
};

export default Box;
