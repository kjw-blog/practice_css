import classNames from 'classnames';
import { useEffect, useState } from 'react';
import List from '../components/focus_menu/List';

export default function Menu() {
  const [selected, setSelected] = useState('Home');

  const indicator = (e) => {
    setSelected(e.target.innerText);
  };

  const pick = {
    Home: 'top-[10px] w-[71px]',
    'About Us': 'top-[78px] w-[111px]',
    'Our Services': 'top-[146px] w-[156px]',
    Portfolio: 'top-[214px] w-[108px]',
    Team: 'top-[282px] w-[65px]',
    Contact: 'top-[350px] w-[97px]',
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#333]">
      <ul className="relative flex flex-col items-center justify-center">
        <span
          className={classNames(
            `fm_b fm_a absolute flex h-[50px] items-center justify-between duration-500`,
            pick[selected]
          )}
        ></span>
        <List text="Home" event={indicator} />
        <List text="About Us" event={indicator} />
        <List text="Our Services" event={indicator} />
        <List text="Portfolio" event={indicator} />
        <List text="Team" event={indicator} />
        <List text="Contact" event={indicator} />
      </ul>
    </div>
  );
}
