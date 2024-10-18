import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleCopy}>
      {copied ? 'Copied!' : <Copy className="h-4 w-4" />}
    </Button>
  );
};

const InputComponent: React.FC<{ children: React.ReactNode; code: string }> = ({ children, code }) => (
  <div className="space-y-2 p-4 border rounded-md bg-background">
    {children}
    <div className="mt-2 flex justify-end">
      <CopyButton code={code} />
    </div>
  </div>
);

export default function Inputs() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-grid">
      <InputComponent code={`<div>
  <Label htmlFor="text">Text Input</Label>
  <Input type="text" id="text" placeholder="Enter text" />
</div>`}>
        <div>
          <Label htmlFor="text">Text Input</Label>
          <Input type="text" id="text" placeholder="Enter text" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="email">Email Input</Label>
  <Input type="email" id="email" placeholder="Enter your email" />
</div>`}>
        <div>
          <Label htmlFor="email">Email Input</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="password">Password Input</Label>
  <Input type="password" id="password" placeholder="Enter your password" />
</div>`}>
        <div>
          <Label htmlFor="password">Password Input</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="number">Number Input</Label>
  <Input type="number" id="number" placeholder="Enter a number" />
</div>`}>
        <div>
          <Label htmlFor="number">Number Input</Label>
          <Input type="number" id="number" placeholder="Enter a number" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="tel">Telephone Input</Label>
  <Input type="tel" id="tel" placeholder="Enter your phone number" />
</div>`}>
        <div>
          <Label htmlFor="tel">Telephone Input</Label>
          <Input type="tel" id="tel" placeholder="Enter your phone number" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="url">URL Input</Label>
  <Input type="url" id="url" placeholder="Enter a URL" />
</div>`}>
        <div>
          <Label htmlFor="url">URL Input</Label>
          <Input type="url" id="url" placeholder="Enter a URL" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="date">Date Input</Label>
  <Input type="date" id="date" />
</div>`}>
        <div>
          <Label htmlFor="date">Date Input</Label>
          <Input type="date" id="date" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="time">Time Input</Label>
  <Input type="time" id="time" />
</div>`}>
        <div>
          <Label htmlFor="time">Time Input</Label>
          <Input type="time" id="time" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="color">Color Input</Label>
  <Input type="color" id="color" />
</div>`}>
        <div>
          <Label htmlFor="color">Color Input</Label>
          <Input type="color" id="color" />
        </div>
      </InputComponent>

      <InputComponent code={`<div>
  <Label htmlFor="file">File Input</Label>
  <Input type="file" id="file" />
</div>`}>
        <div>
          <Label htmlFor="file">File Input</Label>
          <Input type="file" id="file" />
        </div>
      </InputComponent>
    </div>
  );
}