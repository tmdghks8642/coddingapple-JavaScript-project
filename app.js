

let products = [];

fetch("./JSON/store.json")
.then(res=> res.json())
.then((data)=>{
    // json 데이터 변수에 담기
    products = data.products;

    // 상품 나열 함수로 만들기 
    function discussion (products){
    products.forEach((el)=>{
        let list=`
        <div class="col-md-3">
            <div class="item" draggable="true" data-id="${el.id}">
              <img src="${el.photo}" width=30%>
              <h4>${el.title}</h4>
              <h4>${el.brand}</h4>
              <p>가격 : ${el.price}</p>
              <button class="add" data-id="${el.id}">담기</button>
            </div>
          </div>`
        document.querySelector('.product-list').insertAdjacentHTML("beforeend",list)
    })
    }
    // 상품 나열하기
    discussion(products)

        // 상품 검색 
    document.querySelector('.serch').addEventListener('change',(e)=>{
     let newproduct =  products.filter(el=> {return el.title.includes(e.target.value)})
     document.querySelector('.product-list').innerHTML='';
     discussion(newproduct)

    // 상품 검색 시 동일한 텍스트 노란색으로 표시
      let title= document.querySelector('.product-list h4').innerHTML
        title= title.replace(e.target.value, `<span style="background : yellow">${e.target.value}</span>` )
        document.querySelector('.product-list h4').innerHTML = title
        console.log(document.querySelector('.product-list h4'))
    })

    // 상품 검색 시 이전 버튼 
    document.querySelector('.back').addEventListener('click',()=>{
        document.querySelector('.product-list').innerHTML='';
        discussion(products)
    })

})








