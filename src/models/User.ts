import {Address} from "./Address";
import {Company} from "./Company";

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

    constructor(id: number, name: string, username: string, email: string, address: Address, phone: string, website: string, company: Company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }

    // Returns full contact information
    getContactInfo(): string {
        return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Website: ${this.website}`;
    }

    // Checks if the user's email is in a valid format
    isValidEmail(): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

    // Returns user's basic information in a formatted string
    getBasicInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Username: ${this.username}`;
    }

    // Returns the user's address in a formatted string
    getFormattedAddress(): string {
        return `${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`;
    }

    // Returns the user's company information in a formatted string
    getCompanyDetails(): string {
        return `Company: ${this.company.name}, Catchphrase: ${this.company.catchPhrase}`;
    }
}
