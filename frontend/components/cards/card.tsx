import Image from "next/image";
import Link from "next/link";
import { Domain } from "@/types/domain";
import { FC, ReactNode } from "react";

interface CardProps {
    domain: Domain;
}

const Card: FC<CardProps> = ({ domain }) => {
    const width = 500;
    const height = 500;

    const link = "/doman/" + domain.name.split('.')[0];

    return (
        <>
            <Link href={link} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image className="h-full w-full object-cover object-center group-hover:opacity-75" width={width} height={height} src="/image-1.jpg" alt="" />
                </div>
                <div className="flex flex-row pt-2 justify-between">
                    <p className="text-lg font-medium text-gray-900">{ domain.name }</p>
                    <h3 className="mt-1 text-sm text-gray-700">{ domain.price + " " + domain.currency }</h3>
                </div>
            </Link>
        </>
    );
};

export default Card;