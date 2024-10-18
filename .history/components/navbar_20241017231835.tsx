import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Github } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <Image 
          src="/bloc-logo.PNG" 
          alt="UI Components Logo" 
          width={150} 
          height={40} 
          className="h-10 w-auto"
        />
      </Link>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <a href="https://github.com/MikeeBuilds/Bloc" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <Github className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">GitHub</span>
          </Button>
        </a>
      </div>
    </header>
  );
}