import classNames from 'classnames';
import Script from 'next/script';
import { useState } from 'react';
import List from '../components/animate_menu/List';

export default function Menu() {
  const [selected, setSelected] = useState('home');

  const position = {
    home: ' translate-x-0',
    person: ' translate-x-[70px]',
    chatbubble: ' translate-x-[140px]',
    camera: ' translate-x-[210px]',
    settings: ' translate-x-[280px]',
  };

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-[#222327]">
        <div className="relative flex h-[60px] w-[400px] items-center justify-center rounded-xl bg-[#fff]">
          <ul className="flex w-[350px]">
            <List selected={selected} setSelected={setSelected}>
              <ion-icon name="home-outline"></ion-icon>
            </List>
            <List selected={selected} setSelected={setSelected}>
              <ion-icon name="person-outline"></ion-icon>
            </List>
            <List selected={selected} setSelected={setSelected}>
              <ion-icon name="chatbubble-outline"></ion-icon>
            </List>
            <List selected={selected} setSelected={setSelected}>
              <ion-icon name="camera-outline"></ion-icon>
            </List>
            <List selected={selected} setSelected={setSelected}>
              <ion-icon name="settings-outline"></ion-icon>
            </List>
            <div
              className={classNames(
                'am_indicator_b am_indicator_a absolute -top-[35px] z-[1] h-[70px] w-[70px] rounded-full bg-[#fff] duration-500',
                position[selected]
              )}
            />
          </ul>
        </div>
      </div>
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        type="module"
      ></Script>
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        noModule
      ></Script>
    </>
  );
}
