import Image from 'next/image';
import { useEffect } from 'react';

export default function Product() {
  const test = (e) => {
    e.preventDefault();

    const context = document.getElementById('context_menu');

    if (context) {
      const x = e.pageX + 300 > 1920 ? e.pageX - 300 : e.pageX;

      console.log(e.pageX);

      context.style.display = 'block';
      context.style.top = e.pageY + 'px';
      context.style.left = x + 'px';

      setTimeout(() => {
        context.style.height = '200px';
      }, 100);
    }
  };
  const test2 = (e) => {
    const context = document.getElementById('context_menu');
    if (context) {
      context.style.height = '0px';

      setTimeout(() => {
        context.style.display = 'none';
        context.style.top = '0px';
        context.style.left = '0px';
      }, 300);
    }
  };

  useEffect(() => {
    document.addEventListener('contextmenu', test);
    document.addEventListener('click', test2);
  }, []);

  return (
    <>
      <div className="flex h-screen w-full flex-wrap items-center justify-center bg-[#fff]">
        <div className="group relative m-5 flex h-[350px] w-[300px] select-none items-center justify-start rounded-[20px] delay-500 duration-500 hover:w-[600px] hover:delay-[0ms] lg:w-auto lg:max-w-[350px] lg:justify-start lg:hover:h-[600px]">
          <div
            className="product_b absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden rounded-[20px]"
            style={{ '--clr': '#f40103' }}
          >
            <Image
              src="/imgs/cocacola_logo.png"
              width={200}
              height={200}
              className="relative delay-500 duration-500 group-hover:scale-0 group-hover:delay-[0ms]"
              alt="logo"
              quality={100}
            />
          </div>
          <div className="invisible relative left-[20%] w-1/2 p-[20px_20px_20px_40px] -tracking-[0.05rem] opacity-0 duration-500 group-hover:visible group-hover:left-0 group-hover:opacity-100 group-hover:delay-500 lg:left-0 lg:-top-[100px] lg:w-full">
            <h2 className="mb-[0.5rem] text-[2.5em] uppercase leading-4 text-[#fff]">
              CocaCola
            </h2>
            <p className="text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quos at totam voluptatum aperiam nemo esse
              molestias. Reprehenderit et, libero architecto rerum obcaecati
              asperiores reiciendis esse voluptas impedit, nam dolor!
            </p>
            <a
              href="#"
              className="relative mt-[10px] inline-block rounded-[10px] bg-[#fff] px-[20px] py-[10px] text-[#111]"
            >
              Explore
            </a>
          </div>
          <img
            className="absolute top-1/2 left-1/2 h-[500px] -translate-x-[50%] -translate-y-[50%] scale-0 delay-[0ms] duration-500 group-hover:left-[72%] group-hover:-translate-x-[50%] group-hover:-translate-y-[50%] group-hover:scale-100 group-hover:delay-500 lg:group-hover:top-auto lg:group-hover:bottom-[30px] lg:group-hover:left-1/2 lg:group-hover:h-[300px] lg:group-hover:-translate-x-[50%] lg:group-hover:translate-y-0"
            src="/imgs/cocacola.png"
            alt="cola"
          />
        </div>
        <div className="group relative m-5 flex h-[350px] w-[300px] select-none items-center justify-start rounded-[20px] delay-500 duration-500 hover:w-[600px] hover:delay-[0ms] lg:w-auto lg:max-w-[350px] lg:justify-start lg:hover:h-[600px]">
          <div
            className="product_b absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden rounded-[20px]"
            style={{ '--clr': '#02953a' }}
          >
            <Image
              src="/imgs/sprite_logo.png"
              width={190}
              height={190}
              className="relative delay-500 duration-500 group-hover:scale-0 group-hover:delay-[0ms]"
              alt="logo"
              quality={100}
            />
          </div>
          <div className="invisible relative left-[20%] w-1/2 p-[20px_20px_20px_40px] -tracking-[0.05rem] opacity-0 duration-500 group-hover:visible group-hover:left-0 group-hover:opacity-100 group-hover:delay-500 lg:left-0 lg:-top-[150px] lg:w-full">
            <h2 className="mb-[0.5rem] text-[2.5em] uppercase leading-4 text-[#fff]">
              sprite
            </h2>
            <p className="text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quos at totam voluptatum aperiam nemo esse
              molestias. Reprehenderit et, libero architecto rerum obcaecati
              asperiores reiciendis esse voluptas impedit, nam dolor!
            </p>
            <a
              href="#"
              className="relative mt-[10px] inline-block rounded-[10px] bg-[#fff] px-[20px] py-[10px] text-[#111]"
            >
              Explore
            </a>
          </div>
          <img
            className="absolute top-1/2 left-1/2 h-[500px] -translate-x-[50%] -translate-y-[50%] scale-0 delay-[0ms] duration-500 group-hover:left-[72%] group-hover:-translate-x-[50%] group-hover:-translate-y-[50%] group-hover:scale-100 group-hover:delay-500 lg:group-hover:top-auto lg:group-hover:bottom-[30px] lg:group-hover:left-1/2 lg:group-hover:h-[300px] lg:group-hover:-translate-x-[50%] lg:group-hover:translate-y-0 lg:group-hover:scale-100"
            src="/imgs/sprite.png"
            alt="cola"
          />
        </div>
      </div>
      <div
        id="context_menu"
        className="absolute hidden h-0 w-[300px] divide-y-2 overflow-hidden rounded-md border-2 bg-gray-100 shadow-[0_10px_20px_#333] duration-300"
      >
        <div
          onClick={() => alert('메뉴 1')}
          className="absolut flex min-h-[calc(200px/3)] cursor-pointer items-center px-4 hover:bg-gray-200"
        >
          메뉴 1
        </div>
        <div
          onClick={() => alert('메뉴 2')}
          className="absolut flex min-h-[calc(200px/3)] cursor-pointer items-center px-4 hover:bg-gray-200"
        >
          메뉴 2
        </div>
        <div
          onClick={() => alert('메뉴 3')}
          className="absolut flex min-h-[calc(200px/3)] cursor-pointer items-center px-4 hover:bg-gray-200"
        >
          메뉴 3
        </div>
      </div>
    </>
  );
}
