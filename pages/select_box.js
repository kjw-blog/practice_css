import { useState } from 'react';
import Option from '../components/select_box/Option';

export default function SelectBox() {
  const [lang, setLang] = useState('Select Language');

  // 옵션 리스트 보여지는 toggle
  const select = () => {
    const options_list = document.querySelector('.options-list');
    const downIcon = document.querySelector('.downIcon');

    options_list.classList.toggle('h-[180px]');
    downIcon.classList.toggle('rotate-180');
  };

  return (
    <div className="select-menu select-none w-[300px] cursor-pointer relative -mt-[200px]">
      <div
        onClick={select}
        className="select bg-[#201e1e] p-[20px] text-white font-bold rounded-[6px] flex items-center justify-between"
      >
        <span>{lang}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 downIcon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="options-list overflow-y-auto scrollbar-thin scrollbar-thumb-scroll-200 scrollbar-track-scroll-100 duration-500 ease-custom bg-[#f9f9f9] w-full mt-[14px] rounded-[6px] px-[20px] absolute h-0 max-h-[180px]">
        <Option
          language="English"
          lang={lang}
          setLang={setLang}
          select={select}
        />
        <Option
          language="Arabic"
          lang={lang}
          setLang={setLang}
          select={select}
        />
        <Option
          language="Hindi"
          lang={lang}
          setLang={setLang}
          select={select}
        />
        <Option
          language="Spanish"
          lang={lang}
          setLang={setLang}
          select={select}
        />
        <Option
          language="French"
          lang={lang}
          setLang={setLang}
          select={select}
        />
        <Option
          language="Japanese"
          lang={lang}
          setLang={setLang}
          select={select}
        />
        <Option
          language="Korean"
          lang={lang}
          setLang={setLang}
          select={select}
        />
      </div>
    </div>
  );
}
