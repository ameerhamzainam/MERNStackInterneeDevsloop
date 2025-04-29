import { useState, useRef } from 'react';

export default function StopWatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const resumeTime = useRef<number>(0);

  function handleStart() {
    const currentTime = Date.now();
    setStartTime(currentTime);
    setNow(currentTime);
    resumeTime.current = 0;

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    if (startTime !== null && now !== null) {
      resumeTime.current += now - startTime;
    }
    setStartTime(null);
    setNow(null);
  }

  function handleResume() {
    const currentTime = Date.now();
    setStartTime(currentTime);
    setNow(currentTime);

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime + resumeTime.current) / 1000;
  } else {
    secondsPassed = resumeTime.current / 1000;
  }

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-4xl text-white'>
        Time passed: {secondsPassed.toFixed(3)}
      </h1>
      <div className='flex gap-2 justify-center mb-4'>
        <button
          className='bg-gray-800 text-2xl text-white px-6 py-2 rounded-2xl'
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className='bg-gray-800 text-2xl text-white px-6 py-2 rounded-2xl'
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className='bg-gray-800 text-2xl text-white px-6 py-2 rounded-2xl'
          onClick={handleResume}
        >
          Resume
        </button>
      </div>
    </div>
  );
}
