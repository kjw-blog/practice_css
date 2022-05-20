import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { menus } from '../utils/menu';
import Option from './select_box/Option';
import Seo from './Seo';

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
    <div className="fixed top-0 flex h-20 w-full items-center justify-center bg-black">
      <Seo title={page} />
      <div className="relative  w-[300px] cursor-pointer">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="flex w-full items-center justify-between bg-white p-2 font-bold"
        >
          <span className="text-[20px]">{page}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames('h-5 w-5 transition', toggle && 'rotate-180')}
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
            'options-list absolute mt-[14px] max-h-[180px] w-[300px] overflow-y-auto rounded-[6px] bg-[#f9f9f9] px-[20px] duration-500 ease-custom scrollbar-thin scrollbar-track-scroll-100 scrollbar-thumb-scroll-200',
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
