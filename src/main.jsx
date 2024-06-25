import SolanisMDE from './SolanisMDE';
import './SolanisMDE.css';

function App() {
  return (
    <div className="App">
      <h1>Meu Editor de Markdown</h1>
      <SolanisMDE width="600px" height="400px" initialMarkdown="# Olá Mundo!" />
    </div>
  );
}

export default App;
