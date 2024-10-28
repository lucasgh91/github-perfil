import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input onBlur={(e) => setNomeUsuario(e.target.value)} type="text" />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}



      {/* {formularioEstaVisivel && (
      <Formulario nomeGlobal={{nome: nomeGlobal, set: setnomeGlobal}} />
    )}
    
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Toggle form</button> */}
    </>
  )
}

export default App