import Counter from './components/Counter';
import Greet from './components/Greet';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Greet name='Bridget'/>
      <Counter />
    </div>
  );
}

export default App;
