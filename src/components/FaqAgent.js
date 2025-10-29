import React, { useState } from 'react';
import {Button, Input, Typography} from "@mui/material";

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
            <Typography variant="title">FAQ</Typography>
            <form onSubmit={ask} style={{ display: 'flex', gap: 8 }}>
                <Input value={question} onChange={e => setQuestion(e.target.value)} required placeholder="Ex: Avec quelles technos tu bosses ?" style={{ flex: 1 }} />
                <Button color="primary" disabled={loading}>{loading ? '…' : 'Demander'}</Button>
            </form>
            {error && <p style={{ color: 'crimson', marginTop: 12 }}>{error}</p>}
            {answer && <p style={{ marginTop: 12 }}>{answer}</p>}
            <small style={{ color: '#666' }}>Réponses basées sur une FAQ interne.</small>
        </div>
    );

}