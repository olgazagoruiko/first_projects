const cart={
  'p5600': {
    'name':'Удобное платье из легкой ткани жатка цвета хаки 5600',
    'url':'#',
    'image':'./images/suknya-5589c-34656520162523_small6.jpg',
    'price': 1200.00
  },
  'p5590': {
    'name':'Розовое платье с отложным воротником принт горох 5590р',
    'url':'#',
    'image':'./images/suknya-5590p-51815641398376.jpg',
    'price': 1000.00
  },
  'p5528': {
    'name':'Платье джинсовое с расклешенной юбкой 5528',
    'url':'#',
    'image':'./images/suknya-5528-18665325401248.jpg',
    'price': 1080.00
  },
  'p5601': {
    'name':'Летнее платье с декоративным поясом 5601',
    'url':'#',
    'image':'./images/suknya-5601-13516922900934.jpg',
    'price': 700.00
  },
  'p5585': {
    'name':'Льняное платье в клетку с контрастным воротником 5585',
    'url':'#',
    'image':'./images/suknya-5585-60486967172419.jpg',
    'price': 700.00
  },
  'p5539': {
    'name':'Летнее платье-рубашка с поясом цветочный принт 5539',
    'url':'#',
    'image':'./images/suknya-5539-47291897629859.jpg',
    'price': 986.00
  },
}

let out=`<div class='pricing-table row'>`;
for (let key in cart){
  out+=`<div class='cd col-md-6 col-lg-4'>`;
  out+=`<div class='package featured text-center'>`;
  out+=`<h2>${cart[key]['name']}</h2>`;
  out+=`<img src='${cart[key]['image']}'>`;
  out+=`<p class='price'>${cart[key]['price']} UAH</p>`;
  out+=`<button class='to-cart button-primary' data-articul='${key}'>В корзину</button>`;
  out+=`</div>`;
  out+=`</div>`;
}
out+=`</div>`;
document.querySelector('.goods').innerHTML=out;


const data={};
document.querySelector('.goods').addEventListener('click',event=>{
  if(event.target.classList.contains('to-cart')){
    let articul=event.target.dataset['articul'];
    if (data[articul]!==undefined){
      data[articul]['count']++;
    }else{
      data[articul]=cart[articul];
      data[articul]['count']=1;
    }
    localStorage.setItem('cart',JSON.stringify(data));
  }
})