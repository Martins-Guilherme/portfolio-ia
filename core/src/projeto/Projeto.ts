import type { Nivel } from './Nivel'
import type { Tipo } from './Tipo'
import type Tecnologia from '../tecnologia/Tecnologia'

export default interface Projeto {
  id: number
  nome: string
  descricao: string
  imagens: string[]
  tipo: Tipo
  nivel: Nivel
  repositorio: string
  destaque: boolean
  tecnologias: Tecnologia[]
}
