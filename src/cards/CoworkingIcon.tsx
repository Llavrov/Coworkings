import Image from 'next/image';
import { type ReactElement } from 'react';

interface CoworkingIconProps {
    icon: Icon;
    edgeLength?: number;
    className?: string;
}

export enum Icon {
    metro = '/metro.svg',
    star = '/star.svg',
    arrow = '/arrow.svg',
    arrowLeft = '/arrow-left.svg',
}

export default function CoworkingIcon({ icon, edgeLength = 24, className }: CoworkingIconProps): ReactElement {
    return (
        <div className={className} style={{ height: `${edgeLength}px`, width: `${edgeLength}px` }}>
            <Image src={`${process.env.PUBLIC_URL}${icon}`} width={edgeLength} height={edgeLength} alt={`Coworking icon ${icon}`} />
        </div>
    );
}
