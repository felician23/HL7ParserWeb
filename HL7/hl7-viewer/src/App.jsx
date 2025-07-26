import React, { useState } from 'react';
import * as hl7 from '@amida-tech/hl7';

function App() {
  const [hl7Message, setHl7Message] = useState('');
  const [result, setResult] = useState(null);

  const handleParse = () => {
    try {
      const parsed = hl7.parseString(hl7Message); // ✅ parse HL7
      setResult(parsed);
    } catch (error) {
      setResult({ error: error.message });
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>HL7 Parser</h2>
      <textarea
        rows="10"
        cols="60"
        value={hl7Message}
        onChange={(e) => setHl7Message(e.target.value)}
        placeholder="Paste HL7 message here"
      />
      <br />
      <button onClick={handleParse}>Parse</button>
      <pre>{result ? JSON.stringify(result, null, 2) : 'Parsed result will appear here'}</pre>
    </div>
  );
}

export default App;