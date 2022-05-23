import classNames from 'classnames';

export default function Btn({ text, color }) {
  const colors = {
    blue: 'hover:bg-[#1e9bff] hover:shadow-[0_0_35px_var(#1e9bff)] hover:shadow-[#1e9bff] hover:text-[#1e9bff]',
    green:
      'hover:bg-[#6eff3e] hover:shadow-[0_0_35px_var(#6eff3e)] hover:shadow-[#6eff3e] hover:text-[#6eff3e]',
    pink: 'hover:bg-[#ff1867] hover:shadow-[0_0_35px_var(#ff1867)] hover:shadow-[#ff1867] hover:text-[#ff1867]',
    yellow:
      'hover:bg-[#FFFF24] hover:shadow-[0_0_35px_var(#FFFF24)] hover:shadow-[#FFFF24] hover:text-[#FFFF24]',
    purple:
      'hover:bg-[#A566FF] hover:shadow-[0_0_35px_var(#A566FF)] hover:shadow-[#A566FF] hover:text-[#A566FF]',
  };

  return (
    <a
      href="#"
      className={classNames(
        'group relative min-w-[150px]  rounded-md bg-[#fff] p-[10px_30px] text-center text-[1.5em] uppercase tracking-widest text-[#fff] duration-500 after:absolute after:inset-[2px] after:rounded-md after:bg-[#27282c] after:content-[""] hover:tracking-[0.25em] ',
        colors[color]
      )}
    >
      <span className="relative z-[1]">{text}</span>
      <i className="button-before button-after absolute inset-0 block"></i>
    </a>
  );
}
