const boutique = document.getElementById("boutique");
const cartContent = document.getElementById("cart-content");
let mesProduits = [
  { nom: "Bague Argent", prix: 15, image: "bague-1.jpg" },
  { nom: "Bague Or", prix: 300, image: "bague-2.jpg" },
  { nom: "Bague Diamand", prix: 900, image: "bague-3.jpg" },
];
function display() {
  for (let i = 0; i < mesProduits.length; i++) {
    boutique.innerHTML += `    <div class="four columns">
    <div class="card">
      <img src="${mesProduits[i].image}" class="course-image u-full-width" />
      <div class="info-card">
        <h4>${mesProduits[i].nom}</h4>
        <p>3</p>

        <p class="price"> <span class="u-pull-right">$ ${mesProduits[i].prix}</span></p>
        <button
          class="u-full-width button-primary button input add-to-cart"
          data-id="3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>`;
  }
  const btnAddToCart = boutique.querySelectorAll(".add-to-cart");
  btnAddToCart.forEach((element) => {
    element.addEventListener("click", () => {
      let pricee = element.parentNode.children[2].textContent;
      let namee = element.parentNode.children[0].textContent;
      let photo = element.parentNode.parentNode.childNodes[1];
      cartContent.innerHTML += ` <tr>
      <th><img src ="${photo.src}" class= "petit" ></th>
      <th>${namee}</th>
      <th>${pricee}</th>
      <th><button class="deleted" >del</button></th>
    </tr>`;
      alert("Article Add");
      const btnDel = cartContent.querySelectorAll(".deleted");
      btnDel.forEach((btn) => {
        btn.addEventListener("click", () => {
          const removeEl = btn.parentNode.parentNode;
          removeEl.remove();
        });
      });
    });
  });
}
display();
