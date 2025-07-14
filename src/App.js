import Saludo from './Saludo';
import Contador from './contador';

function App() {
  return (
    <div> className="App"
      <h1>¡Hola React!</h1>
      <p>Este es mi primer componente.</p>

      <Saludo nombre= "Santiago"/>
      <Saludo nombre= "Laura"/>
      {/*Aquí va el contador*/}
        <Contador />
    </div>
  );
}

export default App;
