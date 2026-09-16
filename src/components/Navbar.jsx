import { cn } from "@/lib/util.js";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Haydar</span> Portfolio
          </span>
        </a>

        <div className="hidden md:flex  space-x-10">
          {navItems.map((item, key) => {
            return (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-color duration-300"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
