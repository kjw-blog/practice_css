export default function Milk() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-tr from-[#006bc6] to-[#1ecafc]">
      <div className="relative left-20 flex items-center justify-center lg:left-40">
        <h2 className="absolute text-[1.75em] text-[#fff]">Milk</h2>
        <div className="loader relative flex h-[300px] w-[300px] items-center justify-center bg-[#000] bg-opacity-25">
          <span
            className="milk_loading animation-delay-0"
            style={{ '--i': 0 }}
          ></span>
          <span
            className="milk_loading animation-delay-150"
            style={{ '--i': 1 }}
          ></span>
          <span
            className="milk_loading animation-delay-300"
            style={{ '--i': 2 }}
          ></span>
          <span
            className="milk_loading animation-delay-450"
            style={{ '--i': 3 }}
          ></span>
          <span
            className="milk_loading animation-delay-600"
            style={{ '--i': 4 }}
          ></span>
          <span
            className="milk_loading animation-delay-750"
            style={{ '--i': 5 }}
          ></span>
          <span
            className="milk_loading animation-delay-900"
            style={{ '--i': 6 }}
          ></span>
          <span
            className="milk_loading animation-delay-1050"
            style={{ '--i': 7 }}
          ></span>
        </div>
      </div>
      <svg>
        <filter id="Gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            Values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10"
          />
        </filter>
      </svg>
    </div>
  );
}
