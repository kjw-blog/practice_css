import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { menus } from '../utils/menu';
import Option from './select_box/Option';

export default function Header() {
  const [page, setPage] = useState('홈');
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    const menu = menus.filter((menu) => menu.path === path)[0].kor;
    setPage(menu);
  }, [router]);

  const select = (value) => {
    setToggle((prev) => !prev);

    const menu = menus.filter((menu) => menu.kor === value)[0].path;
    router.push(menu);
  };

  return (
    <div className="flex items-center justify-center w-full fixed h-20 bg-black top-0">
      <div className="w-[300px]  cursor-pointer relative">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="w-full flex items-center p-2 justify-between bg-white font-bold"
        >
          <span className="text-[20px]">{page}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames('transition h-5 w-5', toggle && 'rotate-180')}
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
            'options-list overflow-y-auto scrollbar-thin scrollbar-thumb-scroll-200 scrollbar-track-scroll-100 duration-500 ease-custom bg-[#f9f9f9] w-[300px] mt-[14px] rounded-[6px] px-[20px] absolute max-h-[180px]',
            toggle ? 'h-[180px]' : 'h-0'
          )}
        >
          {menus.map((menu) => (
            <Option
              key={menu.path}
              value={menu.kor}
              now={page}
              setValue={setPage}
              select={select}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
