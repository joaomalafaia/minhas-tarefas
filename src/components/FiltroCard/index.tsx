import { useDispatch, useSelector } from 'react-redux'

import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

import * as S from './styles'

export type Props = {
  ativo?: boolean
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const ContarTarefas = () => {
    const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)

    if (criterio === 'todas') return tarefas.length
    if (criterio === 'prioridade') {
      return tarefas.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = ContarTarefas()
  const ativo = verificaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
