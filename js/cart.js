window.onload = function(){
   
    fetch('http://localhost:3000/cart')
    .then(res => res.json())
    .then((data)=> {
       // debugger
        renderCart(data)
    })
}

function renderCart(data){

    let element = document.getElementById("cartLines")

    data.forEach((d)=>{

        element.innerHTML += `
        <div class="cart-line" data-id="NL-2401" data-price="128.00">
            <div class="thumb"><img src=${d.imageUrl} width="100" height="100"></></div>
            <div>
              <p class="label mb-1">${d.category} · SKU ${d.id}</p>
              <h3 class="product-title mb-1"><a href="#">${d.title}</a></h3>
              <p class="spec mb-2">${d.description}</p>
              <div class="d-flex flex-wrap align-items-center gap-3">
                <div class="qty" role="group" >
                  <button type="button" data-action="decrement" aria-label="Decrease quantity">−</button>
                  <label class="visually-hidden" for="qty-NL-2401">Quantity</label>
                  <input type="number" id="qty-NL-2401" name="qty-NL-2401" value="${d.qty}" min="1" max="10" inputmode="numeric" data-action="qty">
                  <button type="button" data-action="increment" aria-label="Increase quantity">+</button>
                </div>
                <div class="line-actions">
                  <button type="button" data-action="remove">Remove</button>
                </div>
              </div>
              <p class="stock in mb-0 mt-2">In stock — ships today</p>
            </div>
            <div class="line-total text-end">
              <p class="price mb-0" data-field="lineTotal">${d.price * d.qty} PKR</p>
              <p class="spec mb-0">${d.price} PKR each</p>
            </div>
          </div>
        `

    })


}