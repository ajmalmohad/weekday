import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { MiniDrawer } from './components/drawer';
import MultipleSelectChip from './components/select';
import { OutlinedInput } from "@mui/material";
import { applyFilters, filterOptions } from "./utils/filters";
import { Job, addOpenJobs, setFilters, setLoading, incrementOffset } from './store/search-job-slice';
import { useAppDispatch, useAppSelector } from "./store/store";
import { useEffect, useState } from "react";
import { getAvailableJobs } from "./api/queries";
import JobLists from "./components/joblists";
import "./App.css";

export default function App() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchJob.filters);
  const jobs = useAppSelector((state) => state.searchJob.jobs);
  const loading = useAppSelector((state) => state.searchJob.loading);

  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  const fetchMoreJobs = (offset: number) => {
    dispatch(setLoading(true));
    getAvailableJobs(10, offset).then((result) => {
      if (!result.error) {
        dispatch(addOpenJobs(result.data.jobs));
        dispatch(incrementOffset(10));
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  }

  useEffect(() => {
    fetchMoreJobs(0);
  }, []);

  // Apply filters whenever filters or jobs change
  useEffect(() => {
    const newFilteredJobs = applyFilters(jobs, filters);
    setFilteredJobs(newFilteredJobs);
  }, [filters, jobs]);

  // Higher order function for doing simple partial application
  const onSelectionChange = (optionName: string) => (selectedItems: string[]) => {
    selectedItems = selectedItems.map((item) => item.trim().toLowerCase());
    switch (optionName) {
      case "Roles":
        dispatch(setFilters({ jobRole: selectedItems }));
        break;
      case "Experience":
        dispatch(setFilters({ minExp: Number(selectedItems[0]) }));
        break;
      case "Remote":
        dispatch(setFilters({ remote: selectedItems }));
        break;
      case "Min Base Salary":
        dispatch(setFilters({ minJdSalary: Number(selectedItems[0]) }));
        break;
      case "Location":
        dispatch(setFilters({ location: selectedItems }));
        break;
      case "Company Name":
        dispatch(setFilters({ companyName: selectedItems[0] }));
        break;
    }
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
            onChange={(e) => {
              onSelectionChange("Company Name")([e.target.value]);
            }}
            sx={{ height: 39, margin: 1, width: 180 }}
          />
        </div>
        <JobLists jobs={filteredJobs} loading={loading} />
      </Box>
    </Box>
  );
}