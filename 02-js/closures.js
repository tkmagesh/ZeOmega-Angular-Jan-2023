var counter = /* **** */
counter.up() //=> 1
counter.up() //=> 2
counter.up() //=> 3
counter.up() //=> 4

counter.down() //=> 3
counter.down() //=> 2
counter.down() //=> 1
counter.down() //=> 0
counter.down() //=> -1

IMPORTANT:
    One should not be able to manipulate the counter value bypassing the Up and Down methods


var counter = {
    count : 0,
    up : function(){
        return ++this.count;
    },
    down : function(){
        return --this.count;
    }
}

function getCounter(){
    var count = 0
    
    function up(){
        return ++count;
    }
    
    function down(){
        return --count;
    }
    
    var counter = {
        up : up,
        down : down
    }

    return counter
}