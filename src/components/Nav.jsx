import React from 'react';

const Nav = () => {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#network', label: 'Network' },
    { href: '#services', label: 'Services' },
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#future', label: 'Future' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
        <ul className="flex items-center gap-3 text-xs text-neutral-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1 hover:text-white hover:bg-white/10 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
