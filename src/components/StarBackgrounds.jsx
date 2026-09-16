import { useEffect } from "react";
import { useState } from "react";

const genStars = () => {
  const numOfStars = Math.floor(
    (window.innerHeight * window.innerWidth) / 10000,
  );

  const newStars = [];

  for (let i = 0; i < numOfStars; i++) {
    newStars.push({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    });
  }

  return newStars;
};
const genMeteors = () => {
  const numOfMeteors = 4;
  const newMeteors = [];

  for (let i = 0; i < numOfMeteors; i++) {
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
    });
  }
  return newMeteors;
};

export const StarBackground = () => {
  const [stars, setStars] = useState(() => genStars());
  const [meteors, setMeteors] = useState(() => genMeteors());

  useEffect(() => {
    const handleResize = () => {
      setStars(genStars());
      setMeteors(genMeteors());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          />
        );
      })}
      {meteors.map((meteor) => {
        return (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: `-${meteor.delay}s`,
              animationDuration: meteor.animationDuration + "s",
            }}
          />
        );
      })}
    </div>
  );
};
