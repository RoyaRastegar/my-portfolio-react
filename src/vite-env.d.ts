/// <reference types="vite/client" />

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module 'react-anchor-link-smooth-scroll' {
  import { Component } from 'react';
  
  interface AnchorLinkProps {
    href: string;
    offset?: number | (() => number);
    onClick?: (e: MouseEvent) => void;
    className?: string;
    children?: React.ReactNode;
  }
  
  export default class AnchorLink extends Component<AnchorLinkProps> {}
}
