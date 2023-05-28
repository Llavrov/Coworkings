import Image from 'next/image';
import { type ReactElement } from 'react';

interface CoworkingIconProps {
    icon: Icon;
    edgeLength?: number;
}

export enum Icon {
    metro = '/metro.svg',
    star = '/star.svg',
    arrow = '/arrow.svg',
}

export default function CoworkingIcon({ icon, edgeLength = 24 }: CoworkingIconProps): ReactElement {
    return (
        <div style={{ height: `${edgeLength}px`, width: `${edgeLength}px` }}>
            <Image src={icon} width={edgeLength} height={edgeLength} alt={`Coworking icon ${icon}`} />
        </div>
    );
}
