import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span className="clock p-2">{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>;
}
export default Clock;
