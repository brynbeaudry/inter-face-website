import { Link, MountainIcon, Sheet, MenuIcon } from 'lucide-react';
import React from 'react';
import { Button } from './button';
import { SheetTrigger, SheetContent } from './sheet';

export const Nav: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Inc</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link className="text-sm font-medium hover:underline" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col items-start gap-4 p-6">
                <Link className="flex items-center gap-2" href="#">
                  <MountainIcon className="h-6 w-6" />
                  <span className="text-lg font-bold">Acme Inc</span>
                </Link>
                <nav className="grid gap-2">
                  <Link className="text-sm font-medium hover:underline" href="#">
                    Features
                  </Link>
                  <Link className="text-sm font-medium hover:underline" href="#">
                    Pricing
                  </Link>
                  <Link className="text-sm font-medium hover:underline" href="#">
                    About
                  </Link>
                  <Link className="text-sm font-medium hover:underline" href="#">
                    Contact
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    );
};

export default Nav;
