import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { setActiveUser } from '../../actions/users';
import { openModal } from '../../actions/ui';

export const UserGrid = () => {
	let rows = [];
	// Get the users data from state
	const { users } = useSelector((state) => state.users);
	// Dispatch redux func
	const dispatch = useDispatch();
	// TODO isolate handlers
	const handleOpen = (params, e) => {
		e.preventDefault();
		const {
			id,
			age,
			firstName,
			lastName,
			phone,
			email,
			address,
			avatar,
			country,
		} = params.row;
		dispatch(
			setActiveUser(id, {
				id,
				age,
				firstName,
				lastName,
				phone,
				email,
				address,
				avatar,
				country,
			})
		);
		dispatch(openModal());
	};

	// Columns config for data grid
	const columns = [
		{
			field: 'firstName',
			headerName: 'First name',
			width: 130,
			headerAlign: 'center',
		},
		{
			field: 'lastName',
			headerName: 'Last name',
			width: 130,
			headerAlign: 'center',
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			width: 90,
			headerAlign: 'center',
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 240,
			headerAlign: 'center',
		},
		{
			field: 'address',
			headerName: 'Address',
			width: 150,
			headerAlign: 'center',
		},
		{
			field: 'phone',
			headerName: 'Phone Number',
			width: 140,
			headerAlign: 'center',
		},
		{
			field: 'profile',
			headerName: 'Profile',
			width: 80,
			headerAlign: 'center',
			type: 'actions',
			getActions: (params) => [
				<GridActionsCellItem
					icon={<OpenInNewIcon />}
					label='Voir profile'
					onClick={(e) => handleOpen(params, e)}
				/>,
			],
		},
	];

	return (
		<>
			<DataGrid
				rows={users}
				columns={columns}
				pageSize={7}
				rowsPerPageOptions={[25]}
				disableSelectionOnClick
				key={rows.id}
			/>
		</>
	);
};
