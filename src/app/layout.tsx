'use client';

import './globals.css'
import { AddressBar } from '@/components/address-bar';
import Byline from '@/app/ui/byline'
import { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'Next.js App Router',
    template: '%s | Next.js App Router',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        {/* <GlobalNav />
        <div className="mt-4 flex h-14 items-center px-4 py-4 lg:h-auto">
          <Link
            href="/"
            className="group flex w-full items-center gap-x-2.5"
            onClick={close}
          >
            <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            </div>
            <div className="grid">
              <h4 className="mx-2 mt-2 font-medium text-indigo-400 dark:text-gray-200 sm:ml-4">
                Toheeb Olawale RAJI
              </h4>
              <p className="mx-2 mt-2 pl-4 text-sm font-medium text-gray-300 dark:text-gray-400">
                Front End Developer
              </p>
            </div>
          </Link>
        </div> */}

        {/* <div className="lg:pl-2">
          <div className="mx-auto max-w-8xl space-y-8 px-2 pt-6 lg:px-8 lg:py-8">
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div> */}

            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            {/* <Byline className="fixed" /> */}
      </body>
    </html>
  );
}
