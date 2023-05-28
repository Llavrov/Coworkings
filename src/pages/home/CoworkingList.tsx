import { type ReactElement } from 'react';
import { CoworkingCardProps } from "../../cards/CoworkingCardProps";
import CoworkingCard from "../../cards/CoworkingCard";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

interface CoworkingListProps {
    list: CoworkingCardProps[] | number[];
    isLoaded: boolean;
}

export default function CoworkingList({ list, isLoaded }: CoworkingListProps): ReactElement {
    return (
        <div className="w-full flex-wrap flex gap-3 justify-start">
            {
                list.map((card) => (
                    <div key={isLoaded ? card.id : `${card}_CoworkingCard`}>
                        {
                            isLoaded ? (
                                <Link href={`/coworking/${card.id}`} className="no-underline text-black" >
                                    <CoworkingCard isLoaded={isLoaded} info={card} />
                                </Link>
                            ) : (
                                <div className="w-[353px] flex flex-col justify-between rounded-4 p-2 overflow-hidden cursor-pointer active:shadow-primary">
                                    <Skeleton height={245} />
                                    <div className="w-full flex justify-between mt-4">
                                        <Skeleton width={160} />
                                        <Skeleton width={80}/>
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <Skeleton width={120} />
                                        <Skeleton width={100}/>
                                    </div>
                                    <Skeleton width={60} />
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
}
