import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { PropTypes } from 'prop-types'

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}>

                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Dimitar
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7'].map(text => (
                            <ListItem key={text} disablePadding sx={{ display: 'flex' }}>
                                <ListItemButton>

                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container sx={{ display: 'block' }}>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={"secundario"} />
                                    </Grid>

                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

        </Box>
    )
}

SideBar.propTypes = {
    drawerWidth: PropTypes.number
}