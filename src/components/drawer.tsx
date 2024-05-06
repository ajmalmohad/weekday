import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './css/drawer.css'
import {
    CurrencyRupee,
    PersonAddOutlined,
    PersonOutline,
    Search,
    Share,
    ThumbUpOutlined
} from '@mui/icons-material';

const DrawerItem = ({ item, open }: {
    item: { text: string, icon: JSX.Element },
    open: boolean
}) => (
    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
            sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2,
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 1 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                }}
            >
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, color: '#444444' }} />
        </ListItemButton>
    </ListItem>
);

export const MiniDrawer = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawerItems = [
        { text: 'My applied jobs', icon: <PersonOutline /> },
        { text: 'Search jobs', icon: <Search /> },
        { text: 'Search salary', icon: <CurrencyRupee /> },
        { text: 'Ask for referral', icon: <PersonAddOutlined /> },
    ];

    const drawerItemsExtra = [
        { text: 'Recommend from shortlist', icon: <ThumbUpOutlined /> },
        { text: 'Refer this extension', icon: <Share /> },
    ];

    return (
        <MuiDrawer
            variant="permanent"
            className={`drawer ${open ? 'open' : 'closed'}`}
        >
            <div className='drawer-header'>
                {
                    !open ?
                        <img src="src/assets/weekday.png" height={40} width={40} alt="weekday" />
                        : <img src="src/assets/weekday-long.png" height={30} alt="weekday" />
                }
                <IconButton className='icon' onClick={handleDrawerToggle}>
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {drawerItems.map((item, idx) => (
                    <DrawerItem key={idx} item={item} open={open} />
                ))}
            </List>
            <Divider />
            <List>
                {drawerItemsExtra.map((item,idx) => (
                    <DrawerItem key={idx} item={item} open={open} />
                ))}
            </List>
            <List className="profile">
                <img src="src/assets/weekday.png" height={40} width={40} alt="weekday" />
                <p style={{ opacity: open ? 1 : 0 }}>Muhammed Ajmal</p>
            </List>
        </MuiDrawer>
    )
}