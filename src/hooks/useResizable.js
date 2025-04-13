import { useState, useRef, useEffect } from 'react';

export default function useResizable(initialWidth = 500, minWidth = 350) {
  const [leftPanelWidth, setLeftPanelWidth] = useState(initialWidth);
  const [isDragging, setIsDragging] = useState(false);
  const leftPanelRef = useRef(null);
  const resizerRef = useRef(null);
  
  useEffect(() => {
    const resizer = resizerRef.current;
    if (!resizer) return;
    
    let startX;
    let startWidth;
    
    const onMouseDown = (e) => {
      startX = e.clientX;
      startWidth = leftPanelRef.current?.offsetWidth || initialWidth;
      setIsDragging(true);
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };
    
    const onMouseMove = (e) => {
      if (!isDragging) return;
      
      const dx = e.clientX - startX;
      const newWidth = startWidth + dx;
      
      // Don't allow width to go below minWidth or above window width - minWidth
      if (newWidth >= minWidth && newWidth <= window.innerWidth - minWidth) {
        setLeftPanelWidth(newWidth);
      }
    };
    
    const onMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    resizer.addEventListener('mousedown', onMouseDown);
    
    return () => {
      resizer.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [initialWidth, isDragging, minWidth]);
  
  return {
    leftPanelRef,
    resizerRef,
    leftPanelWidth,
    isDragging
  };
}
