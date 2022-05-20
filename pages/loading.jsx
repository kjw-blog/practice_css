import classNames from 'classnames';

export default function Loading() {
  const array = [
    '',
    'animation-delay-200',
    'animation-delay-400',
    'animation-delay-600',
  ];

  return (
    <div className="loading w-full h-screen bg-[#e15f41] flex items-center justify-center">
      <div className="circles w-[120px] h-[120px] grid grid-cols-4 grid-rows-4 justify-between content-between rotate-45">
        {Array(16)
          .fill(0)
          .map((_, idx) => (
            <span
              className={classNames(
                'bg-white rounded-[50%] w-[20px] h-[20px] animate-scale',
                array[idx % 4]
              )}
              key={idx}
            ></span>
          ))}
      </div>
    </div>
  );
}
