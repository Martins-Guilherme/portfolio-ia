'use server'
import Mensagem from '@/model/Mensagem'

export default async function conversar(
  chatId: string,
  mensagem: Mensagem
): Promise<string | null> {
  const webhookURL = process.env.WEBHOOK_URL
  if (!webhookURL) return null

  const resposta = await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chatId,
      mensagem: mensagem.texto,
    }),
  })
  const msgResposta = await resposta.json()
  return msgResposta.resposta
}
