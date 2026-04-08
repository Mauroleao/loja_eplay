declare module 'react-router-hash-link' {
  import React from 'react'

  export interface HashLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string
    smooth?: boolean
  }

  export const HashLink: React.ForwardRefExoticComponent<
    HashLinkProps & React.RefAttributes<HTMLAnchorElement>
  >
}
