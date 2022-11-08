setTimeout(function () {
  const img = document.querySelector("main .col .card img");

  const cardbody = img.nextElementSibling;

  img.remove();
  cardbody.append(img);
  console.log("bruh");
}, 1000);
