import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { toggleSidebar } from '../../actions/sidebar';

function Header() {
    const dispatch = useDispatch();
    const handleDrawer = useCallback(() => {
        dispatch(toggleSidebar());
    }, [dispatch]);
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    App Demo
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;