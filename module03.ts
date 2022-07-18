
// estableser el destino en ES3 para este ejemplo.

// La interfaz descrive lo que se espera de la API y lo que se obtendra de esta
/* interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();

    return body as Post[] // se establece el contrato con la respuesta
}

async function showPost() {
    const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
    let posts = await fetchPosts(fetchURL);

    let post = posts[0];
    console.log('Post #' + post.id)

    
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost(); */

interface Loan {
    principal: number
    interestRate: number
}

interface ConventionalLoan extends Loan {
    months: number
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    let interest: number = loanTerms.interestRate / 1200; 
    let payment: number = loanTerms.principal * interest;
    
    return 'The interest only loan payment is ' + payment.toFixed(2);
}


function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    let interest: number = loanTerms.interestRate/ 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment: string = calculateInterestOnlyLoanPayment({
    interestRate: 30000, 
    principal: 5
})

let conventionalPayment: string = calculateConventionalLoanPayment({
    interestRate: 30000,
    principal: 5,
    months: 180
})

console.log(interestOnlyPayment)
console.log(conventionalPayment)