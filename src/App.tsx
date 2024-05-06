import Box from '@mui/material/Box';
import { MiniDrawer } from './components/drawer';

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
      </Box>
    </Box>
  );
}
