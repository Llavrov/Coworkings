import {type ReactElement, useEffect, useState} from 'react';
import CoworkingList from "./CoworkingList";
import {getAllCoworking} from "../../utils/handlers/getAllCoworking";
import {CoworkingCardProps} from "../../cards/CoworkingCardProps";

export default function HomePage(): ReactElement {
    const [coworking, setCoworking] = useState<number[] | CoworkingCardProps[]>([1, 2, 3]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllCoworking().then((res: {success: CoworkingCardProps[], time: any}) => {
            setLoaded(true);
            setCoworking(res.success);
        });
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1170px] mt-15 p-4 box-border">
                <h1 className="text-heading-xxl m-0 pb-10">
                    Выберите коворкинг
                </h1>
                <CoworkingList list={coworking} isLoaded={loaded} />
            </div>
        </div>
    );
}
