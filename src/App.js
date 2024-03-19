import ClassClick from './components/ClassClick';
import Click from './components/Click';
import Counter from './components/Counter';
import Greet from './components/Greet';
import NameList from './components/NameList';

function App() {
  return (
    <div>
      <Click />
      <ClassClick />
      <NameList />
      {/* <Greet name='Bridget'/>
      <Counter /> */}
    </div>
  );
}

export default App;
