import { type ReactElement } from 'react';
import CoworkingList from "./CoworkingList";

export default function HomePage(): ReactElement {

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1170px] mt-15 p-4 box-border">
                <h1 className="text-heading-xxl m-0 pb-10">
                    Выберите коворкинг
                </h1>
                <CoworkingList list={[1, 2, 3]} isLoaded={true} />
            </div>
        </div>
    );
}
