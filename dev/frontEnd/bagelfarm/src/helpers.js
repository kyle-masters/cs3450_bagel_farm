export const dateTime = (timeStamp) => {
    var newDate = new Date(timeStamp)
    return newDate.toLocaleDateString() + " " + newDate.toLocaleTimeString()
}

export const date = (timeStamp) => {
    var newDate = new Date(timeStamp)
    return newDate.toLocaleDateString()
}

export const money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});