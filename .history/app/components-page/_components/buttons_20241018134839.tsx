import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import CopyButton from '@/components/copy-button';

const ButtonComponent: React.FC<{ children: React.ReactNode; code: string }> = ({ children, code }) => (
  <div className="space-y-2 p-4 border rounded-md bg-background">
    {children}
    <div className="mt-2 flex justify-end">
      <CopyButton code={code} />
    </div>
  </div>
);

export default function Buttons() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-grid">
      <ButtonComponent code={`<Button variant="default">Default</Button>`}>
        <Button variant="default">Default</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button variant="destructive">Destructive</Button>`}>
        <Button variant="destructive">Destructive</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button variant="outline">Outline</Button>`}>
        <Button variant="outline">Outline</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button variant="secondary">Secondary</Button>`}>
        <Button variant="secondary">Secondary</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button variant="ghost">Ghost</Button>`}>
        <Button variant="ghost">Ghost</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button variant="link">Link</Button>`}>
        <Button variant="link">Link</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button size="lg">Large</Button>`}>
        <Button size="lg">Large</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button size="sm">Small</Button>`}>
        <Button size="sm">Small</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button disabled>Disabled</Button>`}>
        <Button disabled>Disabled</Button>
      </ButtonComponent>

      <ButtonComponent code={`<Button>
  <Copy className="mr-2 h-4 w-4" /> Icon
</Button>`}>
        <Button>
          <Copy className="mr-2 h-4 w-4" /> Icon
        </Button>
      </ButtonComponent>
    </div>
  );
}