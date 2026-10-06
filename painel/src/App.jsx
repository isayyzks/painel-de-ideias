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

  function alternarIdeia(id) {
  setIdeias((atual) =>
    atual.map((ideia) =>
      ideia.id === id
        ? { ...ideia, feita: !ideia.feita }
        : ideia
    )
  )
}

function removerIdeia(id) {
  setIdeias((atual) =>
    atual.filter((ideia) => ideia.id !== id)
  )
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
    <input type = "checkbox"
    checked = {ideia.feita}
    onChange={() => alternarIdeia(ideia.id)} />

      <span className={ideia.feita ? 'feita' : ''}>
        {ideia.texto}
      </span>

      <button onClick={() => removerIdeia(ideia.id)}>✕</button>

    </div>
  ))}
</div>

<footer>
  {`${ideias.length} ideias no painel · ${ideias.filter((ideia) => ideia.feita).length} concluídas`}
</footer>
</div>

  )
}

export default App