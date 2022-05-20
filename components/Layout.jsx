import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#c7ecee]">
      <Header />
      {children}
    </div>
  );
}
