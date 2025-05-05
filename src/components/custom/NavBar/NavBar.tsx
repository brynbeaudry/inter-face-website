'use client';

import React, { useRef } from 'react';
import classes from './NavBar.module.css';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import Link from "next/link"
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export default function NavBar() {
  return (
    <nav className="w-full z-50 bg-background/50 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-lg mx-auto px-2 h-6 flex items-center justify-end">
        <div className="flex gap-6">
          <Link href="#about" className="text-sm hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="#artists" className="text-sm hover:opacity-80 transition-opacity">
            Artists
          </Link>
        </div>
      </div>
    </nav>
  );
}

function MenuIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function TendeqIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 578.000000 653.000000"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        transform="translate(0.000000,653.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M2851 6459 c-14 -5 -54 -34 -90 -63 -36 -29 -169 -131 -296 -226 -126 -96 -293 -222 -370 -280 -211 -161 -497 -377 -822 -621 l-291 -220 -419 -5 c-254 -3 -429 -9 -445 -15 -60 -24 -58 0 -58 -883 l0 -806 29 -32 29 -33 656 -3 656 -2 0 -1566 c0 -1330 2 -1570 14 -1599 29 -70 -75 -65 1451 -65 1512 0 1417 -4 1450 60 13 26 15 215 15 1599 l0 1571 655 2 655 3 27 28 28 27 3 808 c2 592 -1 814 -9 835 -7 15 -23 37 -37 47 -24 19 -42 20 -436 20 l-412 0 -52 33 c-29 17 -222 160 -429 317 -966 730 -1391 1048 -1420 1064 -36 18 -48 19 -82 5z m410 -755 c195 -147 455 -344 579 -438 283 -213 279 -210 279 -218 1 -4 -549 -7 -1221 -7 l-1223 0 45 41 c42 37 174 139 614 473 265 202 425 325 491 377 33 26 65 46 71 44 6 -2 170 -125 365 -272z m2061 -1176 c2 -62 5 -281 6 -485 l2 -373 -484 0 -484 0 -4 124 c-3 116 -5 126 -27 150 -14 14 -41 30 -60 36 -50 14 -824 13 -874 -1 -26 -7 -44 -21 -57 -42 -20 -31 -20 -66 -20 -1764 l0 -1733 -425 0 -425 0 -1 1708 c0 1269 -4 1718 -12 1751 -8 28 -22 52 -40 65 -28 21 -38 21 -466 21 -356 0 -443 -3 -464 -14 -44 -24 -57 -66 -57 -190 l0 -111 -485 0 -485 0 0 485 0 485 2429 0 2430 0 3 -112z m-3242 -2508 c0 -1249 -3 -1570 -12 -1570 -7 0 -66 -3 -130 -7 l-118 -6 0 1577 0 1576 130 0 130 0 0 -1570z m1882 0 l3 -1570 -112 0 c-61 0 -118 -3 -127 -6 -15 -6 -16 137 -16 1570 l0 1576 125 0 125 0 2 -1570z"/>
      </g>
    </svg>
  );
}
