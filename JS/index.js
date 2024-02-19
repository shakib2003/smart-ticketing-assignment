let totalPrice = 0;
let sitLeft = 8;

const seats = document.querySelectorAll('.sit');
// console.log(seats);

for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];
  // console.log(element);
  seat.addEventListener('click', function(){
    const seatName = seat.innerText;
    const seatSelect = document.getElementById('seat-select');
    const p = document.createElement('p');
    p.innerText = seatName;
    seatSelect.appendChild(p);
    const fare = parseFloat(document.getElementById('fare').innerText);
    const price = document.getElementById('price');
    const everySitPrice = document.createElement('p');
    everySitPrice.innerText = fare;
    price.appendChild(everySitPrice);
    totalPrice += fare;
    document.getElementById('total-price').innerText = totalPrice;
    setBackgroundColor(seat);
  })
}

