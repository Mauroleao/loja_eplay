declare module 'react-input-mask' {
  import React from 'react'

  interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string
    maskChar?: string | null
    beforeMaskedValueChange?: (
      newState: {
        value: string
        selection: { start: number; end: number } | null
      },
      oldState?: {
        value: string
        selection: { start: number; end: number } | null
      }
    ) => { value: string; selection: { start: number; end: number } | null }
    alwaysShowMask?: boolean
    children?: (props: InputMaskProps) => React.ReactElement
  }

  const InputMask: React.ForwardRefExoticComponent<
    InputMaskProps & React.RefAttributes<HTMLInputElement>
  >
  export default InputMask
}
