import React from 'react';
import useClipboard from 'react-use-clipboard';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  code: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [isCopied, setCopied] = useClipboard(code, {
    successDuration: 1000,
  });

  return (
    <Button variant="outline" size="sm" onClick={setCopied}>
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
};

export default CopyButton;