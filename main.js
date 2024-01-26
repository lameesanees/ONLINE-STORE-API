const getProducts = async () => {
    res = await fetch("https://fakestoreapi.com/products")
    // console.log(res)
    response=res.json()
    // console.log(response)
    data=await (response)
    console.log(data)
    htmlData=""
    data.forEach(item=>{
        htmlData+=`
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.category}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.price}</li>
    <li class="list-group-item">${item.description}</li>
    <li class="list-group-item">${item.rating.rate}</li>
  </ul>
</div>`
    })
result.innerHTML=htmlData
}
getProducts()