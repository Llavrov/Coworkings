import Image from 'next/image';
import {type ReactElement, useEffect} from 'react';

interface CoworkingSelectorProps {
    list: string[];
    onClick: (algorithm: string) => void;
    onClose: () => void;
}

export default function CoworkingSelector({ list, onClick, onClose }: CoworkingSelectorProps): ReactElement {

    useEffect(() => {
        document.addEventListener('click', (event) => {
            const classList = [...(event.target as HTMLElement).classList];
            const parentClassList = [...(event.target as HTMLElement).parentElement.classList];

            if (!classList.includes('CoworkingSelector') && !parentClassList.includes('CoworkingSelector')) {
                onClose();
            }
        })
    });

    return (
        <div className="CoworkingSelector flex bg-white flex-col absolute rounded-4 flex top-[65px] left-0 w-[353px] shadow-primary">
            {list.map((algorithm, index) => (
                <div key={`${algorithm}__${index}`} className="CoworkingSelector p-4 cursor-pointer hover:bg-base" onClick={() => onClick(algorithm)}>
                    <p className="CoworkingSelector m-0">{algorithm}</p>
                </div>
            ))}
        </div>
    );
}
