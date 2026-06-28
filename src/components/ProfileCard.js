import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Stack,
  Avatar,
} from '@mui/material';
import { useColorMode } from '@docusaurus/theme-common';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ProfileCard(props) {
    const {siteConfig} = useDocusaurusContext();
    const { name, githubUrl, linkedinUrl, jobTitle, icon, headline, baseline, photoUrl } = props;
    const { colorMode } = useColorMode();
    
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: colorMode === 'dark' ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
                padding: 2,
            }}
        >
            <Card
                sx={{
                maxWidth: 380,
                position: 'relative',
                backgroundColor: '#fff',
                borderRadius: 3,
                overflow: 'visible',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                {/* Avatar flottant */}
                <Box
                sx={{
                    position: 'absolute',
                    top: -50,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }}
                >
                <Avatar
                    src={photoUrl}
                    alt={name}
                    sx={{
                    width: 120,
                    height: 120,
                    border: '4px solid #fff',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    }}
                />
                </Box>

                <CardContent
                sx={{
                    textAlign: 'center',
                    paddingTop: 8,
                    paddingBottom: 3,
                }}
                >
                <Typography
                    variant="h4"
                    sx={{
                    fontWeight: 700,
                    color: '#1a1a2e',
                    marginBottom: 0.5,
                    letterSpacing: '-0.5px',
                    }}
                >
                    {siteConfig.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                    color: '#0f3460',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    marginBottom: 2,
                    textTransform: 'uppercase',
                    }}
                >
                    {jobTitle}
                </Typography>

                <Box
                    sx={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #e94560, transparent)',
                    margin: '16px 0',
                    }}
                />

                <Typography
                    variant="body2"
                    sx={{
                    color: '#555',
                    lineHeight: 1.6,
                    marginBottom: 3,
                    fontSize: '0.95rem',
                    }}
                >
                    {siteConfig.tagline}
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                    justifyContent: 'center',
                    }}
                >
                    <IconButton
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        width: 44,
                        height: 44,
                        backgroundColor: '#f0f0f0',
                        color: '#1a1a2e',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                        backgroundColor: '#1a1a2e',
                        transform: 'translateY(-4px)',
                        fontSize: 30, color: colorMode === 'dark' ? '#fff': '#000','&:hover': {
                color: colorMode === 'dark'? '#fff': '#000'
            }
                        },
                    }}
                    >
                    <GitHubIcon />
                    </IconButton>
                    <IconButton
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        width: 44,
                        height: 44,
                        backgroundColor: '#f0f0f0',
                        color: '#0077b5',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                        backgroundColor: '#0077b5',
                        transform: 'translateY(-4px)',
                        fontSize: 30, color: colorMode === 'dark' ? '#fff': '#000', '&:hover': {
                color: colorMode === 'dark'? '#fff': '#000'
            }
                        },
                    }}
                    >
                    <LinkedInIcon />
                    </IconButton>
                </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}