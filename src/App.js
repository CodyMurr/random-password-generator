import './App.css';
import { useContext } from 'react';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import PasswordForm from './components/PasswordForm/PasswordForm';
import PasswordContext from './context/PasswordContext';

export default function App() {
  const {
    result,
    getPassword,
    clipboard,
    copied,
    showPassword,
    shortened,
    copy,
    toggleShowPw,
  } = useContext(PasswordContext);

  return (
    <div className='App flex col'>
      <section className='output flex'>
        <h1>
          {result ? (
            <span onClick={toggleShowPw}>
              {showPassword ? result : shortened}
            </span>
          ) : (
            'Generate Password Below'
          )}
        </h1>
        <section className='flex col icons'>
          {copied ? (
            <>
              <FaClipboardCheck
                className='copy-ico'
                size={50}
                color='#C33C54'
              />
              <p className='copied'>{clipboard.result}</p>
            </>
          ) : (
            <>
              <FaClipboard
                className='copy-ico'
                size={50}
                color={showPassword ? '#C33C54' : '#777da7a5'}
                onClick={showPassword ? copy : null}
              />
              <p> </p>
            </>
          )}
        </section>
      </section>
      <section className='form-container flex'>
        <PasswordForm getPassword={getPassword} />
      </section>
    </div>
  );
}
