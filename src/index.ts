import { ApiClient } from './api/ApiClient';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const apiClient = new ApiClient(baseUrl);

apiClient.getUsers().then(users => {
    console.log('Users:', users);
}).catch(error => {
    console.error('An error occurred:', error);
});
