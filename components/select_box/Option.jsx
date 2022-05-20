import classNames from 'classnames';

export default function Option({ language, lang, setLang, select }) {
  const onClick = () => {
    setLang(language);
    select();
  };

  return (
    <div
      className={classNames(
        'py-[8px] text-[14px] duration-300 ease-custom2 hover:text-[#00a8ff]',
        lang === language && 'text-[#00a8ff]'
      )}
      onClick={onClick}
    >
      {language}
    </div>
  );
}
