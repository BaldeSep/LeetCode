var addTwoNumbers = function(l1, l2) {
    let cursor1 = l1;
    let cursor2 = l2;
    
    let newListHead = new ListNode();
    let newListCursor = newListHead;
    
    let carryOver = 0;
    while( cursor1 !== null || cursor2 !== null ){
        let sum = 0;
        
        if( cursor1 === null ){
            sum = cursor2.val + carryOver;
        }else if( cursor2 === null ){
            sum = cursor1.val + carryOver;
        }else{
            sum = cursor1.val + cursor2.val + carryOver;
        }
        
        let remainder = sum % 10;

        carryOver = Math.floor(sum / 10);

        newListCursor.val = remainder;

        if( cursor1 === null ){
            cursor2 = cursor2.next;
        }else if(cursor2 === null){
            cursor1 = cursor1.next;
        }else{
            cursor1 = cursor1.next;
            cursor2 = cursor2.next;
        }

        if( cursor1 !== null || cursor2 !== null ){
            newListCursor.next = new ListNode();
            newListCursor = newListCursor.next;
        }else if( carryOver > 0 ){
            newListCursor.next = new ListNode( carryOver, null );
        }
    }
    
    return newListHead;
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let l1 = new ListNode( 2, new ListNode( 4, new ListNode( 3, null) ) );
let l2 = new ListNode( 5, new ListNode( 6, new ListNode( 4, null) ) );
// let l1 = new ListNode();
// let l2 = new ListNode();
// let l1 = new ListNode( 9, new ListNode( 9, new ListNode( 9, new ListNode( 9, new ListNode(9, new ListNode(9, new ListNode(9, null))) ) ) ) );
// let l2 = new ListNode( 9, new ListNode( 9, new ListNode( 9, new ListNode(9, null)) ) );


let list = addTwoNumbers( l1, l2 );

let cursor = list;
let printString = [];
while( cursor !== null ){

    printString.push(cursor.val)

    cursor = cursor.next;
}

console.log( printString )