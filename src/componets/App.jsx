
import React, { useState } from 'react';
import '../index.css';

function App() {
  const [length, setLength] = useState(12);
  const [withSpecialChars, setWithSpecialChars] = useState(true);
  const [withNumbers, setWithNumbers] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';
    const numbers = '0123456789';

    let availableChars = chars;

    if (withSpecialChars) {
      availableChars += specialChars;
    }

    if (withNumbers) {
      availableChars += numbers;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      newPassword += availableChars.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  return (
    <div className="App">
      <h2>Gerador de Senha</h2>
      <label htmlFor="length">Comprimento da Senha:</label>
      <input
        type="number"
        id="length"
        name="length"
        min="6"
        max="30"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        required
      />
      <br />
      <br />

      <input
        type="checkbox"
        id="withSpecialChars"
        name="withSpecialChars"
        checked={withSpecialChars}
        onChange={() => setWithSpecialChars(!withSpecialChars)}
      />
      <label htmlFor="withSpecialChars">Incluir Caracteres Especiais</label>
      <br />
      <br />

      <input
        type="checkbox"
        id="withNumbers"
        name="withNumbers"
        checked={withNumbers}
        onChange={() => setWithNumbers(!withNumbers)}
      />
      <label htmlFor="withNumbers">Incluir Números</label>
      <br />
      <br />

      <button type="button" onClick={generatePassword}>
        Gerar Senha
      </button>

      <br />
      <br />
      <h3>Sua Senha:</h3>
      <div id="passwordOutput">{password}</div>
    </div>
  );
}

export default App;
