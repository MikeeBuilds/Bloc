"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import CopyButton from '@/components/copy-button';

interface ButtonComponentProps {
  children: React.ReactNode;
  code: string;
  title: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ children, code, title }) => (
  <div className="space-y-2 p-4 border rounded-md bg-background">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    {children}
    <CopyButton code={code} language="tsx" />
  </div>
);

export default function Buttons() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-grid">
      <ButtonComponent 
        title="Default Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function DefaultButton() {
  return <Button variant="default">Default</Button>;
}`}>
        <Button variant="default">Default</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Destructive Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function DestructiveButton() {
  return <Button variant="destructive">Destructive</Button>;
}`}>
        <Button variant="destructive">Destructive</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Outline Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function OutlineButton() {
  return <Button variant="outline">Outline</Button>;
}`}>
        <Button variant="outline">Outline</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Secondary Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function SecondaryButton() {
  return <Button variant="secondary">Secondary</Button>;
}`}>
        <Button variant="secondary">Secondary</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Ghost Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function GhostButton() {
  return <Button variant="ghost">Ghost</Button>;
}`}>
        <Button variant="ghost">Ghost</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Link Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function LinkButton() {
  return <Button variant="link">Link</Button>;
}`}>
        <Button variant="link">Link</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Large Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function LargeButton() {
  return <Button size="lg">Large</Button>;
}`}>
        <Button size="lg">Large</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Small Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function SmallButton() {
  return <Button size="sm">Small</Button>;
}`}>
        <Button size="sm">Small</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Disabled Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function DisabledButton() {
  return <Button disabled>Disabled</Button>;
}`}>
        <Button disabled>Disabled</Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Icon Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';

export default function IconButton() {
  return (
    <Button>
      <Copy className="mr-2 h-4 w-4" /> Icon
    </Button>
  );
}`}>
        <Button>
          <Copy className="mr-2 h-4 w-4" /> Icon
        </Button>
      </ButtonComponent>
    </div>
  );
}