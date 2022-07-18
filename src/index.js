module.exports = function reverse (n) {
    if (n<0) {
        n=n*(-1);
        let l=n.toString();
        let splits=l.split('');
        let rev=splits.reverse();
        let newNum=Number(rev.join(''))
        console.log(newNum);
        return newNum;
    }
    else {let l=n.toString();
        let splits=l.split('');
        let rev=splits.reverse();
        let newNum=Number(rev.join(''));
        console.log(newNum);
        return newNum}
}
