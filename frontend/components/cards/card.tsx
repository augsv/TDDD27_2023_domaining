import Image from "next/image";
import { Domain } from "@/types/domain";
import { FC, ReactNode } from "react";

interface CardProps {
    domain: Domain;
}

const Card: FC<CardProps> = ({ domain }) => {
    const width = 500
    const height = 500

    return (
        <>
            <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image className="h-full w-full object-cover object-center group-hover:opacity-75" width={width} height={height} src="/image-1.jpg" alt="" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{ domain.name }</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{ domain.price + " " + domain.currency }</p>
            </a>
        </>
    );
};

export default Card;