export default function startTrocaDeImg() {
  const imagens = document.querySelectorAll(".conteudo02 img");
  console.log(imagens);
  console.log(imagens.length);
  let imgIndex = 0;
  let maxImgs = imagens.length;

  window.addEventListener("load", () => {
    setInterval(() => {
      imagens[imgIndex].classList.remove("active");
      imgIndex++;
      if (imgIndex >= maxImgs) {
        imgIndex = 0;
      }
      imagens[imgIndex].classList.add("active");
    }, 2000);
  });
}
