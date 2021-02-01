import React, { useRef, useEffect, useCallback } from 'react';

interface IScreenDetectorProps {
    onActive : () => void;
    onUnactive ?: () => void;
    className ?: string;
}

const ScreenDetector : React.FC<IScreenDetectorProps> = props => {
    const detectorRef = useRef<HTMLDivElement>(null);
    const isElementInViewport = () => {
        const el = detectorRef.current!;
        var rect = el.getBoundingClientRect();
    
        return (
            (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.top < 0 && rect.bottom > (window.innerHeight || document.documentElement.clientHeight))
        );
    }

    const detects = useCallback(() => {
        if (isElementInViewport()) {
            props.onActive();
        }
        else if (props.onUnactive !== undefined){
            props.onUnactive();
        }
    }, []);

    useEffect(() => {
        detects();
        addEventListener('scroll', detects, false);
        return () => removeEventListener('scroll', detects, false);
    }, []);

    return (
            <div className={`screen-detector ${props.className}`} ref={detectorRef}>
            </div>
    );
}

export default ScreenDetector;