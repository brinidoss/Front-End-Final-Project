// export default interface Project {
//     name: string;
//     description?: string;
//     label?: string;
//     category?: string;
//     priority: number;
//     _id?: string;
//     outdoor?: boolean;
//     completed?: boolean;
//     username?: string;
// }

export default interface Project {
    category: {
        name: string;
        description?: string;
        label?: string;
        priority: number;
        _id?: string;
        outdoor?: boolean;
        completed?: boolean;
        username?: string;
    }
}

