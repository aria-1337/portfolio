import { useState, useEffect } from 'react';

// Hook to get window dimensions
interface Dimensions {
    width: number;
    height: number;
}
function getDimensions() : Dimensions {
    const dimensions: Dimensions = {width: window.innerWidth, height: window.innerHeight};
    return dimensions;
}

export default function useDimensions() {
    const [dimensions, setDimensions] = useState(getDimensions());

    useEffect(() => {
        const handleResize = () => setDimensions(getDimensions());
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return dimensions; 
}
