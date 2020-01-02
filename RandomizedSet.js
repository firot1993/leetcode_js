/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.index = {};
    this.data = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.index[val]==undefined){
        this.data.push(val);
        this.index[val] = this.data.length - 1;
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    var valIndex = this.index[val];
    if (valIndex == undefined) return false;
    if (this.data.length - 1 == valIndex) {
        this.index[val] = undefined;
        this.data.pop();
    } else {
        var newVal = this.data.pop();
        this.index[val] = undefined;
        this.data[valIndex] = newVal;
        this.index[newVal] = valIndex;
    }
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.data[parseInt(Math.random() *10000) % this.data.length];
};
