function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

function snapCrackle(maxValue) {
    if (maxValue === 0) {
        return ''
    }

    let str = "Snap"

    for (let i = 2; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 !== 0) {
            str += ", Snap"
        } else if (i % 2 === 0 && i % 5 === 0) {
            str += ", Crackle"
        } else if (i % 2 !== 0 && i % 5 === 0) {
            str += ", SnapCrackle"
        } else {
            str += `, ${i}`
        }
    }
    return str
}

function snapCracklePrime(maxValue) {
    if (maxValue === 0) {
        return ""
    }
    if (maxValue === 1) {
        return "Snap"
    }

    let str = "Snap, Prime"

    for (let i = 3; i <= maxValue; i++) {
        let flag = false

        if (i % 2 !== 0 && i % 5 !== 0) {
            str += ", Snap"
            flag = true
        } else if (i % 2 === 0 && i % 5 === 0) {
            str += ", Crackle"
            flag = true
        } else if (i % 2 !== 0 && i % 5 === 0) {
            str += ", SnapCrackle"
            flag = true
        }

        if (isPrime(i)) {
            str += "Prime"
        }
        if (!flag) {
            str += `, ${i}`
        }
    }
    return str
}


console.log(snapCrackle(15))
console.log(snapCracklePrime(23))