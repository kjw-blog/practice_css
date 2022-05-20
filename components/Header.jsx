import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Header() {
  const [page, setPage] = useState('');
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setPage(router.pathname);
  }, [router]);

  return (
    <div className="flex items-center justify-center w-full fixed h-20 bg-black top-0">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="w-[300px] flex items-center p-2 justify-between bg-white font-bold cursor-pointer"
      >
        {page === '/' ? 'test' : page.substring(1)}
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
    </div>
  );
}
