import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Beautiful UI components built with Tailwind CSS and Next.js
          </h1>
          <p className="text-xl mb-8">
            An extensive collection of copy-and-paste components for quickly building app UIs. It&apos;s free, open-source, and ready to drop into your projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/components">
                Check out 50+ input components
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/docs">
                Read the docs
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="p-4 text-center">
        <p>A project by the team behind UI Components</p>
      </footer>
    </div>
  );
}