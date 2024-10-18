import React from 'react';
import useClipboard from 'react-use-clipboard';

interface CopyButtonProps {
  code: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [isCopied, setCopied] = useClipboard(code, {
    successDuration: 1000,
  });

  return (
    <button onClick={setCopied}>
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyButton;