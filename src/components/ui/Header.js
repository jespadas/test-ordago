import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: '#A6191E' }}>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						<img
							alt=''
							src='https://www.ordago.fr/static/static/media/Logo_Header.cc85c4ff.png'
							className='header__logo'
						/>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
