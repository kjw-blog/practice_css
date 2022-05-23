import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default function List({ children, selected, setSelected }) {
  const icon = children.props.name.split('-')[0];
  const [same, setSame] = useState(selected === icon);

  useEffect(() => {
    setSame(selected === icon);
  }, [selected, , setSelected, icon]);

  const colors = {
    home: `before:bg-[#f44336] ${same && 'bg-[#f44336]'}`,
    person: `before:bg-[#ffa117] ${same && 'bg-[#ffa117]'}`,
    chatbubble: `before:bg-[#0fc70f] ${same && 'bg-[#0fc70f]'}`,
    camera: `before:bg-[#2196f3] ${same && 'bg-[#2196f3]'}`,
    settings: `before:bg-[#b145e9] ${same && 'bg-[#b145e9]'}`,
  };
  return (
    <>
      {/* li는 ul의 1/5 크기 */}
      <li className="relative z-[2] h-[60px] w-[70px]">
        <a
          href="#"
          onClick={() => setSelected(icon)}
          className={classNames(
            'relative flex h-full w-full items-center justify-center'
          )}
        >
          <span
            className={classNames(
              'am_list_before relative block h-[55px] w-[55px] rounded-full text-center text-[1.5em] leading-[60px] delay-[0] duration-500',
              colors[icon],
              same
                ? 'am_list_active_before -translate-y-[27px] text-[#fff] delay-[250ms]'
                : 'text-[#222327]'
            )}
          >
            {children}
          </span>
        </a>
      </li>
    </>
  );
}
