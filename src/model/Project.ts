export default interface Project {
    name: string;
    description?: string;
    label?: string;
    category?: string;
    priority: number;
    _id?: string;
    completed?: boolean;
    username?: string;
}