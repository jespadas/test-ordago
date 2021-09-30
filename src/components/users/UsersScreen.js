import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LoadingSkeleton } from '../ui/LoadingSkeleton';
import UserProfileModal from './UserProfileModal';
import { ReloadButton } from './ReloadButton';
import { UserGrid } from './UserGrid';

export const UsersScreen = () => {
	const { loading } = useSelector((state) => state.ui);

	return (
		<div className='usersScreen__container'>
			<UserProfileModal />

			<Container fixed>
				<Box
					sx={{
						width: 'auto',
						height: '500px',
					}}
				>
					{loading ? <LoadingSkeleton /> : <UserGrid />}
					<ReloadButton />
				</Box>
			</Container>
		</div>
	);
};
