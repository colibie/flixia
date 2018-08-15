import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import GuttersGrid from './cardSet'
import SearchBox from './search'
// import LoginModal from '../'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '60%',
    margin: 'auto',
    marginTop: -73
  },
  hide: {
    overflowX: 'hidden',
    width: '146%',
    margin:' auto auto auto -180px'
  },
});

class CelebTab extends React.Component {
  state = {
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Action" />
            <Tab label="Crime" />
            <Tab label="Drama" />
            <Tab label="Humor" />
            <Tab label="Romance" />
          </Tabs>
        {/* <LoginModal /> */}
        <div style={{ height: '50px', paddingTop: '9px', paddingLeft: '15px',  }}>
          <p> 
            <span style={{ paddingTop: '6px' }}> List_View </span>
            <span style={{ paddingTop: '6px' }}> Grid_view </span>
            <span style={{ paddingTop: '6px' }}> Mixed_view </span>
            <SearchBox />
          </p>
        </div>
        </AppBar>
        <div className={classes.hide}>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
            >
                <TabContainer dir={theme.direction}><GuttersGrid /></TabContainer>
                <TabContainer dir={theme.direction}><GuttersGrid /></TabContainer>
                <TabContainer dir={theme.direction}><GuttersGrid /></TabContainer>
                <TabContainer dir={theme.direction}><GuttersGrid /></TabContainer>
            </SwipeableViews>
        </div>
      </div>
    );
  }
}

CelebTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CelebTab);