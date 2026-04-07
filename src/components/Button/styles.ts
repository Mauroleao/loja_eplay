import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
