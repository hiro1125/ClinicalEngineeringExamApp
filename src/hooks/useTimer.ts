import { useEffect, useState } from 'react';

export const useTimer = () => {
  const [timer, setTimer] = useState<number>(10);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return { timer, setTimer };
};
