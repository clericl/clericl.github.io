export const find = word => {
    return state.find(datum =>
        datum.word === word &&
        datum.rel === "from" &&
        datum.targetWord.slice(0, 1) !== "-"
    );
}