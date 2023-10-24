import Tarefa from '../../components/Tarefa'
import * as enums from '../../utils/enums/tarefa'
import { MainContainer } from './styles'

const tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'revisar módulos 28 a 30 do curso da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar fatura',
    descricao: 'revisar fatura NuBank e pagar pelo app',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Cortar o cabelo',
    descricao: 'marcar horário para sexta às 19h',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <MainContainer>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </MainContainer>
)
export default ListaDeTarefas
