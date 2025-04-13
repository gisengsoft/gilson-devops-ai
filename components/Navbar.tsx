
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between">
        <div className="font-bold text-lg">Gilson DevOps</div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
