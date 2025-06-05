import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2 className="clock">
        The time is{" "}
        {time.toLocaleDateString("en-US", { timeZone: "Asia/Kathmandu" })} -{" "}
        {time.toLocaleTimeString()}
      </h2>
    </>
  );
}
export default Clock;
