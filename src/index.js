module.exports = function toReadable(number) {
    let dict = {
        0: ['zero'],
        1: ['one', 'eleven'],
        2: ['two', 'twelve', 'twenty'],
        3: ['three', 'thir'],
        4: ['four', 'four', 'for'],
        5: ['five', 'fif'],
        6: ['six', 'six'],
        7: ['seven', 'seven'],
        8: ['eight', 'eigh'],
        9: ['nine', 'nine'],
        10: ['ten'],
    }
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - hundreds * 100) / 10);
    let ones = number - (hundreds * 100 + tens * 10);
    let outputStr = ''

    if (hundreds !== 0) {
        outputStr += dict[hundreds][0] + ' hundred'
    }
    if (tens !== 0 && tens !== 1 && tens !== 2 && tens !== 4) {
        outputStr += ' ' + dict[tens][1] + 'ty'
    } else if (tens === 2) {
        outputStr += ' ' + dict[tens][2]
    } else if (tens === 4) {
        outputStr += ' ' + dict[tens][2] + 'ty'
    } else if (tens === 1) {
        if (ones === 0) {
            outputStr += ' ' + dict[10];
        } else if (ones === 1 || ones === 2) {
            outputStr += ' ' + dict[ones][1];
        } else {
            outputStr += ' ' + dict[ones][1] + 'teen';
        }
    }
    if (ones !== 0 && tens !== 1) {
        outputStr += ' ' + dict[ones][0];
    } else if (ones === 0 && tens === 0 && hundreds === 0) {
        outputStr += dict[0];
    }
    return outputStr.trim()
}
