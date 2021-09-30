import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';

const StyledFab = styled(Fab)({
	position: 'absolute',
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: '0 auto',
	backgroundColor: 'black',
});

export default function Footer() {
	return (
		<>
			<CssBaseline />
			<AppBar
				position='fixed'
				color='primary'
				sx={{
					top: 'auto',
					bottom: 0,
					backgroundColor: '#163243 !important',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					color: 'white !important',
				}}
			>
				<Toolbar>
					<StyledFab>
						<Link
							target='_blank'
							href='https://julioespadas.com'
							color='white'
							underline='none'
						>
							<Avatar
								alt='Profile Picture'
								src='https://avatars.githubusercontent.com/u/35740179?v=4'
							/>
						</Link>
					</StyledFab>
					<Typography variant='overline' sx={{ marginTop: '20px' }}>
						© 2021 Made by
						<Link
							target='_blank'
							href='https://github.com/jespadas'
							color='white'
							underline='none'
						>
							jespadas
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
}
