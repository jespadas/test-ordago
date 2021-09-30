import React from 'react';
import { useSelector } from 'react-redux';
import {
	makeStyles,
	Card,
	CardContent,
	CardMedia,
	Avatar,
	Typography,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
	text: {
		margin: theme.spacing(0, 0, 0.5),
	},
	avatar: {
		verticalAlign: 'middle',
		marginRight: theme.spacing(0.5),
	},
	large: {
		width: theme.spacing(12),
		height: theme.spacing(12),
		margin: theme.spacing(2, 2, 0),
	},
	card: {
		borderRadius: 15,
		maxWidth: '270px',
		minWidth: '270px',
		height: '330px',
		backgroundColor: theme.palette.background.card,
	},
	cardContent: {
		padding: theme.spacing(2, 0, 0, 0),
	},
}));

export default function UserCard() {
	const classes = useStyles();
	const { age, firstName, lastName, phone, email, address, avatar, country } =
		useSelector((state) => state.users.active);
	return (
		<Card
			variant='outlined'
			className={classes.card}
			style={{ display: 'inline-block' }}
		>
			<CardMedia align='center'>
				<Avatar alt='Remy Sharp' src={avatar} className={classes.large} />
			</CardMedia>
			<CardContent className={classes.cardContent}>
				<Typography
					className={classes.text}
					color='textSecondary'
					variant='h6'
					align='center'
				>
					{firstName} {lastName}
				</Typography>
				<Typography
					className={classes.text}
					color='textSecondary'
					variant='subtitle1'
					align='center'
				>
					<AlternateEmailIcon className={classes.avatar} fontSize='small' />
					{email}
				</Typography>
				{' '}
				<Typography
					className={classes.text}
					color='textSecondary'
					variant='subtitle1'
					align='center'
				>
					<PhoneIcon className={classes.avatar} fontSize='small' />
					{phone}
				</Typography>
				{' '}
				<Typography
					className={classes.text}
					color='textSecondary'
					variant='subtitle1'
					align='center'
				>
					<LocationOnIcon className={classes.avatar} fontSize='small' />
					{address}, {country}
				</Typography>
				{' '}
				<Typography
					className={classes.text}
					color='textSecondary'
					variant='subtitle1'
					align='center'
				>
					{' '}
					{age} years old
				</Typography>
				{' '}
			</CardContent>
		</Card>
	);
}
