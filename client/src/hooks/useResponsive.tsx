import { useState, useEffect } from 'react';

function useResponsive(widthThreshold = 768) {
    const [isWide, setIsWide] = useState(window.innerWidth > widthThreshold);

    useEffect(() => {
        const handleResize = () => {
            setIsWide(window.innerWidth > widthThreshold);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [widthThreshold]);

    return isWide;
}
export default useResponsive;