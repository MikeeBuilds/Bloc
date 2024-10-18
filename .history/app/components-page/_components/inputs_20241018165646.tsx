"use client";

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import CopyButton from '@/components/copy-button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface InputComponentProps {
  children: React.ReactNode;
  code: string;
  title: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ children, code, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2 p-4 border rounded-md bg-background">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {children}
      <div className="flex items-center justify-between mt-2">
        <CopyButton code={code} language="tsx" />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm text-blue-500 hover:text-blue-700"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={20} />
              <span className="ml-1">Hide Code</span>
            </>
          ) : (
            <>
              <ChevronDown size={20} />
              <span className="ml-1">Show Code</span>
            </>
          )}
        </button>
      </div>
      {isExpanded && (
        <pre className="mt-2 p-2 bg-gray-100 rounded-md overflow-x-auto">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

export default function Inputs() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-grid">
      <InputComponent 
        title="Text Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TextInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="text" className="text-sm font-medium text-foreground">Text Input</Label>
      <Input type="text" id="text" placeholder="Enter text" />
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
import { Input } from "@/components/ui/input";

export default function EmailInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Input</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
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
import { Input } from "@/components/ui/input";

export default function PasswordInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="password" className="text-sm font-medium text-foreground">Password Input</Label>
      <Input type="password" id="password" placeholder="Enter your password" />
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
import { Input } from "@/components/ui/input";

export default function NumberInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="number" className="text-sm font-medium text-foreground">Number Input</Label>
      <Input type="number" id="number" placeholder="Enter a number" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="number" className="text-sm font-medium text-foreground">Number Input</Label>
          <Input type="number" id="number" placeholder="Enter a number" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Telephone Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TelephoneInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="tel" className="text-sm font-medium text-foreground">Telephone Input</Label>
      <Input type="tel" id="tel" placeholder="Enter your phone number" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="tel" className="text-sm font-medium text-foreground">Telephone Input</Label>
          <Input type="tel" id="tel" placeholder="Enter your phone number" />
        </div>
      </InputComponent>

      <InputComponent 
        title="URL Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function URLInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="url" className="text-sm font-medium text-foreground">URL Input</Label>
      <Input type="url" id="url" placeholder="Enter a URL" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="url" className="text-sm font-medium text-foreground">URL Input</Label>
          <Input type="url" id="url" placeholder="Enter a URL" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Date Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function DateInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="date" className="text-sm font-medium text-foreground">Date Input</Label>
      <Input type="date" id="date" />
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
import { Input } from "@/components/ui/input";

export default function TimeInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="time" className="text-sm font-medium text-foreground">Time Input</Label>
      <Input type="time" id="time" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="time" className="text-sm font-medium text-foreground">Time Input</Label>
          <Input type="time" id="time" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Color Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ColorInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="color" className="text-sm font-medium text-foreground">Color Input</Label>
      <Input type="color" id="color" className="h-10 w-10 p-1" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="color" className="text-sm font-medium text-foreground">Color Input</Label>
          <Input type="color" id="color" className="h-10 w-10 p-1" />
        </div>
      </InputComponent>

      <InputComponent 
        title="File Input"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FileInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="file" className="text-sm font-medium text-foreground">File Input</Label>
      <Input type="file" id="file" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="file" className="text-sm font-medium text-foreground">File Input</Label>
          <Input type="file" id="file" />
        </div>
      </InputComponent>
    </div>
  );
}