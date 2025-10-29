import React, { useState } from 'react';

const API_URL = 'https://dlitamakand-faq-worker-18.deno.dev/';

export default function FaqAgent() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const ask = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setAnswer(null);
        try {
           const response = await fetch(`${API_URL}`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({ question }),
           });

           const data = await response.json();
           if (!response.ok) {
               throw new Error(data.message);
           }
           setAnswer(data.answer);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div style={{ maxWidth: 640, margin: '2rem auto', padding: 16, border: '1px solid #eee', borderRadius: 12 }}>
            <h3>FAQ</h3>
            <form onSubmit={ask} style={{ display: 'flex', gap: 8 }}>
                <input value={question} onChange={e => setQuestion(e.target.value)} required placeholder="Ex: Avec quelles technos tu bosses ?" style={{ flex: 1, padding: '0.75rem', borderRadius: 8, border: '1px solid #ddd' }} />
                <button disabled={loading} style={{ padding: '0.75rem 1rem', borderRadius: 8 }}>{loading ? '…' : 'Demander'}</button>
            </form>
            {error && <p style={{ color: 'crimson', marginTop: 12 }}>{error}</p>}
            {answer && <p style={{ marginTop: 12 }}>{answer}</p>}
            <small style={{ color: '#666' }}>Réponses basées sur ta FAQ interne.</small>
        </div>
    );

}