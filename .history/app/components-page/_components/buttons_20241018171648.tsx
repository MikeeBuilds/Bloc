import React from 'react';
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import CopyButton from '@/components/copy-button';

interface ButtonProps extends ShadcnButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ShadcnButton {...props}>{children}</ShadcnButton>
);

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
  return (
    <Button 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      variant="default"
    >
      Default
    </Button>
  );
}`}>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          variant="default"
        >
          Default
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function DestructiveButton() {
  return (
    <Button 
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      variant="destructive"
    >
      Destructive
    </Button>
  );
}`}>
        <Button 
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          variant="destructive"
        >
          Destructive
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function OutlineButton() {
  return (
    <Button 
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      variant="outline"
    >
      Outline
    </Button>
  );
}`}>
        <Button 
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          variant="outline"
        >
          Outline
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function SecondaryButton() {
  return (
    <Button 
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      variant="secondary"
    >
      Secondary
    </Button>
  );
}`}>
        <Button 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          variant="secondary"
        >
          Secondary
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function GhostButton() {
  return (
    <Button 
      className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      variant="ghost"
    >
      Ghost
    </Button>
  );
}`}>
        <Button 
          className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          variant="ghost"
        >
          Ghost
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function LinkButton() {
  return (
    <Button 
      className="bg-transparent text-blue-700 font-semibold hover:text-blue-800 py-2 px-4"
      variant="link"
    >
      Link
    </Button>
  );
}`}>
        <Button 
          className="bg-transparent text-blue-700 font-semibold hover:text-blue-800 py-2 px-4"
          variant="link"
        >
          Link
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function LargeButton() {
  return (
    <Button 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
      size="lg"
    >
      Large
    </Button>
  );
}`}>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
          size="lg"
        >
          Large
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function SmallButton() {
  return (
    <Button 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-xs"
      size="sm"
    >
      Small
    </Button>
  );
}`}>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-xs"
          size="sm"
        >
          Small
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';

export default function DisabledButton() {
  return (
    <Button 
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
      disabled
    >
      Disabled
    </Button>
  );
}`}>
        <Button 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
          disabled
        >
          Disabled
        </Button>
      </ButtonComponent>

      <ButtonComponent code={`import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

export default function IconButton() {
  return (
    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
      <Copy className="mr-2 h-4 w-4" />
      <span>Icon</span>
    </Button>
  );
}`}>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Copy className="mr-2 h-4 w-4" />
          <span>Icon</span>
        </Button>
      </ButtonComponent>
    </div>
  );
}