let total = 0;

function removeItem() {
    let products = document.querySelectorAll('#productsList li');
    products.forEach(li => {
        li.onclick = function() {
            total -= parseInt(this.getElementsByTagName('span')[0].textContent);
            this.parentNode.removeChild(this);
            totalAmount();
        }
    });
    
}

function addItem() {
    let productName = document.productsForm.product.value;
    let productPrice = document.productsForm.price.value;
    total += parseInt(productPrice);

    let newSpanPrice = document.createElement('span');
    newSpanPrice.innerHTML = productPrice;

    let newLi = document.createElement('li');
    newLi.innerHTML = productName + ' - ';
    newLi.appendChild(newSpanPrice);
    newLi.innerHTML += ' руб. '

    let delButton = document.createElement('input');
    delButton.type = 'button';
    delButton.value = 'Удалить';
    delButton.setAttribute('onclick', 'removeItem()');

    productsList.append(newLi);
    newLi.appendChild(delButton);

    totalAmount();
}

function totalAmount() {
    totalField.value = total + ' руб.';
}