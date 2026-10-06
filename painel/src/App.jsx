import { useState } from 'react'
import './App.css'

function App() {
  const [ideias, setIdeias] = useState([])
  const [novaIdeia, setNovaIdeia] = useState('')
  const [erro, setErro] = useState('')

  function adicionarIdeia(event) {
    event.preventDefault()

    if(novaIdeia.trim() === '') {
      setErro('Digite sua ideia antes de adicionar.')
      return
    }

    const ideia = {
      id: Date.now(),
      texto: novaIdeia,
      feita: false
    }

    setIdeias((atual) => [...atual, ideia])
    setNovaIdeia('')
    setErro('')
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
    <div className="pagina">
  <h1>Painel de Ideias</h1>

  <form  className="formulario" onSubmit={adicionarIdeia}>
    <input
      type="text"
      value={novaIdeia}
      onChange={(event) => {
        setNovaIdeia(event.target.value)
        setErro('')
      }}
    />

    <button type="submit">Adicionar</button>
  </form>

  {erro && <p className="erro">{erro}</p>}

  <div className="lista-ideias">
  {ideias.map((ideia) => (
    <div className="ideia" key={ideia.id}> 
    <input type = "checkbox"
    checked = {ideia.feita}
    onChange={() => alternarIdeia(ideia.id)} />

      <span className={ideia.feita ? 'feita' : ''}>
        {ideia.texto}
      </span>

      <button 
        className="botao-remover"
      onClick={() => removerIdeia(ideia.id)}>✕</button>

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