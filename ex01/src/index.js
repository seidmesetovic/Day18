let myArr = [];

function* multiplicaton(x) {

    for (var i = x + 1; i >= 0; i--) {

        x *= 2;

        myArr.push(x);
        yield x;


    }

}


var num = multiplicaton(3);
for (i = 0; i < 3; i++) {
    console.log(num.next().value);
}
module.exports = multiplicaton;