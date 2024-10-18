"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import { ChevronUp, ChevronDown, Plus, Minus, Clock } from "lucide-react";

interface InputComponentProps {
  children: React.ReactNode;
  code: string;
  title: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  children,
  code,
  title,
}) => (
  <div className="space-y-2 p-4 border rounded-md bg-background">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    {children}
    <CopyButton code={code} language="tsx" />
  </div>
);

export default function Inputs() {
  const [numberValue, setNumberValue] = useState(0);
  const [chevronValue, setChevronValue] = useState(0);

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
}`}
      >
        <div className="space-y-2">
          <Label htmlFor="text" className="text-sm font-medium text-foreground">
            Text Input
          </Label>
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
}`}
      >
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email Input
          </Label>
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
}`}
      >
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-foreground"
          >
            Password Input
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
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
}`}
      >
        <div className="space-y-2">
          <Label
            htmlFor="number"
            className="text-sm font-medium text-foreground"
          >
            Number Input
          </Label>
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
}`}
      >
        <div className="space-y-2">
          <Label htmlFor="tel" className="text-sm font-medium text-foreground">
            Telephone Input
          </Label>
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
}`}
      >
        <div className="space-y-2">
          <Label htmlFor="url" className="text-sm font-medium text-foreground">
            URL Input
          </Label>
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
}`}
      >
        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm font-medium text-foreground">
            Date Input
          </Label>
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
}`}
      >
        <div className="space-y-2">
          <Label htmlFor="time" className="text-sm font-medium text-foreground">
            Time Input
          </Label>
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
}`}
      >
        <div className="space-y-2">
          <Label
            htmlFor="color"
            className="text-sm font-medium text-foreground"
          >
            Color Input
          </Label>
          <Input type="color" id="color" className="h-10 w-32 p-1" />
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
}`}
      >
        <div className="space-y-2">
          <Label htmlFor="file" className="text-sm font-medium text-foreground">
            File Input
          </Label>
          <Input type="file" id="file" />
        </div>
      </InputComponent>

      <InputComponent
        title="Number Input with Plus/Minus Buttons"
        code={`import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

export default function NumberInputWithButtons() {
  const [value, setValue] = useState(2048);

  return (
    <div className="space-y-2">
      <Label htmlFor="number-buttons" className="text-sm font-medium text-black dark:text-white">Number input with plus/minus buttons</Label>
      <div className="flex items-center rounded-md">
        <Button onClick={() => setValue(v => v - 1)} className="px-3 py-2 bg-transparent hover:bg-gray-700 text-gray-400">
          <Minus className="h-4 w-4" />
        </Button>
        <Input 
          type="number" 
          id="number-buttons" 
          value={value} 
          onChange={e => setValue(Number(e.target.value))} 
          className="text-center bg-transparent border-none text-white focus:ring-0"
        />
        <Button onClick={() => setValue(v => v + 1)} className="px-3 py-2 bg-transparent hover:bg-gray-700 text-gray-400">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-xs text-gray-400">Built with React Aria</p>
    </div>
  );
}`}
      >
        <div className="space-y-2">
          <Label
            htmlFor="number-buttons"
            className="text-sm font-medium text-black dark:text-white"
          >
            Number input with plus/minus buttons
          </Label>
          <div className="flex items-center rounded-md">
            <Button
              onClick={() => setNumberValue((v) => v - 1)}
              className="px-3 py-2 bg-transparent hover:bg-gray-700 text-gray-400"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              id="number-buttons"
              value={numberValue}
              onChange={(e) => setNumberValue(Number(e.target.value))}
              className="text-center bg-transparent border-none text-black dark:text-white focus:ring-0"
            />
            <Button
              onClick={() => setNumberValue((v) => v + 1)}
              className="px-3 py-2 bg-transparent hover:bg-gray-700 text-gray-400"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </InputComponent>

      <InputComponent
        title="Number Input with Chevron Buttons"
        code={`import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function NumberInputWithChevrons() {
  const [value, setValue] = useState(99.00);

  return (
    <div className="space-y-2">
      <Label htmlFor="number-chevrons" className="text-sm font-medium text-gray-200">Number input with chevrons</Label>
      <div className="flex items-center bg-gray-800 rounded-md">
        <Input 
          type="number" 
          id="number-chevrons" 
          value={value.toFixed(2)} 
          onChange={e => setValue(Number(e.target.value))} 
          className="text-left bg-transparent border-none text-white focus:ring-0 pl-3"
        />
        <div className="flex flex-col">
          <Button onClick={() => setValue(v => v + 1)} className="px-2 py-1 bg-transparent hover:bg-gray-700 text-gray-400">
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button onClick={() => setValue(v => v - 1)} className="px-2 py-1 bg-transparent hover:bg-gray-700 text-gray-400">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-xs text-gray-400">Built with React Aria</p>
    </div>
  );
}`}
      >
        <div className="space-y-2">
          <Label
            htmlFor="number-chevrons"
            className="text-sm font-medium text-gray-200"
          >
            Number input with chevrons
          </Label>
          <div className="flex items-center rounded-md">
            <Input
              type="number"
              id="number-chevrons"
              value={chevronValue.toFixed(2)}
              onChange={(e) => setChevronValue(Number(e.target.value))}
              className="text-left bg-transparent border-none text-black dark:text-white focus:ring-0 pl-3 "
            />
            <div className="flex flex-col">
              <Button
                onClick={() => setChevronValue((v) => v + 1)}
                className="px-2 py-1 bg-transparent hover:bg-gray-700 text-gray-400"
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setChevronValue((v) => v - 1)}
                className="px-2 py-1 bg-transparent hover:bg-gray-700 text-gray-400"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-400">Built with React Aria</p>
        </div>
      </InputComponent>

      <InputComponent
        title="Time Input with Icon"
        code={`import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";

export default function TimeInputWithIcon() {
  return (
    <div className="space-y-2">
      <Label htmlFor="time-icon" className="text-sm font-medium text-foreground">Time Input with Icon</Label>
      <div className="relative">
        <Input type="time" id="time-icon" />
        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}`}
      >
        <div className="space-y-2">
          <Label
            htmlFor="time-icon"
            className="text-sm font-medium text-foreground"
          >
            Time Input with Icon
          </Label>
          <div className="relative">
            <Input type="time" id="time-icon" />
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </InputComponent>
    </div>
  );
}
