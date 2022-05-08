import './App.css';
import { obj, generate } from './utilities/generator';

export default function App() {
  const pa = generate(obj, 10)
  console.log(pa)
  return (
    <div className="App">
    </div>
  );
}
