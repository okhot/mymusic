export function saveToStorage(key, value) {
    let valueToSave;
    try {
        valueToSave = JSON.stringify(value);  
    } catch(e) {
        valueToSave = value;
    } finally {
        localStorage.setItem(key, valueToSave);
    }
}

export function getFromStorage(key) {
    let value = localStorage.getItem(key);

    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
}