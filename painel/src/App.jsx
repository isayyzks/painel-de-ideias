import { useState } from 'react'

function App() {
  const [ideias, setIdeias] = useState([])
  const [novaIdeia, setNovaIdeia] = useState('')

  function adicionarIdeia(event) {
    event.preventDefault()

    if(novaIdeia.trim() === '') {
      return
    }

    const ideia = {
      id: Date.now(),
      texto: novaIdeia,
      feita: false
    }

    setIdeias((atual) => [...atual, ideia])
    setNovaIdeia('')
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

  <div>
  {ideias.map((ideia) => (
    <div key={ideia.id}> 
      <span>{ideia.texto}</span>
    </div>
  ))}
</div>
</div>

  )
}

export default App