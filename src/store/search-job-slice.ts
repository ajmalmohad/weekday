import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Job {
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

export interface JobFilters {
  jobRole: string[];
  minExp: number | null;
  remote: string[];
  minJdSalary: number | null;
  location: string[];
  companyName: string | null;
}

interface Pagination {
  offset: number;
  total: number;
}

export interface SearchJobState {
  loading: boolean;
  jobs: Job[];
  filters: JobFilters;
  pagination: Pagination;
}

const initialState: SearchJobState = {
  loading: false,
  jobs: [],
  filters: {
    jobRole: [],
    minExp: null,
    remote: [],
    minJdSalary: null,
    location: [],
    companyName: null,
  },
  pagination: {
    offset: 0,
    total: 0,
  },
};

export const searchJobSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addOpenJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = [...state.jobs, ...action.payload];
    },
    setFilters: (state, action: PayloadAction<Partial<JobFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.pagination.total = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    incrementOffset: (state, action: PayloadAction<number>) => {
      state.pagination.offset = state.pagination.offset + action.payload;
    },
  },
});

export const {
  addOpenJobs,
  setFilters,
  setTotal,
  incrementOffset,
  setLoading,
} = searchJobSlice.actions;

export default searchJobSlice.reducer;
