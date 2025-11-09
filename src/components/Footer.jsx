import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-neutral-400">© UMX INDIE – Founded by Om Lakhera</p>
          <p className="text-sm text-neutral-500">All rights reserved | Encrypted Creative Ecosystem</p>
        </div>
        <div className="mt-4 text-center sm:text-right text-xs text-neutral-500">
          <span>Instagram (optional) • Portfolio (coming soon)</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
