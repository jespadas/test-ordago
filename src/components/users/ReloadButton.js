import React from 'react';
import {useDispatch} from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import { startLoadingUsers } from '../../actions/users';

export const ReloadButton = () => {

const dispatch = useDispatch();

const handleClick = (e) => {
    e.preventDefault();
    dispatch(startLoadingUsers());
}

	return (
		<Stack direction='row' spacing={2} sx={{marginTop:'20px'}}>
			<Button variant='outlined' startIcon={<ReplayIcon />} onClick={(e) => handleClick(e)}>
				Reload data
			</Button>
		</Stack>
	);
};
