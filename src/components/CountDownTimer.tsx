import React, { useState, useEffect } from "react";
import Text from "./Text"; // Assuming this is your text component

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownTimerProps = {
  endDate: string; // The end date of the countdown in ISO format
  circular?: boolean; // Optional prop to control circular layout
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  endDate,
  circular = false,
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const formatTime = (unit: number) => {
    return String(unit).padStart(2, "0");
  };

  // Circular layout
  if (circular) {
    return (
      <div className="w-fit flex gap-4 justify-center">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">
              {formatTime(timeLeft.days)}
            </span>
            <Text color="black" size="xs">
              Days
            </Text>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">
              {formatTime(timeLeft.hours)}
            </span>
            <Text color="black" size="xs">
              Hours
            </Text>
          </div>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">
              {formatTime(timeLeft.minutes)}
            </span>
            <Text color="black" size="xs">
              Minutes
            </Text>
          </div>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">
              {formatTime(timeLeft.seconds)}
            </span>
            <Text color="black" size="xs">
              Seconds
            </Text>
          </div>
        </div>
      </div>
    );
  }

  // Default layout with colon separators
  return (
    <div className="flex items-center gap-2">
      {/* Days */}
      <div className="flex flex-col items-center">
        <Text color="black" weight="normal" size="xs">
          Days
        </Text>
        <div className="text-black px-3 font-semibold text-2xl py-1 rounded">
          {formatTime(timeLeft.days || 0)}
        </div>
      </div>

      {/* Colon */}
      <Text size="xl" className="text-3xl" color="primary">
        :
      </Text>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <Text color="black" weight="normal" size="xs">
          Hours
        </Text>
        <div className="text-black px-3 font-semibold text-2xl py-1 rounded">
          {formatTime(timeLeft.hours || 0)}
        </div>
      </div>

      <Text size="xl" className="text-3xl" color="primary">
        :
      </Text>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <Text color="black" weight="normal" size="xs">
          Minutes
        </Text>
        <div className="text-black px-3 font-semibold text-2xl py-1 rounded">
          {formatTime(timeLeft.minutes || 0)}
        </div>
      </div>

      <Text size="xl" className="text-3xl" color="primary">
        :
      </Text>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <Text color="black" weight="normal" size="xs">
          Seconds
        </Text>
        <div className="text-black px-3 font-semibold text-2xl py-1 rounded">
          {formatTime(timeLeft.seconds || 0)}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
