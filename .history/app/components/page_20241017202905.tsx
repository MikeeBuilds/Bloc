"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { ModeToggle } from '@/components/mode-toggle';
import { Github } from 'lucide-react';

export default function ComponentsPage() {
  const [selectedTab, setSelectedTab] = useState('inputs');

  const renderInputs = () => (
    <div className="space-y-8">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Enter your password" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Type your message here" />
      </div>
    </div>
  );

  const renderSelects = () => (
    <div className="space-y-8">
      <div>
        <Label htmlFor="fruit">Select a fruit</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Choose your favorite color</Label>
        <RadioGroup defaultValue="red">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="red" id="red" />
            <Label htmlFor="red">Red</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blue" id="blue" />
            <Label htmlFor="blue">Blue</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="green" id="green" />
            <Label htmlFor="green">Green</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderToggles = () => (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div>
        <Label>Select your interests</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing">Receive marketing emails</Label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSliders = () => (
    <div className="space-y-8">
      <div>
        <Label htmlFor="volume">Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </div>
  );

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
        <h1 className="text-3xl font-bold mb-8">Component Showcase</h1>
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="selects">Selects</TabsTrigger>
            <TabsTrigger value="toggles">Toggles</TabsTrigger>
            <TabsTrigger value="sliders">Sliders</TabsTrigger>
          </TabsList>
          <Card>
            <CardHeader>
              <CardTitle>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</CardTitle>
              <CardDescription>Explore our collection of {selectedTab} components.</CardDescription>
            </CardHeader>
            <CardContent>
              <TabsContent value="inputs">{renderInputs()}</TabsContent>
              <TabsContent value="selects">{renderSelects()}</TabsContent>
              <TabsContent value="toggles">{renderToggles()}</TabsContent>
              <TabsContent value="sliders">{renderSliders()}</TabsContent>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </Tabs>
      </main>
    </div>
  );
}
