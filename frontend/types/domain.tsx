
export type Domain = {
    id: number;
    name: string;
    price: number;
    slug: string;
    soldAt?: string | null;
    currency: string;
    createdAt: string;
    updatedAt: string;
}

export type DomainArray = {
    domains: Domain[];
}