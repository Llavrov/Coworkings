import {type ReactElement} from 'react';
import Image from "next/image";
import CoworkingIcon, {Icon} from "./CoworkingIcon";

export interface CoworkingCardProps {
    title?: string;
    price?: number;
    address?: string;
    picture?: string;
    stop_price?: number;
    review_rate?: number;
}

export default function CoworkingCard({
    title = 'Headway',
    price = 400,
    stop_price = 2400,
    review_rate = 5.0,
    address = 'Бульвар Дми...,',
    picture,
}: CoworkingCardProps): ReactElement {
    return (
        <div className="w-[353px] flex flex-col justify-between rounded-4 p-2 overflow-hidden cursor-pointer active:shadow-primary">
            <Image
                className="rounded-4"
                style={{ width: '100%', height: '245px', objectPosition: 'top', objectFit: 'cover' }}
                src={`${process.env.PUBLIC_URL}${picture}`}
                alt={picture}
                priority={false}
                width={353}
                height={245}
            />
            <div className="mt-4 gap-1">
                <div className="flex w-full justify-between">
                    <p className="text-heading-ss-bold m-0">{title}</p>
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
                    <p className="m-0 text-sm-bold ">{review_rate}</p>
                </div>
            </div>
        </div>
    );
}
