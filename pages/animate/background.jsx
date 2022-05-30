import BgSpan from '../../components/animate/BgSpan';

export default function Bg() {
  return (
    <div className="relative top-[40px] h-[calc(100vh-80px)] w-full overflow-hidden bg-[#0c192c]">
      <div className="relative flex w-full">
        {new Array(50).fill(0).map((_, idx) => (
          <BgSpan key={idx} />
        ))}
      </div>
    </div>
  );
}
