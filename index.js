const obj = new Object();

obj.firstFunction = function() {

    this.secondFunction = function(x, y) {
        return x + y
    }

}

const varExport = new obj.firstFunction();
module.exports = varExport