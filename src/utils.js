//const dateToTimestamp = (date) => date.valueOff;
const dateToTimestamp = (date) => date.getTime();

const timestampToDate = (currentTimestamp) => new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp);

const timestampToIsoDate = (ts) => new Date(ts);

export {
    dateToTimestamp,
    timestampToDate,
    timestampToIsoDate
}