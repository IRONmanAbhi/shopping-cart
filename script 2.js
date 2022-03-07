let list = JSON.parse(localStorage.getItem('cartItems'));

const ourdiv = document.querySelector("table");
const inLocalStorage = localStorage.getItem('cartItems');
const total = document.getElementById("totalmoney");

if (inLocalStorage) {
    for (let j = 0; j < list.length; j++) 
    {
        ourdiv.innerHTML += `<tr>
            <td><img src="${list[j].source}"></td>
            <td><h2>${list[j].name}</h2></td>
            <td><p class="price">${list[j].price}</p></td>
            <td><button value="${list[j].id}" onclick="remove(value)">Remove <i class="fa fa-trash"></i></button></td>
        </tr>`;
    }   
}

function remove(no)
{
    for(j=0;j<list.length;j++)
    {
        if(list[j].id===no)
        {
            console.log(list[j]);
            
            list.splice(j, 1);
        }
    }
    localStorage.clear();
    localStorage.setItem('cartItems', JSON.stringify(list));
    ourdiv.innerHTML = "";
    for (let j = 0; j < list.length; j++) 
    {
        ourdiv.innerHTML += `<tr>
            <td><img src="${list[j].source}"></td>
            <td><h2>${list[j].name}</h2></td>
            <td><p class="price">${list[j].price}</p></td>
            <td><button value="${list[j].id}" onclick="remove(value)">Remove <i class="fa fa-trash"></i></button></td>
        </tr>`;
    }   
}