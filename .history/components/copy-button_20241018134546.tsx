import React from 'react';
import useClipboard from 'react-use-clipboard';

const CopyButton = ({ code }) => {
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