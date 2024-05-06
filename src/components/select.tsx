import React from 'react';
import { Box, OutlinedInput, MenuItem, FormControl, Select, Chip, SelectChangeEvent } from '@mui/material';
import { Cancel } from '@mui/icons-material';
import './css/select.css';

interface MultipleSelectChipProps {
  options: string[];
  mode?: 'multiple' | 'single';
  name: string;
  onSelectionChange: (selectedItems: string[]) => void;
}

export default function MultipleSelectChip(
  { options, mode, name, onSelectionChange }: 
  MultipleSelectChipProps) {
  const [item, setItems] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof item>) => {
    const {
      target: { value },
    } = event;
    const newItems = typeof value === 'string' ? value.split(',') : value;
    setItems(newItems);
    onSelectionChange(newItems);
  };

  const handleDelete = (chipToDelete: string) => {
    const newItems = item.filter((chip) => chip !== chipToDelete);
    setItems(newItems);
    onSelectionChange(newItems);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <Select
        multiple={mode === 'multiple'}
        displayEmpty
        value={item}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" />}
        renderValue={(selected) => (
          selected.length > 0 ? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  clickable
                  deleteIcon={<Cancel onMouseDown={(event) => event.stopPropagation()} />}
                  onDelete={() => handleDelete(value as string)}
                />
              ))}
            </Box>
          ) : (
            <p className='select-placeholder'>{name}</p>
          )
        )}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          {name}
        </MenuItem>
        {options.map((elem) => (
          <MenuItem key={elem} value={elem}>
            {elem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}