import Btn from '../components/light_button/Btn';

export default function Button() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-[50px] bg-[#27282c] ">
      <Btn color="blue" />
      <Btn color="green" />
      <Btn color="pink" />
    </div>
  );
}
