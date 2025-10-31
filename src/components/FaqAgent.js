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
        <section>
            <Typography variant="subtitle1" mb="12" component="h2">FAQ</Typography>
            <form onSubmit={ask} style={{ display: 'flex'}}>
                <Input value={question} onChange={e => setQuestion(e.target.value)} required placeholder="Ex: Avec quelles technos tu bosses ?" style={{ flex: 1 }} />
                <Button type="submit" disabled={loading}>{loading ? '…' : 'Demander'}</Button>
            </form>
            {error && <Typography mt="12" variant="body1" component="p">{error}</Typography>}
            {answer && <Typography mt="12" mb="12" variant="body1" component="p">{answer}</Typography>}
            <Typography mt="12" variant="body1" component="small">Réponses basées sur une FAQ interne.</Typography>
        </section>
    );

}
