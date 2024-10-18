"use client";

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import CopyButton from '@/components/copy-button';
import { cn } from "@/lib/utils";

const InputComponent: React.FC<{ children: React.ReactNode; code: string; title: string }> = ({ children, code, title }) => (
  <div className="space-y-2 p-4 border rounded-md bg-background">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    {children}
    <div className="mt-2 flex justify-end">
      <CopyButton code={code} />
    </div>
  </div>
);

export default function Inputs() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-grid">
      <InputComponent 
        title="Text Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function TextInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="text" className="text-sm font-medium text-foreground">Text Input</Label>
      <input
        type="text"
        id="text"
        placeholder="Enter text"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="text" className="text-sm font-medium text-foreground">Text Input</Label>
          <Input type="text" id="text" placeholder="Enter text" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Email Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function EmailInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Input</Label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Input</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Password Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function PasswordInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="password" className="text-sm font-medium text-foreground">Password Input</Label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-foreground">Password Input</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Number Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function NumberInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="number" className="text-sm font-medium text-foreground">Number Input</Label>
      <input
        type="number"
        id="number"
        placeholder="Enter a number"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="number" className="text-sm font-medium text-foreground">Number Input</Label>
          <Input type="number" id="number" placeholder="Enter a number" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Date Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function DateInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="date" className="text-sm font-medium text-foreground">Date Input</Label>
      <input
        type="date"
        id="date"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm font-medium text-foreground">Date Input</Label>
          <Input type="date" id="date" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Time Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function TimeInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="time" className="text-sm font-medium text-foreground">Time Input</Label>
      <input
        type="time"
        id="time"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="time" className="text-sm font-medium text-foreground">Time Input</Label>
          <Input type="time" id="time" />
        </div>
      </InputComponent>

      <InputComponent 
        title="File Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function FileInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="file" className="text-sm font-medium text-foreground">File Input</Label>
      <input
        type="file"
        id="file"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="file" className="text-sm font-medium text-foreground">File Input</Label>
          <Input type="file" id="file" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Color Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function ColorInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="color" className="text-sm font-medium text-foreground">Color Input</Label>
      <input
        type="color"
        id="color"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="color" className="text-sm font-medium text-foreground">Color Input</Label>
          <Input type="color" id="color" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Range Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function RangeInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="range" className="text-sm font-medium text-foreground">Range Input</Label>
      <input
        type="range"
        id="range"
        min="0"
        max="100"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="range" className="text-sm font-medium text-foreground">Range Input</Label>
          <Input type="range" id="range" min="0" max="100" />
        </div>
      </InputComponent>
    </div>
  );
}