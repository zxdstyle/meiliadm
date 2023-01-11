export function setStorage(key: string, value: Record<any, any>) {
    const content = JSON.stringify(value);
    localStorage.setItem(key, content);
}

export function getStorage(key: string) {
    const content = localStorage.getItem(key);
    if (!content) return content;

    return JSON.parse(content);
}

export function removeStorage(key: string) {
    localStorage.removeItem(key);
}
