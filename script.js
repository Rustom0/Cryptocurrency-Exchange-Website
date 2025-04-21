var btcPrice = document.getElementById("bitcoin");
var ethPrice = document.getElementById("ethereum");
var dogePrice = document.getElementById("dogecoin");

document.addEventListener("DOMContentLoaded", function() {
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': '	CG-R8zfjNjV6pSM1HAJVMYfWYFU'
    }
  };
  
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd&precision=4', options)
    .then(res => res.json())
    .then(data => {
        console.log(data),
        btcPrice.innerHTML = data.bitcoin.usd,
        ethPrice.innerHTML = data.ethereum.usd,
        dogePrice.innerHTML = data.dogecoin.usd
    })
    .catch(err => console.error(err));
});









