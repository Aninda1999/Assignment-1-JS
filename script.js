let addToCartbtn = document.querySelectorAll('.addtocart');
addToCartbtn.forEach(button => {
    button.addEventListener('click', addToCart)
})
  
  function addToCart(event) {
    let menuItem = event.target.parentNode;
    let itemName = menuItem.querySelector('h3').textContent;

    let cartItems = document.querySelectorAll('#cart tr');
    for (let item of cartItems) {
        if (item.querySelector('td:first-child').textContent === itemName) {
            let quantityCell = item.querySelector('td:nth-child(2)');
            let quantity = parseInt(quantityCell.textContent, 10);
            quantity++;
            quantityCell.textContent = quantity;

            return; 
        }
    }

    let cartRow = document.createElement('tr');
    cartRow.innerHTML = `
        <td>${itemName}</td>
        <td>1</td>
        <td><button class="remove-item">Remove</button></td>
    `;
    let cartTable = document.getElementById('cart');
    cartTable.appendChild(cartRow);

    let removeButtons = cartRow.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
    
}

function removeFromCart(event) {
    const cartRow = event.target.parentNode.parentNode;
    cartRow.remove();  
}




