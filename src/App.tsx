import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { MiniDrawer } from './components/drawer';
import MultipleSelectChip from './components/select';
import "./App.css";

export default function App() {
  let onSelectionChange = (selectedItems: string[]) => {
    console.log(selectedItems);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MiniDrawer />
      <Box className="main" component="main" sx={{ flexGrow: 1 }}>
        <div className="welcome">
          <p>👋 Muhammed Ajmal</p>
        </div>
        <div className="filters">
          <MultipleSelectChip
            onSelectionChange={onSelectionChange}
            name="Roles"
            options={["frontend", "backend"]}
            mode={"multiple"}
          />
        </div>
      </Box>
    </Box>
  );
}
