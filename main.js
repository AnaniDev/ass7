async function getPost(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const product = data.products
    console.log(product)
    const result = product.map(function(product){
        return `
            <div class="card">
            <img src="${product.thumbnail}" class="img">
            <h2>${product.title}</h2>
            <p>${product.price}$</p>
            </div>
        `
    }).join(" ")
    document.querySelector(".posts").innerHTML= result;
}


getPost();