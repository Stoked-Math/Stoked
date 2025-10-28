import { useState } from "react";
import { Menu, X, TreePine } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-header border-b-4 border-black" style={{ fontFamily: "Lexend, sans-serif" }}>
      <div className="px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
        {/* Logo and tagline */}
        <div className="flex flex-col">
          <div className="flex items-center gap-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ffe5b59e02f4c40cf96d0aba6b703eda2%2F07c3f483213c4be4b126289dc0bc1df8?format=webp&width=800"
              alt="Integral"
              className="w-6 h-8 md:w-7 md:h-9 object-contain -mr-1 md:-mr-2"
            />
            <h1 className="text-lg md:text-2xl font-bold text-black">TOKED</h1>
          </div>
          <p className="text-xs md:text-sm text-black italic font-normal pl-6 md:pl-8 -mt-1" style={{ fontFamily: "'Cambria Math', serif" }}>
            about math
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-white/50 transition-colors flex items-center gap-2 whitespace-nowrap">
            Course Tree
            <TreePine className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-white/50 transition-colors flex items-center gap-2">
            About
            <Menu className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-white/50 transition-colors">
            Additional +
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border-2 border-black rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t-2 border-black bg-pink-header px-4 py-3 flex flex-col gap-2" style={{ fontFamily: "Lexend, sans-serif" }}>
          <button className="w-full px-4 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-white/50 transition-colors flex items-center gap-2 justify-center">
            Course Tree
            <TreePine className="w-4 h-4" />
          </button>
          <button className="w-full px-4 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-white/50 transition-colors flex items-center gap-2 justify-center">
            About
            <Menu className="w-4 h-4" />
          </button>
          <button className="w-full px-4 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-white/50 transition-colors">
            Additional +
          </button>
        </nav>
      )}
    </header>
  );
}
