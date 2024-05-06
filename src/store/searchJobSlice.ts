import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Job {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

interface JobFilters {
  jobRole: string | null;
  numEmployees: number | null;
  location: string | null;
  minExp: number | null;
  minJdSalary: number | null;
}

interface Pagination {
  offset: number;
  limit: number;
  total: number;
}

interface SearchJobState {
  jobs: Job[];
  filters: JobFilters;
  pagination: Pagination;
}

const initialState: SearchJobState = {
  jobs: [],
  filters: {
    jobRole: null,
    numEmployees: null,
    location: null,
    minExp: null,
    minJdSalary: null,
  },
  pagination: {
    offset: 0,
    limit: 10,
    total: 0,
  },
};

export const searchJobSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setOpenJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
    addOpenJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = [...state.jobs, ...action.payload];
    },
    setFilters: (state, action: PayloadAction<Partial<JobFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.pagination.total = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.pagination.offset = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.pagination.limit = action.payload;
    },
  },
});

export const { setOpenJobs, addOpenJobs, setFilters, setTotal, setOffset, setLimit } = searchJobSlice.actions;

export default searchJobSlice.reducer;