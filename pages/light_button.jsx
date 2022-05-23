import Btn from '../components/light_button/Btn';

export default function Button() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-[50px] bg-[#27282c] ">
      <Btn text="blue" color="blue" />
      <Btn text="green" color="green" />
      <Btn text="pink" color="pink" />
      <Btn text="yellow" color="yellow" />
      <Btn text="purple" color="purple" />
    </div>
  );
}
