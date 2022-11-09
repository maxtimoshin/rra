import React, { useState } from 'react';
import Header from '../../components/Header';
import { useSpring, animated } from 'react-spring'

const AboutUs = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => set(!flip),
    })
    return (
        <div>
            <Header />
            <animated.h1 style={props}>hello</animated.h1>
        </div>
    );
};

export default AboutUs;