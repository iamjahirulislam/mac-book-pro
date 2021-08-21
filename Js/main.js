function totalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('extra-memory').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryFee = document.getElementById('delivery-fee').innerText;

    const totalPrice = document.getElementById('total-price');

    const finalPrice = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryFee);
    totalPrice.innerText = finalPrice;;

    payablePrice(finalPrice);
}

function payablePrice(amount) {
    const payablePrice = document.getElementById('payable-price');
    payablePrice.innerText = amount;
}

/* ----------------------------- Memory cost option part --------------------------------- */
document.getElementById('btn-8gb').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory');
    memoryCost.innerText = '0';
    totalPrice();
});
document.getElementById('btn-16gb').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory');
    memoryCost.innerText = '180';
    totalPrice();
});

/* ---------------- storage cost option part---------------------------*/
document.getElementById('cost-of-256gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
    totalPrice();
});
document.getElementById('cost-of-512gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
    totalPrice();
});
document.getElementById('cost-of-1tb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
    totalPrice();
});

/* -----------------------------delivery option part--------------------------------------*/
document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryFee = document.getElementById('delivery-fee');
    deliveryFee.innerText = '0';
    totalPrice()
});
document.getElementById('delivery-costly').addEventListener('click', function () {
    const deliveryFee = document.getElementById('delivery-fee');
    deliveryFee.innerText = '20';
    totalPrice()
});

/* --------------------------pomo code part -------------------------------*/
document.getElementById('p-btn').addEventListener('click', function () {
    const pField = document.getElementById('p-field');
    let PayablePrice = document.getElementById('payable-price').innerText;
    if (pField.value == 'stevekaku') {

        const discount = parseInt(PayablePrice) * 0.20;
        PayablePrice = PayablePrice - discount;
        pField.value = '';
        payablePrice(PayablePrice);
    }
    pField.value = '';
});