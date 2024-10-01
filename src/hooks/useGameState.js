import { useEffect, useState } from 'react';
import { random, randomSumIn, range, sum } from '../utils/MathScience';

export const MAX_BUTTONS = 9;
export const DEFAULT_SECONDS_LEFT = 10;
export const DEFAULT_MS_DELAY = 1000;

export function useGameState() {
  const [stars, setStars] = useState(random(1, MAX_BUTTONS));
  const [availableNums, setAvailableNums] = useState(range(1, MAX_BUTTONS));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_SECONDS_LEFT);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady && secondsLeft > 0 && availableNums.length > 0) {
      const timeOutId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, DEFAULT_MS_DELAY);

      return () => clearTimeout(timeOutId);
    }
  }, [secondsLeft, availableNums, isReady]);

  const setGameStatus = (newCandidateNums) => {
    if (sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    stars,
    candidateNums,
    availableNums,
    secondsLeft,
    isReady,
    setGameStatus,
    setIsReady: () => {
      setIsReady(!isReady);
    },
  };
}
