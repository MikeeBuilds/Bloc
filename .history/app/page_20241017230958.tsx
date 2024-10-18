import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={6}
        gridGap={4}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.05}
        width={1920}
        height={1080}
      />
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-">
            Beautiful UI components built with Tailwind CSS and Next.js
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            An extensive collection of copy-and-paste components for quickly building app UIs. It&#39;s free, open-source, and ready to drop into your projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="/components-page">
                Check out 50+ input components
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/docs">
                Read the docs
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <footer className="relative z-10 p-4 text-center text-gray-400">
        <p>A project by the team behind UI Components</p>
      </footer>
    </div>
  );
}