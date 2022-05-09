import "./App.css";
import { generate } from "./utilities/generator";
import {useState} from 'react';
import PasswordForm from "./components/PasswordForm/PasswordForm";

export default function App() {
  const [result, setResult] = useState(null);

  return (
      <div className="App flex col">
        <section className='form-container flex'>
          <PasswordForm />
        </section>
        <section className='output flex'>
          <h1>
            {result ? result : 'Click Generate to See Output'}
          </h1>
        </section>

      </div>
  );
}
