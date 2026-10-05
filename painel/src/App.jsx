import { useState } from 'react'

function App() {
  const [ideias, setIdeias] = useState([])
  const [novaIdeia, setNovaIdeia] = useState('')

  function adicionarIdeia(event) {
    event.preventDefault()

    if(novaIdeia.trim() === '') {
      return
    }
  }

  return (
    <div>
  <h1>Painel de Ideias</h1>

  <form onSubmit={adicionarIdeia}>
    <input
      type="text"
      value={novaIdeia}
      onChange={(event) => setNovaIdeia(event.target.value)}
    />

    <button type="submit">Adicionar</button>
  </form>
</div>
  )
}

export default App