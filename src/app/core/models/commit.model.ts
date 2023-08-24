export interface Commit {
    sha: string;
    message: string;
    commitUrl: string;
    date: string;
    author: Author;
}

export interface Author {
    id: number;
    login: string;
    name: string;
    email: string;
    avatar: string;
}