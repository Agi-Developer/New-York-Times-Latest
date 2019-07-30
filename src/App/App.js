import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Content from '../Content/Content';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from '@reach/router'

import './App.scss';

import { DataContext } from '../index';


const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	aStyle: {
		textDecoration: 'none',
		color: 'white'
	},
	footer: {
		padding: theme.spacing(3),
	},
}));
function App() {
	const { data, error } = useContext(DataContext);
	const classes = useStyles();

	return (
		<div >
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar> 
						<Link to="/" onClick={() => (window.location = '')}>
							<IconButton edge="start" color="inherit" aria-label="Menu">
								<SvgIcon>
									<path fill="none" d="M0 0h24v24H0V0z" /><path fill="white"  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
								</SvgIcon>
							</IconButton>
						</Link>
						<Typography variant="h6" className={classes.title}>
							<span role='img' aria-label='logo'>📰 NewYork Times</span>
						</Typography>

					</Toolbar>
				</AppBar>
			</div>
			<Content data={data} error={error} />
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer for NYTimes 2019
				</Typography>
			</footer>
		</div>
	);
}

export default App;
