import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {

  const [repos, setRepos] = useState([])
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    setEstaCarregando(true)
    setRepos([])
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(res => res.json())
      .then(resJson => {
        setTimeout(() => {
          setRepos(resJson)
          setEstaCarregando(false)
        }, 3000)
      });
  }, [nomeUsuario])

  return (
    <div className="container">
      {estaCarregando && (
        <h1>Carregando...</h1>
      )}
      <ul className={styles.list}>
        {repos.map(({ id, name, language, html_url }) => (
          <li className={styles.listItem} key={id}>
            <div className={styles.itemName}>
              <b>Nome:</b> {name} <br />
            </div>
            <div className={styles.itemLanguage}>
              <b>Linguagem:</b> {language} <br />
            </div>
              <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposList