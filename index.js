const sheep = function(sheepTotal) {
    if (sheepTotal === 0) {
         return `All sheep jumped over the fence.`
    } return `${sheepTotal}: Another sheep jumps the fence, ` + sheep(sheepTotal - 1)
}

const powerCalculator = function(base, exponent) {
    if (exponent <= 0) {
        return `exponent shouold be >= 0`
    } 
    if(exponent === 1) {
        return base
    }
        return base * powerCalculator(base, (exponent - 1))
}

const reverseString = function(str) {
    if(str.length === 0) {
        return ''
    } return `${str.slice(-1)}` + reverseString(str.slice(0, -1))
}

const triangularNumber = function(n) {
    if(n === 1) {
        return n
    } return n + triangularNumber(n-1)
}


//evaluate at each character if it is the separator...
//not finished
const stringSplitter = function(str, separator) {
    let array = [];
    let letterGroup;
    
    if(str.charAt(0) !== separator) {
        letterGroup = `${str.charAt(0)}` + stringSplitter((str.slice(0, 1)), separator)
        array.push(letterGroup);
    } 
    letterGroup = " "
    array.push(letterGroup)
    
    return array
}

const fibonacci = function(n) {
    if (n === 1) {
        return [0, 1]
    } else {
        sum = fibonacci(n - 1)
        sum.push(sum[sum.length -1] + sum[sum.length - 2]);
        return sum
   
}
}

const factorial = function(n) {
    let sum = 1;
    if( n >= 1 ) {
        sum = n * factorial(n -1)
    } return sum
}


const maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//seriously? this one is kind of hard and I don't have the time...

const escapeMaze = function(maze, level, position) {
   
    newLevel = level + 0;
    newPosition = position + 0;
    //check right, if blocked, go down
    if(maze[level][position + 1] === ' ') {
        return "R" + escapeMaze(maze, newLevel, newPosition + 1) 
        }

    if(maze[level + 1][position] === ' ') {
            return "D" + escapeMaze(maze, newLevel + 1, position)
        }

    if(maze[level][position -1] === ' ') {
            return "L" + escapeMaze(maze, newLevel, newPosition - 1)
        }

    if(maze[level - 1][position] === ' ') {
            return "U" + escapeMaze(maze, newLevel - 1, position)
        } 
        
    if(maze[level][postition] === 'e') {
        return "Done"
    }
  

    }
        

    const anagrams = function(str) {
        if(str.length === 1) {
            return str
        }
         

    }