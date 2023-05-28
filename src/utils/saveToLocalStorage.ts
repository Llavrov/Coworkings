export const storage = {
    get: (key: string, defaultValue?: string): string | null => {
        try {
            const result = localStorage.getItem(key)
            if (!result) return defaultValue
            try {
                return JSON.parse(result)
            } catch {
                return result
            }
        } catch {
            return defaultValue
        }
    },
    set: (key: string, value: string | {} | []): void => {
        try {
            localStorage.setItem(
                key,
                typeof value === 'string' ? value : JSON.stringify(value)
            )
        } catch {
            return null
        }
    },
    clear: (): void => {
        localStorage.clear()
    }
}

export function saveAlgorithmById(algorithm: string, id: string | string[]) {
    try {
        storage.set(`algorithm__${id}`, algorithm)
    } catch (e) {
        console.log('### e: ', e);
    }
}

export function getAlgorithmById(id: string | string[], defaultValue?: string) {
    try {
        return storage.get(`algorithm__${id}`, defaultValue);
    } catch (e) {
        console.log('### e: ', e);
    }
}


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}