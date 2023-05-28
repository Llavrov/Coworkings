import {type ReactElement, useEffect, useState} from 'react';
import CoworkingCard from '../../cards/CoworkingCard';
import CoworkingIcon, { Icon } from "../../cards/CoworkingIcon";
import CoworkingSelector from "./CoworkingSelector";
import CoworkingList from "../home/CoworkingList";
import Link from "next/link";
import {getAlgorithmById, saveAlgorithmById} from "../../utils/saveToLocalStorage";
import {algorithmHandler} from "../../utils/handlers/algorithmHandler";
import {getAllCoworking} from "../../utils/handlers/getAllCoworking";
import {CoworkingCardProps} from "../../cards/CoworkingCardProps";
import Skeleton from "react-loading-skeleton";

interface CoworkingPageProps {
    id: string | string[];
}

const ALGORITHMS = {
    'Hamming': 'hamming',
    'Euclid lite': 'euclid',
    'Euclid pro': 'euclid_pro',
    'Cluster': 'cluster'
}

export default function CoworkingPage({ id }: CoworkingPageProps): ReactElement {
    const initAlgorithm = getAlgorithmById(id, 'Длинное название алгоритма');

    const [actualCoworking, setActualCoworking] = useState<CoworkingCardProps | null>(null);
    const [loadedActualCoworking, setLoadedActualCoworking] = useState(false);
    const [algorithm, setAlgorithm] = useState(initAlgorithm);
    const [isOpen, setOpen] = useState(false);
    const [algorithmTime, setAlgorithmTime] = useState('0 мс');
    const [coworkingArray, setCoworkingArray] = useState([1, 2, 3]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllCoworking().then((res: {success: CoworkingCardProps[], time: any}) => {
            const result = res.success.find(coworking => coworking.id === Number(id));
            if (result) {
                setActualCoworking(result)
                setLoadedActualCoworking(true);
            }
        });
        setAlgorithm(getAlgorithmById(id, 'Длинное название алгоритма'));
    }, [id]);

    async function handleAlgorithm() {
        const data = {
            coworking_id: Number(id),
            num_recommendations: 4,
        };

        if (ALGORITHMS[algorithm]) {
            algorithmHandler(data, ALGORITHMS[algorithm])
                .then((res: { success: any, time: any }) => {
                    setCoworkingArray(res.success);
                    setAlgorithmTime(`${(res.time * 1000).toFixed(2)} мс`);
                    setLoaded(true);
                })
        }
    }

    function handleSetAlgorithm(value: string) {
        saveAlgorithmById(value, id)
        setAlgorithm(value);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1170px] mt-15 mb-[120px] p-4 box-border">
                <Link href={'/'} className="no-underline">
                    <div className="flex gap-2 mb-6 cursor-pointer">
                        <CoworkingIcon icon={Icon.arrowLeft} edgeLength={12} />
                        <p className="m-0 text-[#009F9F] hover:text-[#086F6F]">Назад</p>
                    </div>
                </Link>
                <div className="flex flex-row relative h-[400px]">
                    <div className="w-1/2">
                        <h1 className="text-heading-l m-0">Коворкинг</h1>
                        <p className="text-heading-ss m-0 max-w-[420px]">
                            Коворкинг, для которого будет выполнять алгоритм поиска похожих объектов
                        </p>
                    </div>
                    <div className="h-full w-[1px] bg-border" />
                    <div className="w-1/2 flex justify-center items-center">
                        {loadedActualCoworking ?
                            (
                                <CoworkingCard info={actualCoworking} isLoaded/>
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
                </div>
                <div className="h-[1px] w-full bg-border" />
                <div className="flex flex-row relative h-[300px]">
                    <div className="w-1/2 py-15 box-border">
                        <h2 className="text-heading-l m-0">Алгоритм</h2>
                        <p className="text-heading-ss m-0 max-w-[430px]">
                            Выберите алгоритм, который будет применяться к коворкингу
                        </p>
                    </div>
                    <div className="h-full w-[1px] bg-border" />
                    <div className="w-1/2 flex justify-center pt-15">
                        <div onClick={() => setOpen(!isOpen)} className="relative w-[353px] h-[60px]">
                            <div className="CoworkingSelector relative flex justify-between cursor-pointer hover:shadow-active active:bg-border px-4 box-border items-center w-[353px] h-[60px] bg-base rounded-4">
                                <p className="CoworkingSelector m-0">{algorithm}</p>
                                <div className="CoworkingSelector mt-[-10px]">
                                    <CoworkingIcon icon={Icon.arrow} edgeLength={10} className={'CoworkingSelector'} />
                                </div>
                            </div>
                            {isOpen && (
                                <CoworkingSelector
                                    onClose={() => setOpen(false)}
                                    list={[ 'Hamming', 'Euclid lite', 'Euclid pro', 'Cluster' ]}
                                    onClick={handleSetAlgorithm}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-border" />
                <div>
                    <div onClick={handleAlgorithm} className="flex justify-center my-15 cursor-pointer box-border items-center w-[353px] h-[70px] bg-black rounded-4">
                        <p className="m-0 text-white">Выполнить алгоритм</p>
                    </div>
                    <h2 className="text-heading-l my-8 ">Результат работы алгоритма</h2>
                    <CoworkingList list={coworkingArray} isLoaded={loaded} />
                </div>
                <div>
                    <h2 className="text-heading-l mb-4 mt-8 ">Время работы алгоритма</h2>
                    <h2 className="text-heading-l my-0 text-disabled">{algorithmTime}</h2>
                </div>
            </div>
        </div>
    );
}
