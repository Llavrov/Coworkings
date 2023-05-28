import { type ReactElement, useState } from 'react';
import CoworkingCard from '../../cards/CoworkingCard';
import CoworkingIcon, { Icon } from "../../cards/CoworkingIcon";
import CoworkingSelector from "./CoworkingSelector";
import CoworkingList from "../home/CoworkingList";
import Link from "next/link";

interface CoworkingPageProps {
    id: string | string[];
}

export default function CoworkingPage({ id }: CoworkingPageProps): ReactElement {
    const [algorithm, setAlgorithm] = useState('Длинное название алгоритма');
    const [isOpen, setOpen] = useState(false);
    const [algorithmTime, _setAlgorithmTime] = useState('4мс');

    async function handleAlgorithm() {
        await fetch('http://46.229.212.119:8000/cluster/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=uft-8',
            },
            body: JSON.stringify({
                coworking_id: 2,
                num_recommendations: 4,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return { error: true };
            })
            .then(res => console.log('## res', res));
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
                        <CoworkingCard picture="https://tech.takea.place/images/3/1.webp" />
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
                                <CoworkingSelector onClose={() => setOpen(false)} list={[ 'Длинное название алгоритма 1', 'Длинное название алгоритма 2', 'Длинное название алгоритма 3',]} onClick={setAlgorithm} />
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
                    <CoworkingList list={[1, 2, 3]} isLoaded={false} />
                </div>
                <div>
                    <h2 className="text-heading-l mb-4 mt-8 ">Время работы алгоритма</h2>
                    <h2 className="text-heading-l my-0 text-disabled">{algorithmTime}</h2>
                </div>
            </div>
        </div>
    );
}
