import Head from 'next/head';
import Option3D from '../components/select_box/Option3D';
import Seo from '../components/Seo';

export default function Select() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#434750]">
        <ul className="relative -skew-y-[15deg] select-none">
          <Option3D text="Home" zi={6} />
          <Option3D text="About" zi={5} />
          <Option3D text="Services" zi={4} />
          <Option3D text="Portfolio" zi={3} />
          <Option3D text="Our Team" zi={2} />
          <Option3D text="Contact" zi={1} />
        </ul>
      </div>
    </>
  );
}
