import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { MiniDrawer } from './components/drawer';
import MultipleSelectChip from './components/select';
import { OutlinedInput } from "@mui/material";
import { filterOptions } from "./components/filters";
import "./App.css";

export default function App() {
  // Higher order function for doing simple partial application
  const onSelectionChange = (optionName: string) => (selectedItems: string[]) => {
    console.log(`Option: ${optionName}, Selected Items: `, selectedItems);
  }

  const onCompanySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
          {filterOptions.map((option) => (
            <MultipleSelectChip
              key={option.name}
              onSelectionChange={onSelectionChange(option.name)}
              name={option.name}
              options={option.options}
              mode={option.mode}
            />
          ))}
          <OutlinedInput
            placeholder="Company Name"
            onChange={onCompanySearch}
            sx={{ height: 39, margin: 1, width: 180 }}
          />
        </div>
      </Box>
    </Box>
  );
}