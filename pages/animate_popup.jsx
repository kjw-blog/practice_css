import classNames from 'classnames';
import { useState } from 'react';

export default function Popup() {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#1a242a]">
      <div
        className={classNames(
          "relative flex items-center justify-center rounded-[25px] bg-[#37444b] duration-500 before:absolute before:-bottom-[15px] before:h-[40px] before:w-[40px] before:rotate-45 before:rounded-[5px] before:bg-[#37444b] before:content-['']",
          toggle
            ? 'h-[400px] w-[400px] delay-500 before:opacity-100 before:delay-500'
            : 'h-0 w-0 before:opacity-0'
        )}
      >
        <div
          className={classNames(
            'min-w-[400px] p-[40px] text-white duration-500',
            toggle ? 'scale-[1] opacity-100 delay-500' : 'scale-0 opacity-0 '
          )}
        >
          <h2 className="text-2xl">Heading...</h2>
          <p>가나다라마바사아자차카타파하하하하</p>
          <p>가나다라마바사아자차카타파하하하하</p>
          <p>가나다라마바사아자차카타파하하하하</p>
          <p>가나다라마바사아자차카타파하하하하</p>
          <p>가나다라마바사아자차카타파하하하하</p>
        </div>
        <div
          onClick={onClick}
          className={classNames(
            "absolute flex h-[60px] min-w-[60px] cursor-pointer items-center justify-center rounded-full duration-500 before:text-[2.5em]  before:text-white before:content-['+']",
            toggle
              ? '-bottom-[90px] rotate-[135deg] bg-[#ff5a57] '
              : '-bottom-[20px] bg-[#0bcf9c] '
          )}
        ></div>
      </div>
    </div>
  );
}
