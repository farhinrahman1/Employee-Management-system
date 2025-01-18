const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Homepage",
                taskDescription: "Create a responsive design for the homepage.",
                taskDate: "2025-01-20",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix Login Bug",
                taskDescription: "Resolve the login issue for returning users.",
                taskDate: "2025-01-18",
                category: "Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare Sales Report",
                taskDescription: "Compile and analyze Q4 sales data.",
                taskDate: "2025-01-21",
                category: "Analytics"
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Database Migration",
                taskDescription: "Migrate the database to a new server.",
                taskDate: "2025-01-22",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Team Meeting Notes",
                taskDescription: "Summarize the meeting notes and share with the team.",
                taskDate: "2025-01-17",
                category: "Management"
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Security Update",
                taskDescription: "Update the system with the latest security patch.",
                taskDate: "2025-01-15",
                category: "IT"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Redesign Logo",
                taskDescription: "Create a modern logo for branding.",
                taskDate: "2025-01-23",
                category: "Design"
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Customer Survey",
                taskDescription: "Analyze results from the customer satisfaction survey.",
                taskDate: "2025-01-16",
                category: "Analytics"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Bug Fixing",
                taskDescription: "Resolve critical bugs reported by QA.",
                taskDate: "2025-01-20",
                category: "Development"
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Update Documentation",
                taskDescription: "Review and update the project documentation.",
                taskDate: "2025-01-18",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Marketing Campaign",
                taskDescription: "Plan and execute a new marketing campaign.",
                taskDate: "2025-01-15",
                category: "Marketing"
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => { 
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}   

export const getLocalStorage = () => {
    const employees = localStorage.getItem("employees");

    const admin = localStorage.getItem("admin");
    return { employees, admin };
}