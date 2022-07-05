export default function FetchBitcoin(url, target) {

fetch(url)
.then(response => response.json())
.then(bitcoin => {
  const btcPreco = document.querySelector(target);
  btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
}).catch(erro => {
  console.log(Error(erro));
})

}
// https://www.blockchain.com/ticker


