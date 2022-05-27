import BgSpan from '../../components/animate/BgSpan';

export default function Bg() {
  return (
    <div className="relative top-[80px] min-h-[100vh-80px] w-full overflow-hidden bg-[#0c192c]">
      <div className="relative flex h-screen w-full">
        <BgSpan />
        <BgSpan />
        <BgSpan />
      </div>
    </div>
  );
}
