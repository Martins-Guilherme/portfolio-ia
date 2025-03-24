import { Id } from '@core'
import useLocalStorage from './useLocalStorage'
import Mensagem from '@/model/Mensagem'
import conversar from '@/functions/chat'

export default function useChat() {
  const [chatId] = useLocalStorage<string>('chatId', Id.gerar())
  const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>('mensagens', [])

  async function adicionarMensagem(texto: string) {
    const novaMensagem: Mensagem = {
      id: Id.gerar(),
      texto,
      autor: 'visitante',
      lado: 'direito',
      icone: null,
    }
    setMensagens((msgs) => [...msgs, novaMensagem])

    const resposta = await conversar(chatId, novaMensagem)

    if (!resposta) return
    const respostaMensagem: Mensagem = {
      id: Id.gerar(),
      texto: resposta,
      autor: 'Assistente',
      lado: 'esquerdo',
      icone: null,
    }
    setMensagens((msgs) => [...msgs, respostaMensagem])
  }

  function limparMensagens() {
    setMensagens([])
  }

  return {
    chatId,
    mensagens,
    adicionarMensagem,
    limparMensagens,
  }
}
