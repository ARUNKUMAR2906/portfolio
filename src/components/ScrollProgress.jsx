import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      // Using requestAnimationFrame for smoother updates
      window.requestAnimationFrame(() => setScrollTop(scrolled));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-in-out"
        style={{
          width: `${scrollTop}%`,
        }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
