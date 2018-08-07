import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 270,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={16}>
            {[0, 1, 2, 3,4,5,6,7,8,9].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                    <div style={{height: '73%'}}>
                        <img alt="" src="" />
                    </div>
                    <div style={{height: "27", padding:"20px"}}>
                        <h4><b>{} her name</b></h4>
                        <p>{}What she is all about</p>
                    </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
       </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);