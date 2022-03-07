let list = [];

function cart(id)
{
    const card = document.getElementById(`${id}`)
    list.push({"id": id, "name": card.querySelector("h2").innerText, "source": card.querySelector("img").getAttribute("src"), "price": card.querySelector("p.price").innerText});
    localStorage.setItem('cartItems', JSON.stringify(list));
}