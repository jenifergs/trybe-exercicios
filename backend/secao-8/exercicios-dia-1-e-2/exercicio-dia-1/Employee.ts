export default interface Employee {
    _registration: string;
    _salary: number;
    _admissionDate: Date;
    generateRegistration(): string;
}