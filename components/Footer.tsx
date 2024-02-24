import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="center mt-5 flex flex-col items-center bg-[#c0c0c0] p-4 text-xs">
      <div className="mb-4">
        <Image src="/logo.png" alt="Logo" width={160} height={60} />
      </div>
      <p>Rua Juvina de Oliveira Monteiro, 461 - Altiplano Cabo Branco - João Pessoa/PB</p>
      <div className="flex mt-2 space-x-2">
        <a href="https://facebook.com/sua_pagina" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com/seu_perfil" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}

