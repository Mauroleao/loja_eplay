import styled from 'styled-components'
import { Cores } from '../../styles'

import type { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.verde};
  color: ${Cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '9px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '3px 5px')};
  border-radius: 8px;
  width: fit-content;
`
