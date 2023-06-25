'use client'

import Image from 'next/image'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

export function Header() {
  const [activeLink, setActiveLink] = useState('#inicio')

  return (
    <header className="fixed z-10 flex w-full bg-white px11 py-4 shadow-md">
      <div className="flex w-screen place-content-between items-center ">
        <Image
          src={logo}
          alt="Logo da agência de teletransporte"
          width={148}
          height={88}
          quality={10}
        />
        <div className="space-x-11 text-2.5xl text-gray-300 ">
          <a
            href="#inicio"
            className={`${
              activeLink === `#inicio` &&
              'border-b-2 border-pink-600 text-black'
            } `}
            onClick={() => setActiveLink('#inicio')}
          >
            Inicio
          </a>
          <a
            href="#sobre"
            className={`${
              activeLink === `#sobre` && 'border-b-2 border-pink-600 text-black'
            } `}
            onClick={() => setActiveLink('#sobre')}
          >
            Sobre
          </a>
          <a
            href="#serviços"
            className={`${
              activeLink === `#serviços` &&
              'border-b-2 border-pink-600 text-black'
            } `}
            onClick={() => setActiveLink('#serviços')}
          >
            Serviços
          </a>
          <a
            href="#preços"
            className={`${
              activeLink === `#preços` &&
              'border-b-2 border-pink-600 text-black'
            } `}
            onClick={() => setActiveLink('#preços')}
          >
            Preços
          </a>
          <a
            href="#contato"
            className={`${
              activeLink === `#contato` &&
              'border-b-2 border-pink-600 text-black'
            } `}
            onClick={() => setActiveLink('#contato')}
          >
            Contato
          </a>
        </div>
        <div className="text-2.5xl space-x-6">
          <button className=" text-gray-300 ">Login</button>
          <button className="bg-pink-600 px-9  py-4 text-white first-letter rounded-full hover:bg-pink-700">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}
