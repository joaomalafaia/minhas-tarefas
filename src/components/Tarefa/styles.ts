import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  PARAMETRO: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.PARAMETRO === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.mostarda
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`
export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`
export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 16px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  text-transform: lowercase;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`
export const Descricao = styled.textarea`
  width: 100%;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: transparent;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  border: none;
  resize: none;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Botao = styled.button`
  margin-right: 8px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
`
export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
