import "./App.css";
import { generate } from "./utilities/generator";
import PasswordForm from "./components/PasswordForm/PasswordForm";

export default function App() {
  

  return (
      <div className="App flex col">
        <section className='form-container flex'>

          <PasswordForm />
        </section>
      </div>
  );
}
