function solve(arr, criteria) {
    class Ticked {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (const line of arr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        tickets.push(new Ticked(destination, price, status));
    }

    tickets.sort((a,b) => {
        if (criteria === 'destination'){
            return a.destination.localeCompare(b.destination);
        } else if (criteria === 'status') {
            return a.status.localeCompare(b.status);
        } else {
            return a.price - b.price;
        }

    });
    return tickets;
}