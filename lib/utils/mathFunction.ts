import moment from "moment";

export const getNumZero = (num) => {
    if (num) {
        num = +num || 0
        return num
    }
    return 0
}

export const numberWithSpace = (num) => {
    let separated_num = num.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)
    let res = ""
    for (var i = 0; i < separated_num.length; i++) {
        res += separated_num[i] + " "
    }
    return res;
}

export const roundNum = (num) => {
    if (num % 1 !== 0) {
        // return parseFloat(num).toFixed(2)
        return parseInt(num)
    }
    return num
}

export const calcMinutes = (totalSeconds) => {
    let mins = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds - mins * 60
    return `${mins}' ${seconds < 10 ? `0${seconds}` : seconds}''`
}

export const momentCalculator = (time, format) => {
    return moment(time, "YYYY-MM-DD HH:mm:ss Z").format(format)
}