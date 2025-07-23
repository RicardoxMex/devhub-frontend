import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed grid grid-cols-[auto_1fr_auto] gap-x-main-x items-center h-[60px] bg-dark-secondary w-full overflow-hidden px-main-x">
      <div className="hover:brightness-125 transition">
        <Link to="/" className="w-fit hover:scale-105 transition">
          <img src="/vite.svg" alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>
      <input className="max-h-[calc(100%-25px)] max-w-[600px] mx-auto size-full px-2.5 bg-zinc-800 rounded-lg outline-none font-medium"></input>
      <div className="flex justify-end hover:brightness-125 transition">
        <Link to="/user" className="w-fit hover:scale-105 transition">
          <img src="/vite.svg" alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>
    </header>
  );
}
