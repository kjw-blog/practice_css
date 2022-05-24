import classNames from 'classnames';

export default function Cloud() {
  const snows = [
    'animation-duration-10',
    'animation-duration-20',
    'animation-duration-30',
    'animation-duration-40',
    'animation-duration-50',
    'animation-duration-60',
    'animation-duration-70',
  ];

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#181c1f]">
      <div className="relative left-[150px] h-[400px]">
        <div className="cloud_before relative top-[50px] flex h-[100px] w-[320px] items-center rounded-[100px] bg-[#fff] shadow-[0_320px_200px_0_#fff] ">
          <div className="relative z-[1] flex space-x-[4px] px-[20px]">
            {new Array(20).fill(0).map((_, idx) => (
              <span
                key={idx}
                className={classNames(
                  'relative bottom-[10px] h-[10px] w-[10px] origin-bottom animate-snowing rounded-full bg-[#fff]',
                  snows[Math.floor(Math.random() * 7)]
                )}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative top-[145px] h-[100px] w-[320px]">
        <div className="absolute bottom-0 -left-[180px] h-[50px] w-[50px] animate-snowman rounded-full bg-[#fff] animation-delay-1000 before:absolute before:bottom-[44px] before:left-[8px] before:h-[32px] before:w-[32px] before:rounded-full before:bg-[#fff] before:content-['']" />
      </div>
    </div>
  );
}
