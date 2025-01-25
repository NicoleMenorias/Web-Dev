//Sum Square Difference

//function to calculate sum square difference
function ss_diff(input){
    let sum_of_sqr = 0;
    let sum = 0;

    //sum of the squares
    for (let i = 1; i <= input; i++) {
        sum_of_sqr += i ** 2;
        sum += i;  
      }

    //square of the sum
    let sqr_of_sum = sum ** 2;
    let diff = sqr_of_sum - sum_of_sqr;

    //difference between the sum of the squares and square of the sum
    return diff;
}

//call function with input
console.log(ss_diff(10));
