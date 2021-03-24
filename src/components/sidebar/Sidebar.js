import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleSidebar } from '../../actions/sidebar';
import { menuItems } from '../../menu';

const useStyles = makeStyles((theme) => ({
    drawer: {
        top: 64,
        width: 0,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerOpen: {
        width: 240
    }
}));

function Sidebar() {
    const { expanded } = useSelector(state => state.sidebar);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const redirect = useCallback((url) => {
        history.push(url);
        dispatch(toggleSidebar());
    }, [dispatch, history]);
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: `${classes.drawer} ${expanded ? classes.drawerOpen : ''}`
            }}
        >
            <List>
                {menuItems.map(({label, url}, index) => (
                    <ListItem button key={label} onClick={() => redirect(url)}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;