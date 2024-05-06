interface FilterOption {
    name: string;
    options: string[];
    mode: 'multiple' | 'single';
}

export const filterOptions: FilterOption[] = [
    {
        name: "Roles",
        options: ["Backend", "Frontend", "Fullstack", "IOS", "Flutter", "React Native",
            "Dev-Ops", "Android", "Tech Lead", "Data Science", "Data Engineer", "NLP",
            "Computer Vision", "Deep Learning", "Web 3"],
        mode: "multiple"
    },
    {
        name: "Experience",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        mode: "single"
    },
    {
        name: "Remote",
        options: ["remote", "onsite", "hybrid"],
        mode: "multiple"
    },
    {
        name: "Min Base Salary",
        options: ["0 LPA", "10 LPA", "20 LPA", "30 LPA", "40 LPA",
            "50 LPA", "60 LPA", "70 LPA"],
        mode: "single"
    },
    {
        name: "Location",
        options: ["India", "USA", "UK", "Canada", "Australia"],
        mode: "multiple"
    },
];