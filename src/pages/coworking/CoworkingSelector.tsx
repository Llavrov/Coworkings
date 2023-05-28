import Image from 'next/image';
import { type ReactElement } from 'react';

interface CoworkingSelectorProps {
    list: string[];
    onClick: (algorithm: string) => void;
}

export default function CoworkingSelector({ list, onClick }: CoworkingSelectorProps): ReactElement {
    return (
        <div className="flex bg-white flex-col absolute rounded-4 flex top-[65px] left-0 w-[353px] shadow-primary">
            {list.map((algorithm) => (
                <div className="p-4 cursor-pointer hover:bg-base" onClick={() => onClick(algorithm)}>
                    <p className="m-0">{algorithm}</p>
                </div>
            ))}
        </div>
    );
}
