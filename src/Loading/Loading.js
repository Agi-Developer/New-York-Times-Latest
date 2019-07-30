import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: "center"
	},
	
  }));

export default function Loading() {
	const classes = useStyles();
	return (
		<div className={classes.root} >
			<CircularProgress />
		</div>
	);
}
