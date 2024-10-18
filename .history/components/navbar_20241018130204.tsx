import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Github } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center mr-6">
          <Image 
            src="/bloc-logo.PNG" 
            alt="UI Components Logo" 
            width={150} 
            height={40} 
            className="h-10 w-auto mr-2"
          />
          <h1 className="text-2xl font-bold">BlocUI</h1>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link href="/docs" className="text-sm font-medium transition-colors hover:text-primary">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              asChild
            >
              <a href="https://github.com/MikeeBuilds/Bloc" target="_blank" rel="noopener noreferrer">
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}