import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursorDot');

    if (!cursor || !dot) return;

    // Disable custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      cursor.style.display = 'none';
      dot.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Match interactive elements (similar to the original script)
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('.project-row') || 
                            target.closest('.skill-cell') || 
                            target.closest('.stat-block') || 
                            target.closest('.contact-link') || 
                            target.closest('.exp-row') || 
                            target.closest('.cert-cell');
      
      if (isInteractive) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursor.style.borderColor = 'var(--accent2)';
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('.project-row') || 
                            target.closest('.skill-cell') || 
                            target.closest('.stat-block') || 
                            target.closest('.contact-link') || 
                            target.closest('.exp-row') || 
                            target.closest('.cert-cell');

      if (isInteractive) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--accent)';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-dot" id="cursorDot"></div>
    </>
  );
};

export default CustomCursor;
