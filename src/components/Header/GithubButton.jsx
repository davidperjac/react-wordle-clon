import { VscGithubInverted } from 'react-icons/vsc';
import { ActionIcon, Tooltip } from '@mantine/core';

const GithubButton = () => {
	return (
		<Tooltip label="GitHub" withArrow>
			<a
				style={{ textDecoration: 'none', textDecorationColor: 'none' }}
				href="https://github.com/davidperjac"
			>
				<ActionIcon color="purple" variant="light">
					<VscGithubInverted size={30} />
				</ActionIcon>
			</a>
		</Tooltip>
	);
};

export default GithubButton;
