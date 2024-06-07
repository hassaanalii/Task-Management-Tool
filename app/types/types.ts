export interface Task {
    id: string;
    name: string;
    description: string;
    date: string;
    isCompleted: boolean;
    isActive: boolean;
}

export interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (taskId: string) => void;
    markTaskAsCompleted: (taskId: string) => void;
}

export interface TaskCardProps {
    task: Task;
}

export interface ToDoBannerProps {
    setFilter: (filter: string) => void;
}


export interface StatusCardProps {
    title: string;
    count: number;
    color: string;
}
