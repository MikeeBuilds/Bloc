import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import CopyButton from '@/components/copy-button';

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
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function TextInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="text">Text Input</Label>
      <Input type="text" id="text" placeholder="Enter text" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="text">Text Input</Label>
          <Input type="text" id="text" placeholder="Enter text" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Email Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function EmailInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email Input</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="email">Email Input</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Password Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function PasswordInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="password">Password Input</Label>
      <Input type="password" id="password" placeholder="Enter your password" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="password">Password Input</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Number Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function NumberInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="number">Number Input</Label>
      <Input type="number" id="number" placeholder="Enter a number" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="number">Number Input</Label>
          <Input type="number" id="number" placeholder="Enter a number" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Telephone Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function TelephoneInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="tel">Telephone Input</Label>
      <Input type="tel" id="tel" placeholder="Enter your phone number" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="tel">Telephone Input</Label>
          <Input type="tel" id="tel" placeholder="Enter your phone number" />
        </div>
      </InputComponent>

      <InputComponent 
        title="URL Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function URLInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="url">URL Input</Label>
      <Input type="url" id="url" placeholder="Enter a URL" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="url">URL Input</Label>
          <Input type="url" id="url" placeholder="Enter a URL" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Date Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function DateInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="date">Date Input</Label>
      <Input type="date" id="date" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="date">Date Input</Label>
          <Input type="date" id="date" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Time Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function TimeInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="time">Time Input</Label>
      <Input type="time" id="time" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="time">Time Input</Label>
          <Input type="time" id="time" />
        </div>
      </InputComponent>

      <InputComponent 
        title="Color Input"
        code={`import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function ColorInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="color">Color Input</Label>
      <Input type="color" id="color" />
    </div>
  );
}`}>
        <div className="space-y-2">
          <Label htmlFor="color">Color Input</Label>
          <Input type="