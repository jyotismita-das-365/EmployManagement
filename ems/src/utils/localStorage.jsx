const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Landing Page",
        description: "Create UI for homepage",
        date: "2026-04-03",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue",
        date: "2026-04-02",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Git Repo",
        description: "Initialize project repo",
        date: "2026-04-01",
        category: "Setup"
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
        title: "API Integration",
        description: "Connect frontend with backend",
        date: "2026-04-03",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Documentation",
        description: "Prepare API docs",
        date: "2026-04-01",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug Fix Payment",
        description: "Fix payment gateway issue",
        date: "2026-03-30",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create Dashboard",
        description: "Build admin dashboard UI",
        date: "2026-04-02",
        category: "UI"
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
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Schema",
        description: "Design MongoDB schema",
        date: "2026-04-03",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Install Dependencies",
        description: "Setup project packages",
        date: "2026-04-01",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Test Login",
        description: "Check login errors",
        date: "2026-03-29",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize Images",
        description: "Reduce image sizes",
        date: "2026-04-03",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "SEO Setup",
        description: "Add meta tags",
        date: "2026-04-02",
        category: "SEO"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy Website",
        description: "Deploy on Vercel",
        date: "2026-04-01",
        category: "Deployment"
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
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Forms",
        description: "Build contact form",
        date: "2026-04-03",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix CSS Issues",
        description: "Resolve styling bugs",
        date: "2026-04-01",
        category: "CSS"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Validation Error",
        description: "Fix form validation",
        date: "2026-03-30",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Animations",
        description: "Implement UI animations",
        date: "2026-04-02",
        category: "UI"
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "email": "a@e.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  console.log(employees, admin)
}