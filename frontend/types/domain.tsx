
export type Domain = {
    id: number;
    name: string;
    price: number;
    currency: string;
    createdAt: string;
    updatedAt: string;
}

export type DomainArray = {
    domains: Domain[];
}