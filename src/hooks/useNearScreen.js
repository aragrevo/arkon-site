import { useEffect, useState, useRef } from 'react';

export function useNearScreen() {
  const element = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      console.log({ isIntersecting });
      setVisible(isIntersecting);
      //   if (isIntersecting) {
      //     // observer.disconnect();
      //   }
    });
    observer.observe(element.current);
  }, [element]);

  return [isVisible, element];
}
