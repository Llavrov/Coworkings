import {type ReactElement, useState} from 'react';
import Image from "next/image";
import CoworkingIcon, {Icon} from "./CoworkingIcon";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import {CoworkingCardProps} from "./CoworkingCardProps";

export interface ICoworkingCardProps {
    info: CoworkingCardProps;
    isLoaded: boolean;
}

export default function CoworkingCard({
    info,
    isLoaded,
}: ICoworkingCardProps): ReactElement {
    const { photos, places, address, review_rate } = info;
    const { name, stop_price, price } = places[0];

    return (
        <div className="w-[353px] flex flex-col justify-between rounded-4 p-2 overflow-hidden cursor-pointer active:shadow-primary">
            {isLoaded ? (
                <>
                    <Image
                        className="rounded-4"
                        style={{width: '100%', height: '245px', objectPosition: 'top', objectFit: 'cover'}}
                        src={photos && photos[0]}
                        alt={photos && photos[0]}
                        priority={false}
                        width={353}
                        height={245}
                    />
                    <div className="mt-4 gap-1">
                        <div className="flex w-full justify-between">
                            <p className="text-heading-ss-bold m-0">{name}</p>
                            <p className="m-0"><span className="text-heading-ss-bold m-0">от {price} ₽</span>/час</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex gap-2 items-center">
                                <CoworkingIcon icon={Icon.metro} edgeLength={16} />
                                <p className="m-0 text-text-sm">{address}</p>
                            </div>
                            <p className="m-0"><span className="text-text-sm">от {stop_price} ₽</span>/день</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <CoworkingIcon icon={Icon.star} edgeLength={16} />
                            <p className="m-0 text-sm-bold ">{review_rate ?? 0}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}
