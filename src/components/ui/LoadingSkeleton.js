import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const LoadingSkeleton = () => {
	return (
		<Container fixed>
			<Box
				sx={{
					width: 'auto',
					height: '500px',
          marginTop: '30px' 
				}}
			>
				<Stack spacing={1}>
					<Skeleton
						variant='rectangular'
						width={'100%'}
						height={'50px'}
						animation='wave'
					/>
					<Skeleton
						variant='rectangular'
						width={'100%'}
						height={'50px'}
						animation='wave'
					/>
					<Skeleton
						variant='rectangular'
						width={'100%'}
						height={'50px'}
						animation='wave'
					/>
					<Skeleton
						variant='rectangular'
						width={'100%'}
						height={'50px'}
						animation='wave'
					/>
					<Skeleton
						variant='rectangular'
						width={'100%'}
						height={'50px'}
						animation='wave'
					/>
					<Skeleton
						variant='rectangular'
						width={'100%'}
						height={'50px'}
						animation='wave'
					/>
					<Skeleton
						variant='rectangular'
						width={'100%'}
						height={'50px'}
						animation='wave'
					/>
				</Stack>
			</Box>
		</Container>
	);
};
