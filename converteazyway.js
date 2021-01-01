
function convertWeight(summation, unitWeight) {
    //your code here
    //console.log(summation, unitWeight)
    let nampung = summation.split('+')
    let SumRay = nampung.map(el => {
        return el.trim()
    })
    let output = []
    SumRay.forEach(each => {
        let spacesplitter = each.split(' ')
        output.push(spacesplitter)

    })

    let OutputWeight = 0

    output.forEach(el => {
        switch (el[1]) {
            case 'ton':
                OutputWeight += el[0] * 1000
                break;
            case 'kwintal':
                OutputWeight += el[0] * 100
                break;
            case 'kg':
                OutputWeight += +el[0]
                break;
            case 'ons':
                OutputWeight += el[0] / 10
                break;
            case 'hg':
                OutputWeight += el[0] / 100
                break;
            case 'g':
                OutputWeight += el[0] / 1000
                break;
            case 'dg':
                OutputWeight += el[0] / 10000
                break;
            case 'cg':
                OutputWeight += el[0] / 100000
                break;
            case 'mg':
                OutputWeight += el[0] / 1000000
                break;


        }

    })

    switch (unitWeight) {
        case 'ton':
            return ` ${OutputWeight /= 1000} ton`
            break;
        case 'kwintal':
            return ` ${OutputWeight /= 100} kwintal`
            break;
        case 'kg':
            return ` ${OutputWeight} kg`
            break;
        case 'ons':
            return ` ${OutputWeight *= 10} ons`
            break;
        case 'hg':
            return ` ${OutputWeight *= 100} hg`
            break;
        case 'g':
            return ` ${OutputWeight *= 1000} g`
            break;
        case 'dg':
            return ` ${OutputWeight *= 10000} dg`
            break;
        case 'cg':
            return ` ${OutputWeight *= 100000} cg`
            break;
        case 'mg':
            return ` ${OutputWeight *= 1000000} mg`
            break;

    }


}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg

console.log(convertWeight('1 ton +50 kwintal+350 ons', 'ons'))