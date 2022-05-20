import classNames from 'classnames';

export default function Option({ value, now, setValue, select }) {
  const onClick = () => {
    setValue(value);
    select(value);
  };

  return (
    <div
      className={classNames(
        'py-[8px] text-[18px] duration-300 font-bold ease-custom2 hover:text-[#00a8ff]',
        now === value && 'text-[#00a8ff]'
      )}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
