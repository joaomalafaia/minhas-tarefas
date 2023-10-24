import styled from 'styled-components'

import { Props } from './index'

type PropsSimples = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSimples>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`
export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block; /* o span, por padrão, fica um do lado do outro com o d: flex */
`
export const Label = styled.span`
  font-size: 14px;
`
