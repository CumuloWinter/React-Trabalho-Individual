import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Projeto Individual React</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/cadastro" className="hover:underline">Cadastro</Link>
        </div>
      </div>
    </nav>
  );
}