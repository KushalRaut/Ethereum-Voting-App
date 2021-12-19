import React, { useEffect, useState } from "react";

const ClockComponent = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] =useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(UpdateTime,1000)

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default ClockComponent;
