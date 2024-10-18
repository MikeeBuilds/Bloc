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
  return (
    <Button 
      className="bg-primary text-primary-foreground hover:bg-primary/90"
      variant="default"
    >
      Default
    </Button>
  );
}`}>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          variant="default"
        >
          Default
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Destructive Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function DestructiveButton() {
  return (
    <Button 
      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
      variant="destructive"
    >
      Destructive
    </Button>
  );
}`}>
        <Button 
          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          variant="destructive"
        >
          Destructive
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Outline Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function OutlineButton() {
  return (
    <Button 
      className="border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      variant="outline"
    >
      Outline
    </Button>
  );
}`}>
        <Button 
          className="border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          variant="outline"
        >
          Outline
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Secondary Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function SecondaryButton() {
  return (
    <Button 
      className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
      variant="secondary"
    >
      Secondary
    </Button>
  );
}`}>
        <Button 
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
          variant="secondary"
        >
          Secondary
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Ghost Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function GhostButton() {
  return (
    <Button 
      className="hover:bg-accent hover:text-accent-foreground"
      variant="ghost"
    >
      Ghost
    </Button>
  );
}`}>
        <Button 
          className="hover:bg-accent hover:text-accent-foreground"
          variant="ghost"
        >
          Ghost
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Link Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function LinkButton() {
  return (
    <Button 
      className="text-primary underline-offset-4 hover:underline"
      variant="link"
    >
      Link
    </Button>
  );
}`}>
        <Button 
          className="text-primary underline-offset-4 hover:underline"
          variant="link"
        >
          Link
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Large Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function LargeButton() {
  return (
    <Button 
      className="h-11 rounded-md px-8"
      size="lg"
    >
      Large
    </Button>
  );
}`}>
        <Button 
          className="h-11 rounded-md px-8"
          size="lg"
        >
          Large
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Small Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function SmallButton() {
  return (
    <Button 
      className="h-9 rounded-md px-3"
      size="sm"
    >
      Small
    </Button>
  );
}`}>
        <Button 
          className="h-9 rounded-md px-3"
          size="sm"
        >
          Small
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Disabled Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";

export default function DisabledButton() {
  return (
    <Button 
      className="pointer-events-none opacity-50"
      disabled
    >
      Disabled
    </Button>
  );
}`}>
        <Button 
          className="pointer-events-none opacity-50"
          disabled
        >
          Disabled
        </Button>
      </ButtonComponent>

      <ButtonComponent 
        title="Icon Button"
        code={`import React from 'react';
import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';

export default function IconButton() {
  return (
    <Button className="inline-flex items-center justify-center">
      <Copy className="mr-2 h-4 w-4" /> Icon
    </Button>
  );
}`}>
        <Button className="inline-flex items-center justify-center">
          <Bolt className="mr-2 h-4 w-4" /> Icon
        </Button>
      </ButtonComponent>
    </div>
  );
}