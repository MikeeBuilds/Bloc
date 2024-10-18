import Link from "next/link";
import { Button } from "@/components/ui/button";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={100}
        width={100}
      />
      <div className="spotlight-wrapper z-10 relative flex-grow flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-16 pb-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Beautiful UI components built with Tailwind CSS and Next.js
            </h1>
            <p className="text-xl mb-8">
              An extensive collection of copy-and-paste components for quickly
              building app UIs. It&apos;s free, open-source, and ready to drop
              into your projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/components">Check out 50+ input components</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/docs">Read the docs</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
      <footer className="p-4 text-center z-10 relative">
        <p>A project by the team behind UI Components</p>
      </footer>
    </div>
  );
}
