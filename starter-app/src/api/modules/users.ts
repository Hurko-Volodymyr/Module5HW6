
import apiClient from '../client';

export const getById = (id: string) => apiClient({
    path: `users/${id}`,
    method: 'GET'
});

export const getByPage = (page: number) => apiClient({
    path: `users?page=${page}`,
    method: 'GET'
});

export const createUser = ({ name, job }: { name: string, job: string }) => apiClient({
    path: `users`,
    method: 'POST',
    data: { name, job }
});

export const updateUser = ({ id, name, job }: { id: string, name: string, job: string }) => apiClient({
    path: `users/${id}`,
    method: 'PUT',
    data: { id, name, job }
});