import { useEffect, useState } from 'react';
import { useRootSelector } from '../redux/store/store';

export const useTimer = () => {
  const timeLimitValue = useRootSelector((state) => state.settings.timeLimit);
  const [timer, setTimer] = useState<number>(timeLimitValue);

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
