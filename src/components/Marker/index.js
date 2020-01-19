import React from 'react';
import Box from '../Box';

const Marker = () => {
    let boxes = Array(9).fill('');

    return (
        <>
            {
                boxes.map((box, key) => (
                    <Box key={key} />
                ))
            }
        </>
    );
};

export default Marker;
