import { type ReactElement } from 'react';
import { CoworkingCardProps } from "../../cards/CoworkingCardProps";
import CoworkingCard from "../../cards/CoworkingCard";
import Link from "next/link";

interface CoworkingListProps {
    list: CoworkingCardProps[] | number[];
    isLoaded: boolean;
}

export default function CoworkingList({ list, isLoaded }: CoworkingListProps): ReactElement {
    return (
        <div className="w-full flex-wrap flex gap-3 justify-center">
            {
                list.map((card) => (
                    <Link key={`${card}_CoworkingCard`} href={'/coworking/12'} className="no-underline text-black" >
                        <CoworkingCard isLoaded={isLoaded} picture="https://tech.takea.place/images/3/1.webp" />
                    </Link>
                ))
            }
        </div>
    );
}
