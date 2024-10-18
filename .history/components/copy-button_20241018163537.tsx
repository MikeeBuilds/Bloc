import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  code: string;
  language?: string;
}

const CopyButton = ({ code, language = 'typescript', className, ...props }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{ margin: 0, padding: '1rem', borderRadius: '0.5rem' }}
      >
        {code}
      </SyntaxHighlighter>
      <Button
        size="icon"
        variant="ghost"
        className={cn(
          'absolute right-2 top-2 h-8 w-8 hover:bg-slate-700 hover:text-slate-100',
          className
        )}
        onClick={copyToClipboard}
        {...props}
      >
        {isCopied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

export default CopyButton;