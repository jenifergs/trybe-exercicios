export default interface Enrollable {
    enrollment: string;
    generateRegistration(): string;
}