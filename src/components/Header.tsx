import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import logoHeader from "@/assets/logo-header.png";
const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Marcas", href: "/marcas" },
  { name: "Blog", href: "/blog" },
  { name: "Legal", href: "/legal" },
  { name: "Contacto", href: "/contacto" },
];

interface HeaderProps {
  rightContent?: React.ReactNode;
}

const Header = ({ rightContent }: HeaderProps = {}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link to="/" className="flex-shrink-0">
            <img src={logoHeader} alt="TecnoActual" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navigation.map((item) => {
              if (item.name === "Marcas") {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-semibold transition-colors outline-none ${isActive("/marcas") || isActive("/sketchup-planes") || isActive("/solidworks") || isActive("/bricscad") ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}>
                      {item.name} <ChevronDown size={14} className="opacity-50" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48 p-2">
                      <DropdownMenuItem asChild>
                        <Link to="/marcas" className="w-full cursor-pointer">Ver todas las marcas</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/sketchup-planes" className="w-full cursor-pointer">SketchUp</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solidworks" className="w-full cursor-pointer">SolidWorks</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/bricscad" className="w-full cursor-pointer">BricsCAD</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold transition-colors ${isActive(item.href) ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Content Injection or Default */}
        <div className="flex items-center gap-4 md:gap-6">
          {rightContent}

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-3 px-4 rounded-lg font-medium transition-colors ${isActive(item.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Extra mobile links for the dropdown items */}
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 ml-4">
                <Link to="/sketchup-planes" className="py-2 text-sm font-medium text-slate-500 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  SketchUp
                </Link>
                <Link to="/solidworks" className="py-2 text-sm font-medium text-slate-500 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  SolidWorks
                </Link>
                <Link to="/bricscad" className="py-2 text-sm font-medium text-slate-500 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  BricsCAD
                </Link>
              </div>

              {!rightContent && (
                <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700 text-white mt-2">
                  <Link to="/marcas" onClick={() => setMobileMenuOpen(false)}>
                    Ver Soluciones
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
