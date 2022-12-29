function solve(array) {
    array.sort(twoCriteriesSort);

    function twoCriteriesSort(current, next) {
        if(current.length === next.length) {
            return current.localeCompare(next);
        } else {
            return current.length - next.length;
        }
    }
    return array.join('\n');
}

console.log(solve(['alpha', 
'beta', 
'gamma']
));

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)
solve(['test', 
'Deny', 
'omen', 
'Default']
)