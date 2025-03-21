let contrastToggle = false;
let isModalOpen = false;
const scalscaleFactor= 1 / 10;

function movesBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scalscaleFactor;
  const y = event.clientY * scalscaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const oddInteger = isOdd ? -1 : 1; 
    shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px) rotate(${x * oddInteger * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      `service_o2ywc9a`,
      `template_86d7n9p`,
      event.target,
      `tgUgYvXBGP4yW5Y51`
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "There was an error sending the message. The email service is not available at the moment. Please try contacting me directly at c.blaine.sexton@gmail.com"
      );
    });

  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    console.log("Your message has been sent successfully!");
    setTimeout(() => {
      success.classList.remove("modal__overlay--visible");
    }, 3000);
  }, 1000);
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
