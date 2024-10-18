declare module 'react-syntax-highlighter' {
    import { ComponentType } from 'react';
    import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
  
    export const Prism: ComponentType<SyntaxHighlighterProps>;
  }
  
  declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    export const tomorrow: { [key: string]: string | number };
  }