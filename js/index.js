 
 
 
 let  productName = document.getElementById('ProductName')
 let  productPrice = document.getElementById('ProductPrice')
 let  category = document.getElementById('Category')
 let  description = document.getElementById('Description')
 let productContainer = []
 let kobri 

  productContainer = JSON.parse(localStorage.getItem('product'))  || []


    displayProducts()

 function addProduct(){
    let product = {
        name:productName.value,
        price:productPrice.value,
        Category:category.value,
        Description:description.value,
    }
    
    productContainer.push(product)

    localStorage.setItem('product',JSON.stringify(productContainer))
     
    displayProducts()
    clearInput()
 }


  function  displayProducts(){

        let shanta = ''

        for (let i = 0; i < productContainer.length; i++) {
            
            shanta += `<div class="col-lg-3 col-md-4  col-sm-6 p-2">
            <div class='bg-primary rounded p-2'>
            <h1>Name:${productContainer[i].name}</h1>
            <p>Price:${productContainer[i].price}</p>
            <p>Category:${productContainer[i].Category}</p>
            <p>Description:${productContainer[i].Description}</p>
            <div class='d-flex justify-content-between'>
            <button class="btn btn-danger" onclick='deleteProduct(${i})'>Delete</button>
            <button class="btn btn-warning" onclick='updateProduct(${i})'>Update</button>
            </div>
            </div>
            </div>`
        }

        document.getElementById('demo').innerHTML  = shanta
    }   

function clearInput(){
        productName.value = ''
        productPrice.value = ''
        description.value = ''
        category.value = ''
    }

    function deleteProduct(index){
    productContainer.splice(index,1)
    localStorage.setItem('product',JSON.stringify(productContainer))
    displayProducts()
    }

   function updateProduct(i){

    document.getElementById('submitProduct').classList.add('d-none')
    document.getElementById('updateProduct').classList.remove('d-none')
    
    console.log(productContainer[i].value);
    
    productName.value = productContainer[i].name
    productPrice.value = productContainer[i].price
    description.value = productContainer[i].Description
    category.value = productContainer[i].Category 

    kobri = i
    }

   function  updateProductFinal(){

     let product = {
        name:productName.value,
        price:productPrice.value,
        Category:category.value,
        Description:description.value,
    }

        productContainer[kobri] = product
        localStorage.setItem('product',JSON.stringify(productContainer))


        displayProducts()
        clearInput()
        document.getElementById('submitProduct').classList.remove('d-none')
    document.getElementById('updateProduct').classList.add('d-none')
    }

    function searchProduct(){
        
         let shanta = ''
          let searchInput = document.getElementById('searchInput').value

        for (let i = 0; i < productContainer.length; i++) {
            
            if(productContainer[i].name.toLowerCase().includes(searchInput.toLowerCase())){
            shanta += `<div class="col-lg-3 col-md-4  col-sm-6 p-2">
            <div class='bg-primary rounded p-2'>
            <h1>Name:${productContainer[i].name}</h1>
            <p>Price:${productContainer[i].price}</p>
            <p>Category:${productContainer[i].Category}</p>
            <p>Description:${productContainer[i].Description}</p>
            <div class='d-flex justify-content-between'>
            <button class="btn btn-danger" onclick='deleteProduct(${i})'>Delete</button>
            <button class="btn btn-warning" onclick='updateProduct(${i})'>Update</button>
            </div>
            </div>
            </div>`
        }
    }
            document.getElementById('demo').innerHTML  = shanta



}
