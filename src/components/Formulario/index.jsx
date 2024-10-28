import { useState, useEffect } from "react"

const Formulario = ({nomeGlobal}) => {

  const [materiaA, setMateriaA] = useState(0)
  const [materiaB, setMateriaB] = useState(0)
  const [materiaC, setMateriaC] = useState(0)
  const [nome, setNome] = useState('')
  
  useEffect(() => {
    console.log("O componente iniciou");

    return () => {
      console.log('O componente finalizou')
    }
  }, [])
  useEffect(() => {
    console.log("O estado nome mudou");
  }, [nome])
  useEffect(() => {
    console.log("O estado materiaA mudou para " + materiaA);
  }, [materiaA, materiaB, materiaC])

  const alteraNome = evento => {
    setNome(estadoAnterior => {
      
      return evento.target.value
    })
  }

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC
    const media = soma / 3

    if (media >= 7) {
      return (
        <p>Olá {nomeGlobal.nome}, você foi aprovado</p>
      )
    } else {
      return (
        <p>Olá {nomeGlobal.nome}, você não foi aprovado</p>
      )
    }
  }

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map(item => <li key={item}>{item}</li>)}
      </ul>
      <input type="text" placeholder="Seu nome" value={nomeGlobal.nome} onChange={({target}) => nomeGlobal.set(target.value)} />
      <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(target.valueAsNumber)} />
      <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(target.valueAsNumber)} />
      <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(target.valueAsNumber)} />
      {renderizaResultado()}
    </form>
  )
}

export default Formulario