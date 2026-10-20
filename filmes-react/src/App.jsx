import { useState } from 'react'
import './App.css'

function App() {
  const username = 'Maria';
  const [count, setCount] = useState(0);
  const [filmList, setFilmList] = useState([
    { id: 1, name: "Star Treck", isFavorite: true, },
    { id: 2, name: "O Senhor dos Anéis", isFavorite: false, },
    { id: 3, name: "Matrix", isFavorite: false, },
    { id: 4, name: "Avatar The Last Airbender", isFavorite: false, },
  ])

  function clicouNoBotao () {
    // alert('Você clicou no botão!');
    setCount(count + 1);
  }

  function alternaFavorito (id) {
    const newFilmList = filmList.map((film) => {
      if (film.id === id) {
        return {
          id: film.id,
          name: film.name,
          isFavorite: !film.isFavorite,
        }
      }

      return film;
    })

    setFilmList(newFilmList);
  }

  return (
    <div>
      <p className="hero">Bem-vinda {username}</p>
      <button onClick={clicouNoBotao} >O Contador está em: {count}</button>

      {
        filmList.map((film) => {
          return (
            <div key={film.id}>
              <p>{film.name}</p>
              <button onClick={() => alternaFavorito(film.id)}>Favorito</button>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
