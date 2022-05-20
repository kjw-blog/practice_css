import classNames from 'classnames';

export default function Cloud() {
  //   const snows = [
  //     'animate-snowing_1',
  //     'animate-snowing_2',
  //     'animate-snowing_3',
  //     'animate-snowing_4',
  //     'animate-snowing_5',
  //     'animate-snowing_6',
  //     'animate-snowing_7',
  //   ];
  const snows = [
    'animation-duration-10',
    'animation-duration-30',
    'animation-duration-60',
    'animation-duration-10',
    'animation-duration-50',
    'animation-duration-80',
    'animation-duration-20',
    'animation-duration-50',
    'animation-duration-60',
    'animation-duration-10',
    'animation-duration-20',
    'animation-duration-50',
    'animation-duration-30',
    'animation-duration-70',
    'animation-duration-20',
    'animation-duration-80',
    'animation-duration-40',
    'animation-duration-20',
    'animation-duration-80',
    'animation-duration-20',
  ];

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#181c1f]">
      <div className="relative h-[400px]">
        <div className="cloud_before relative top-[50px] flex h-[100px] w-[320px] items-center rounded-[100px] bg-[#fff] ">
          <div className="relative z-[1] flex space-x-[4px] px-[20px]">
            {new Array(20).fill(0).map((_, idx) => (
              <span
                key={idx}
                className={classNames(
                  'relative bottom-[10px] h-[10px] w-[10px] origin-bottom animate-snowing_1 rounded-full bg-[#fff]',
                  //   snows[Math.floor(Math.random() * 7)]
                  snows[idx]
                )}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
