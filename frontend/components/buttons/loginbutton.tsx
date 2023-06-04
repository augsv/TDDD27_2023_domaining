import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function LoginButton() {
    const { user, isLoading, error } = useUser();

    if (isLoading) {
        return <div>Laddar...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    if (user) {
        return (
            <div className="flex flex-col">
                <Link href="/profil" className="text-sm font-semibold leading-6 text-gray-900">{user.name}</Link>
                { /* eslint-disable */ }
                <a href="/api/auth/logout" className="float-right text-sm font-semibold leading-6 text-gray-900">
                    <span aria-hidden="true" className="lg:float-right">&rarr;</span>
                    <span className="float-left lg:float-right">Logga ut</span> 
                </a>
                { /* eslint-enable */ }
            </div>
        );
    }

    return (
        <>
            { /* eslint-disable */ }
            <a href="/api/auth/login" className="text-sm font-semibold leading-6 text-gray-900">
                Logga in <span aria-hidden="true">&rarr;</span>
            </a>
            { /* eslint-enable */ }
        </>
    );
}