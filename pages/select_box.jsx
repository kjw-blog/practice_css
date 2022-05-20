import classNames from 'classnames';
import { useState } from 'react';
import Option from '../components/select_box/Option';

export default function SelectBox() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState('Select Language');

  // 옵션 리스트 보여지는 toggle
  const select = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="select-menu select-none w-[300px] cursor-pointer relative -mt-[200px]">
      <div
        onClick={select}
        className="select bg-[#201e1e] p-[20px] text-white font-bold rounded-[6px] flex items-center justify-between"
      >
        <span className="text-[20px]">{lang}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classNames('h-5 w-5 transition', visible && 'rotate-180')}
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
      <div
        className={classNames(
          'options-list overflow-y-auto scrollbar-thin scrollbar-thumb-scroll-200 scrollbar-track-scroll-100 duration-500 ease-custom bg-[#f9f9f9] w-full mt-[14px] rounded-[6px] px-[20px] absolute max-h-[180px]',
          visible ? 'h-[180px]' : 'h-0'
        )}
      >
        <Option value="English" now={lang} setValue={setLang} select={select} />
        <Option value="Arabic" now={lang} setValue={setLang} select={select} />
        <Option value="Hindi" now={lang} setValue={setLang} select={select} />
        <Option value="Spanish" now={lang} setValue={setLang} select={select} />
        <Option value="French" now={lang} setValue={setLang} select={select} />
        <Option
          value="Japanese"
          now={lang}
          setValue={setLang}
          select={select}
        />
        <Option value="Korean" now={lang} setValue={setLang} select={select} />
      </div>
    </div>
  );
}
