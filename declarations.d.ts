declare module 'react-syntax-highlighter' {
  import { ComponentType } from 'react';

  export const Prism: ComponentType<{
    language: string;
    style: { [key: string]: string | number };
    customStyle?: React.CSSProperties;
    children: string;
  }>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const tomorrow: { [key: string]: string | number };
}