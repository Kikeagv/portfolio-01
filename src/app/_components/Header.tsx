import Link from "next/link";

export function Header() {
  const navItems = [
    { name: "The atoms", href: "/" },
    { name: "The projects", href: "/projects" },
    { name: "The human", href: "/human" },
    { name: "The music", href: "/music" },
    { name: "The contact", href: "/contact" },
  ];

  return (
    <header className="bg-black text-white text-base flex flex-col p-4 md:p-8 rounded-lg">
      {/* Top section: Title and Design Box */}
      <div className="md:mb-8">
        <h1 className="text-4xl md:text-6xl font-light">
          Hello I&apos;m <br className="md:hidden" /> Enrique García <br className="md:hidden" /> and I
        </h1>
        <div className="inline-block bg-white text-black px-4 py-2 rounded-lg">
          <span className="text-4xl md:text-6xl font-light">design things</span>
          {/* Placeholder for future content */}
        </div>
      </div>

      {/* Navigation Links - Replaced mt-auto with mt-6 for mobile */}
      <nav className="mt-6 md:mt-2">
        {/* Mobile Layout: Changed to 2 columns, added animations */}
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.name}>
              {/* Added group, relative, overflow-hidden, py-1 and removed hover:underline */}
              <Link
                href={item.href}
                className="group relative flex items-center gap-1 text-sm py-1 overflow-hidden"
              >
                {/* Added animation classes to arrow span */}
                <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-[-45deg]">
                  →
                </span>
                <span>{item.name}</span>
                {/* Added underline span */}
                <span
                  className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Layout: Single row with animations */}
        <ul className="hidden md:flex md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group relative flex items-center gap-2 text-lg py-1 overflow-hidden"
              >
                <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-[-45deg]">
                  →
                </span>
                <span>{item.name}</span>
                <span
                  className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 