import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="relative bg-[#c7ecee] w-full h-screen flex justify-center items-center">
      <Header />
      {children}
    </div>
  );
}
