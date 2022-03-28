import { VscGithubInverted } from 'react-icons/vsc';
import { ActionIcon, Tooltip } from '@mantine/core';

const GithubButton = () => {
	return (
		<Tooltip label="davidperjac" withArrow>
			<a
				style={{ textDecoration: 'none', textDecorationColor: 'none' }}
				href="https://github.com/davidperjac"
			>
				<ActionIcon color="violet" variant="light">
					<VscGithubInverted size={30} />
				</ActionIcon>
			</a>
		</Tooltip>
	);
};

export default GithubButton;
