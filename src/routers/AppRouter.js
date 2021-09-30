import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/ui/Header';
import Footer  from '../components/ui/Footer';
import { startLoadingUsers } from '../actions/users';
import { setError } from '../actions/ui';
import { UsersScreen } from '../components/users/UsersScreen';
import { LoadingSkeleton } from '../components/ui/LoadingSkeleton';


export const AppRouter = () => {
	const dispatch = useDispatch();

	const { loading } = useSelector((state) => state.ui);

	useEffect(() => {
		try {
			dispatch(startLoadingUsers());
		} catch (error) {
			dispatch(setError());
			console.log(error);
		}
	}, [dispatch]);

	return (
		<Router>
			<div className='main'>
				<Header />
				<Switch>
					{loading ? (
						<LoadingSkeleton />
					) : (
						<Route exact path='/' component={UsersScreen} />
					)}
					<Redirect to='/' />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};
