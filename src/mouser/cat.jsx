import React from 'react';

export default function Cat({ mouse }) {
    return (
        <img src="/cat.jpg" alt="cat" style={{ position: 'absolute', 
                                            left: mouse.x, top: mouse.y }} />
    );
}