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
        <h1 className="text-2xl font-bold">BlocUI</h1>
      </Link>
      <div className="flex items-center space-x-4">
  <div className="text-[#00FFFF] hover:text-[#40E0D0]">
    <Button variant="outline" size="icon" className="text-[#00FFFF] hover:text-[#40E0D0] hover:border-[#40E0D0]">
      <ModeToggle />
    </Button>
  </div>
  <a href="https://github.com/MikeeBuilds/Bloc" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="text-[#00FFFF] hover:text-[#40E0D0] hover:border-[#40E0D0]">
      <Github className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">GitHub</span>
    </Button>
  </a>
</div>
</div>
    </header>
  );
}