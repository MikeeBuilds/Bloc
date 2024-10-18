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
      {/* Previous button components remain unchanged */}
      
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