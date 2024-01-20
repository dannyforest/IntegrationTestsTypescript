import axios, {AxiosResponse} from 'axios';
import { User } from '../models/User';

export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async getUsers(): Promise<User[]> {
        try {
            // Perform the GET request and cast the response to the expected type
            const response = await axios.get(`${this.baseUrl}/users`) as AxiosResponse<User[]>;
            return response.data; // response.data is now treated as User[]
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    // Fakes saving changes to a user instance
    public async saveUserChanges(user: User): Promise<User> {
        console.log(`Saving changes to user: ${user.id}`);

        // Simulate an API call with a delay
        const simulateApiCall = new Promise<User>((resolve) => {
            setTimeout(() => {
                console.log(`Changes to user: ${user.id} have been saved.`);
                resolve(user); // Return the user object as if it was saved
            }, 1000); // Simulate delay of 1 second
        });

        return simulateApiCall;
    }
}
