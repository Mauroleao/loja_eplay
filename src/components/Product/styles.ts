import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../tag/styles'

export const Card = styled.div`
  background-color: ${Cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
    display: inline-block;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Infos = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
