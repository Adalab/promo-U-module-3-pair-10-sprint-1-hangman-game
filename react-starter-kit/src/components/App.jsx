////imports: dependencies, styles, components...
//import backgroundImage from '../images/blackboard.jpg'
import '../styles/index.scss'
import {useState} from 'react';

//////functions, variables, handles...
function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(1);
  const handleClick = () => { 
    numberOfErrors >0 && numberOfErrors<= 13 ? setNumberOfErrors(numberOfErrors + 1) : console.log ('Perdiste'); 
    console.log (numberOfErrors);
    return(numberOfErrors);
  }
  const [lastLetter, setLastLetter]= useState ('');
  const [word, setWord]= useState ('katacrocker');
  const [userLetters, setUserLetters]= useState ([]);
  const [solutionLetters, setSolutionLetters] = useState([]); 


  const renderSolutionLetters =()=>{
    const wordLetters = word.split('');
    return wordLetters.map ((eachLetter,index)=>{
      if (userLetters.includes(eachLetter)){
      setSolutionLetters ([...eachLetter])
      return <li className="letter" key={index}>{eachLetter}</li>
      } else {
        return <li className="letter" key={index}></li>; 
      }
    })
  }

  const handleChange =(event)=> {
    const letter = event.target.value;
    if(letter === event.target.value) {
     setLastLetter(event.target.value.replace (/[^a-zA-Z\d]/ig, '¿?'));
     setSolutionLetters ([...solutionLetter])
    }
  }


///html
  return (
    <>
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleChange}
              pattern="[A-Za-z]"
            />
          </form>
        </section>
        <section className= {`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
          <button className= "numberOfErrors" onClick={handleClick}>Incrementar</button>
        </section>
      </main>
    </div>
    </>
  )
}

export default App

/*AL CARGAR LA PAGINA
  solucion = tiene valor (api - palabra aleatoria) pinta los huecos de las letras
  letras solucion = huecos de la palabra aleatoria. no tiene valor
  letras falladas = vacío
  input letras = vacío
  muñeco = vacío (lineas menor opacidad)

  AL REALIZAR UN EVENTO
  solucion = mismo valor
  letras solucion = pinta las letras acertadas (quitar clase hidden)
  letras falladas = añadir letras si no coinciden con el array de la solucion
  input letras = pintar el valor del input en letras solucion, si está en el array de solucion, y si no está las pinta en falladas
  muñeco = se le añade una linea si el input no esta en letras solucion (o si está en letras falladas)*/



