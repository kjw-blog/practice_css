import classNames from 'classnames';

export default function Option3D({ text, zi }) {
  const zindex = {
    1: 'z-[1]',
    2: 'z-[2]',
    3: 'z-[3]',
    4: 'z-[4]',
    5: 'z-[5]',
    6: 'z-[6]',
  };

  return (
    <li
      onClick={() => alert(text)}
      className={classNames(
        "group relative w-[200px] cursor-pointer list-none bg-[#3e3f46] p-[15px] duration-500 before:absolute before:top-0 before:-left-[40px] before:h-full before:w-[40px] before:origin-right before:skew-y-[45deg] before:bg-[#2e3133] before:transition-all  before:duration-500 before:content-[''] after:absolute after:-top-[40px] after:left-0 after:h-[40px] after:w-full after:origin-bottom after:skew-x-[45deg] after:bg-[#35383e] after:transition after:duration-500 after:content-[''] hover:-translate-x-[50px] hover:bg-purple-300 hover:before:bg-purple-500 hover:after:bg-purple-400",
        zindex[zi],
        zi === 1 &&
          'after:shadow-[-120px_120px_20px_rgba(0,0,0,0.25)] hover:after:shadow-[-70px_120px_20px_rgba(192,132,252,0.25)]'
      )}
    >
      <a
        href="#"
        className="block uppercase tracking-wider text-[#999] duration-500 group-hover:text-[#fff]"
      >
        {text}
      </a>
    </li>
  );
}
