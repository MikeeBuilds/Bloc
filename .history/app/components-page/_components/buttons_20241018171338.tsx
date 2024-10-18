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
      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function DefaultButton() {
  return <Button variant="default">Default</Button>;
}`}>
        <Button variant="default">Default</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function DestructiveButton() {
  return <Button variant="destructive">Destructive</Button>;
}`}>
        <Button variant="destructive">Destructive</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function OutlineButton() {
  return <Button variant="outline">Outline</Button>;
}`}>
        <Button variant="outline">Outline</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function SecondaryButton() {
  return <Button variant="secondary">Secondary</Button>;
}`}>
        <Button variant="secondary">Secondary</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function GhostButton() {
  return <Button variant="ghost">Ghost</Button>;
}`}>
        <Button variant="ghost">Ghost</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function LinkButton() {
  return <Button variant="link">Link</Button>;
}`}>
        <Button variant="link">Link</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function LargeButton() {
  return <Button size="lg">Large</Button>;
}`}>
        <Button size="lg">Large</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function SmallButton() {
  return <Button size="sm">Small</Button>;
}`}>
        <Button size="sm">Small</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function DisabledButton() {
  return <Button disabled>Disabled</Button>;
}`}>
        <Button disabled>Disabled</Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';
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