export function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center h-20 bg-white text-black">
        <a className="pl-4 pr-4 pt-7 pb-7" href="/">Home</a>
        <a className="pl-4 pr-4 pt-7 pb-7" href="/about">About</a>
        <a className="pl-4 pr-4 pt-7 pb-7" href="/contact">Contact</a>
      </div>
      <div className="flex justify-center items-center h-20 bg-blue-400 font-semibold text-white text-5xl">
        <h1>#Code9</h1>
      </div>
    </>
  );
}
