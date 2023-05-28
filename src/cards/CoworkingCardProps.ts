export interface CoworkingCardProps {
    address: string;
    call_hint: string;
    cityCode: string;
    coordinates: Coordinates;
    countryCode: string;
    description: string;
    email: string;
    entry: Entry;
    id: number;
    name: string;
    opening_hours: OpeningHours;
    phone: string;
    photos: string[];
    places: Place[];
    rates_count: number;
    review_count: number;
    review_rate: number;
    review_tags: ReviewTag[];
    tags: CoworkingTag[];
    types: string[];
    underground: Underground[];
    wifi: Wifi;
}

interface Wifi {
    name: string;
    password: string;
}

interface Underground {
    line: string;
    name: string;
    walking_time: number;
}

interface CoworkingTag {
    id: string;
    comment?: string;
}

interface ReviewTag {
    count: number;
    id: number;
    long_text: string;
    positive: boolean;
    text: string;
    type: string;
}

interface Place {
    book_types: string[];
    description: string;
    id: number;
    name: string;
    photos: string[];
    price: number;
    stop_price: number;
    tags: Tag[];
    type: string;
}

interface Tag {
    id: string;
    name: string;
    show_in_card: boolean;
}

interface Coordinates {
    lat: number;
    lot: number;
}

interface Entry {
    description: string;
    info: string[];
}

interface OpeningHours {
    mon: OpeningHoursTime;
    tue: OpeningHoursTime;
    wed: OpeningHoursTime;
    thu: OpeningHoursTime;
    fri: OpeningHoursTime;
    sat: OpeningHoursTime;
    sun: OpeningHoursTime;
}

interface OpeningHoursTime {
    time: string;
}
