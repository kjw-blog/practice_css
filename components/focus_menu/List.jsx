export default function List({ text, event }) {
  return (
    <li>
      <a
        href="#"
        onMouseMove={event}
        className="relative my-[10px] inline-block text-[2em] text-[#fff]"
      >
        {text}
      </a>
    </li>
  );
}
