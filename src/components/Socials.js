import { useColorMode} from '@docusaurus/theme-common';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Socials = (props) => {
    const { name, url, icon } = props;
    const {colorMode } = useColorMode();

    return (
        <a href={url}
        title={name}
        target='_blank'
        rel='noopener noreferrer'>
            {icon === 'linkedin' && <LinkedInIcon sx={{ fontSize: 30, color: colorMode === 'dark' ? 'white': 'black', marginTop: 1, marginRight: 1, '&:hover': {
                color: colorMode === 'dark'? 'white': 'black'
            }}} />}
            {icon === 'github' && <GitHubIcon sx={{ fontSize: 30, color: colorMode === 'dark' ? 'white': 'black', marginTop: 1, marginRight: 1, '&:hover': {
                color: colorMode === 'dark'? 'white': 'black'
            }}} />}
        </a>
    )
}

export default Socials;
