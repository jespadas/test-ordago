import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UserCard from './UserCard';
import { closeModal } from '../../actions/ui';
import { removeActiveUser } from '../../actions/users';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	height: '330px',
	width: '270px',
};

export default function UserProfileModal() {
	const dispatch = useDispatch();

	const { openModal } = useSelector((state) => state.ui);

	const handleClose = () => {
		dispatch(closeModal());
		dispatch(removeActiveUser());
	};

	return (
		<>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<UserCard />
				</Box>
			</Modal>
		</>
	);
}
