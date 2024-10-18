"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Github } from 'lucide-react';

export default function ComponentsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">UI Components</Link>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
        </div>
      </header>
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  );
}