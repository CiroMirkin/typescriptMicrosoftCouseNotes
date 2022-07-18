/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

{
    let x: string
    let y: number
    let a: number = 0

    x = 'five';
    y = 7;
    a = 5 + y;

    console.log(a);
}

/* EXERCISE 3
TODO: In the following code, implement an enum type called Season that represents 
the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
you can pass in the season by referencing an item in the enum, for example 
Season.Fall, instead of the literal string "Fall". */

{

    enum Season {
        "Fall", "Winter", "Spring", "Summer"
    }

    function whichMonths(season: Season): string {
        let monthsInSeason: string;

        switch (season) {
            case Season.Fall:
                monthsInSeason = "September to November";
                break;
            case Season.Winter:
                monthsInSeason = "December to February";
                break;
            case Season.Spring:
                monthsInSeason = "March to May";
                break;
            case Season.Summer:
                monthsInSeason = "June to August";
        }
        return monthsInSeason
    }

    console.log(whichMonths(0));
}

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

{
    let randomNumbers: number[] = []
    let nextNumber;
    for (let i = 0; i < 10; i++) {
        nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        randomNumbers.push(nextNumber);
    }

    console.log(randomNumbers);
}