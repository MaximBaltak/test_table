//функция для форматировании даты
export function formatDate(date: Date): string {
    if (date.getMonth() >= 10) {
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} г.`
    } else {
        return `${date.getDate()}.0${date.getMonth()}.${date.getFullYear()} г.`
    }
}
