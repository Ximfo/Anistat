export function calcBars(filter) {

    const labels = [];
    for (let i = 0; i < filter.length; i++) {
        if (!labels.includes(filter[i])) {
            labels.push(filter[i])
        }
    }
    labels.sort();
    let QtyResult = [];
    for (let i = 0; i < labels.length; i++) {
        QtyResult[i] = [];
        for (let j = 0; j < filter.length; j++) {
            if (filter[j] === labels[i]) {
                QtyResult[i].push(filter[j])
            }
        }
    }

    console.log(filter, labels, QtyResult)
    return {labels, QtyResult}
}