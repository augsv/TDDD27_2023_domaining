import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Image from "next/image";
import { ReactNode } from "react";
import Card from "../cards/card";
import { MyPageProps } from '@/pages/domaner';


const DomainList: React.FC<MyPageProps> = ({ domains }) => {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {domains.map((domain, index) => (
                        <Card key={index} props={domain.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default DomainList;