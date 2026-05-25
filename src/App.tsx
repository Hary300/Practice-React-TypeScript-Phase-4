import Counter from './components/Counter';
import CounterProvider from './contexts/counter/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <div className='flex flex-col gap-4'>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
