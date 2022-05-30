import { useEffect, useState } from 'react';

export default function BgSpan() {
  const [random, setRandom] = useState(10);

  useEffect(() => {
    setRandom(Math.ceil(Math.random() * 18) + 10);
  }, []);

  return (
    <span
      className="mx-1 h-[30px] w-[30px] animate-animate rounded-[50%] bg-[#4fc3dc] shadow-[0_0_0_10px_#4fc3dc44,0_0_50px_#4fc3dc,0_0_100px_#4fc3dc] animation-duration-custom even:bg-[#ff2d75] even:shadow-[0_0_0_10px_#ff2d7544,0_0_50px_#ff2d75,0_0_100px_#ff2d75]"
      style={{ '--i': random }}
    ></span>
  );
}
