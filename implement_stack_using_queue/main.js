
var MyStack = function() {
    this.pushQueue = [];
    this.popQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.pushQueue.push( x );
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {    
    while( this.pushQueue.length > 1 ){
        this.popQueue.push(this.pushQueue.shift());
    }

    const lastItemPushed = this.pushQueue.shift();

    while( this.popQueue.length > 0 ){
        this.pushQueue.push( this.popQueue.shift() );
    }

    return lastItemPushed;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while( this.pushQueue.length > 1 ){
        this.popQueue.push(this.pushQueue.shift());
    }

    const lastItemPushed = this.pushQueue[0];
    this.popQueue.push(this.pushQueue.shift());

    while( this.popQueue.length > 0 ){
        this.pushQueue.push( this.popQueue.shift() );
    }

    return lastItemPushed;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.pushQueue.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

let obj = new MyStack();
obj.push(1);
obj.push(2);

console.log( obj.pushQueue );
console.log( obj.top() );
console.log( obj.pushQueue );
console.log(obj.pop());
console.log( obj.pushQueue )