import React, { useState } from 'react';
import { Input, Typography} from "@mui/material";
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useColorMode } from '@docusaurus/theme-common';

const API_URL = 'https://dlitamakand-faq-worker-18.deno.dev/';

export default function FaqAgent() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { colorMode } = useColorMode();

    const ask = async (e) => {
        e.preventDefault();
        if (!question.trim()) {
            return;
        }
        setLoading(true);
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
            setError(null);
            setLoading(false);
            setQuestion('');
        } catch (err) {
            setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
            setAnswer(null);
            setLoading(false);
        }
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate a delay for better UX
    }

    const isDark = colorMode === 'dark';
    const bgColor = isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)';
    const borderColor = isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(0, 0, 0, 0.08)';
    const textColor = isDark ? '#f1f5f9' : '#1a1a1a';
    const secondaryTextColor = isDark ? '#94a3b8' : '#666666';
    const inputTextColor = isDark ? '#f1f5f9' : '#1a1a1a';
    const inputBorderColor = isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(0, 0, 0, 0.12)';
    const inputBorderHover = isDark ? 'rgba(148, 163, 184, 0.5)' : 'rgba(0, 0, 0, 0.2)';
    const focusColor = isDark ? '#60a5fa' : '#2563eb';
    const placeholderColor = isDark ? '#64748b' : '#999999';
    const shadowColor = isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.08)';
    const loaderColor = isDark ? '#60a5fa' : '#2563eb';
    const loaderBgColor = isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(37, 99, 235, 0.15)';

    return (<Box
      sx={{
        background: isDark
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f8f7f4 0%, #ede9e0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        transition: 'background 0.3s ease',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
          background: bgColor,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${borderColor}`,
          borderRadius: '16px',
          padding: 4,
          boxShadow: `0 20px 60px ${shadowColor}`,
          transition: 'all 0.3s ease',
        }}
      >
        <Box
          component="form"
          onSubmit={ask}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Box>
            <Box
              sx={{
                fontSize: '14px',
                color: secondaryTextColor,
                letterSpacing: '0.3px',
                transition: 'color 0.3s ease',
              }}
            >
              Réponses basées sur une FAQ interne
            </Box>
          </Box>

          <TextField
            fullWidth
            placeholder="Pose ta question ici..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
            multiline
            maxRows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: inputTextColor,
                fontSize: '15px',
                fontFamily: 'inherit',
                '& fieldset': {
                  borderColor: inputBorderColor,
                  borderWidth: '1.5px',
                  transition: 'border-color 0.3s ease',
                },
                '&:hover fieldset': {
                  borderColor: inputBorderHover,
                },
                '&.Mui-focused fieldset': {
                  borderColor: focusColor,
                  borderWidth: '2px',
                },
                '&.Mui-disabled': {
                  opacity: 0.6,
                },
              },
              '& .MuiOutlinedInput-input::placeholder': {
                color: placeholderColor,
                opacity: 0.7,
              },
            }}
          />

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <Button
              type="submit"
              disabled={loading || !question.trim()}
              sx={{
                flex: 1,
                padding: '12px 24px',
                background: loading
                  ? `rgba(37, 99, 235, 0.2)`
                  : isDark
                  ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                  : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                textTransform: 'none',
                border: 'none',
                borderRadius: '8px',
                cursor: loading ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                '&:hover:not(:disabled)': {
                  background: isDark
                    ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                    : 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 20px rgba(37, 99, 235, 0.3)`,
                },
                '&:disabled': {
                  opacity: 0.7,
                },
              }}
              endIcon={loading ? null : <SendIcon sx={{ fontSize: '18px' }} />}
            >
              {loading ? 'Chargement...' : 'Envoyer'}
            </Button>

            {loading && (
              <Box
                sx={{
                  position: 'relative',
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: `2px solid ${loaderBgColor}`,
                    borderRadius: '50%',
                    animation: 'spin 3s linear infinite',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    width: '70%',
                    height: '70%',
                    border: '2px solid transparent',
                    borderTop: `2px solid ${loaderColor}`,
                    borderRadius: '50%',
                    animation: 'spin 1.5s linear infinite reverse',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    width: '40%',
                    height: '40%',
                    background: `radial-gradient(circle, ${loaderColor} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    opacity: 0.4,
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <style>{`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.2); opacity: 0.2; }
                  }
                `}</style>
              </Box>
            )}
          </Box>
          {answer && (
            <Box
              sx={{
                padding: 3,
                background: isDark
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(0, 0, 0, 0.03)',
                border: `1px solid ${borderColor}`,
                borderRadius: '12px',
                animation: 'slideIn 0.3s ease',
              }}
            >
              <Box
                sx={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: focusColor,
                  marginBottom: 1.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Réponse
              </Box>
              <Box
                sx={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: secondaryTextColor,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {answer}
              </Box>
              <style>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateY(-10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
    )
}
