
    var contadorElemento = document.getElementById("pontos");

    // Definir o valor inicial do contador
    var contador = 890;

    // Função para atualizar o valor do contador e exibi-lo no elemento
    function atualizarContador() {
      contadorElemento.textContent = contador + " Pontos";

      // Verificar se o contador atingiu 1000
      if (contador < 900) {
        contador++; // Incrementar o contador
        setTimeout(atualizarContador, 550); // Chamar a função novamente após 100ms
      }
    }

    // Iniciar o contador
atualizarContador();
    
var percentual = document.getElementById("percent");

var percent = 90;

function atualizarPercent() {
  percentual.textContent = percent + "%";

  if (percent < 100) {
    percent++;
    setTimeout(atualizarPercent, 560);
  }
}

atualizarPercent();

var redacao = document.getElementById("approve");

var red =  999990;

function atualizarRed() {
  redacao.textContent =  "+ "+ red.toLocaleString();

  if (red < 1000000) {
    red++;
    setTimeout(atualizarRed, 570);
  }
}

atualizarRed();

var alunos = document.getElementById("alunos");

var aluno = 4990;

function atualizarAluno() {
  alunos.textContent =   aluno.toLocaleString() + " mil";

  if (aluno < 5000) {
    aluno++;
    setTimeout(atualizarAluno, 580);
  }
}

atualizarAluno();


var jornada = document.getElementById("jornada");

var jorn = 20;

function atualizarJorn() {
  jornada.textContent =  jorn.toLocaleString() + " anos";

  if (jorn < 30) {
    jorn++;
    setTimeout(atualizarJorn, 590);
  }
}

atualizarJorn();


var parceria = document.getElementById("parceria");

var parca = 10;

function atualizarParca() {
  parceria.textContent =  parca.toLocaleString() + " anos";

  if (parca < 20) {
    parca++;
    setTimeout(atualizarParca, 600);
  }
}

atualizarParca();
 // Obtém todos os elementos com a classe "nav-button"
 const navButtons = document.querySelectorAll(".nav-button");

 // Função para tratar o clique em um botão
 function handleButtonClick(event) {
   // Remove a classe "active" de todos os botões
   navButtons.forEach(button => {
     button.classList.remove("active");
   });

   // Adiciona a classe "active" ao botão clicado
   event.target.classList.add("active");

   // Obtém o valor do atributo "href" para rolar até a seção correspondente
   const targetSectionId = event.target.getAttribute("href");
   const targetSection = document.querySelector(targetSectionId);

   // Rola até a seção correspondente com um efeito suave
   targetSection.scrollIntoView({ behavior: "smooth" });

   // Evita o comportamento padrão do link
   event.preventDefault();
 }

 // Adiciona um ouvinte de eventos a cada botão
 navButtons.forEach(button => {
   button.addEventListener("click", handleButtonClick);
 });

 // Ouvinte de eventos para cliques em qualquer elemento do documento
 document.addEventListener("click", function(event) {
   // Verifica se o clique não ocorreu em um botão de navegação
   if (!event.target.classList.contains("nav-button")) {
     // Remove a classe "active" de todos os botões
     navButtons.forEach(button => {
       button.classList.remove("active");
     });
   }
 });
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  if (window.scrollTo > 50) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});



const linksNavegacao = document.querySelectorAll('li a');

// Itera sobre os links e adiciona um evento de clique
linksNavegacao.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de seguir o link
        
        const targetId = link.getAttribute('href'); // Obtém o ID da seção alvo
        
        // Atualiza a URL sem recarregar a página
        history.pushState(null, null, null);
        
        // Rola suavemente para a seção alvo
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const btnLink = document.querySelectorAll('.btn');

// Itera sobre os links e adiciona um evento de clique
btnLink.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de seguir o link
        
        const targetId = link.getAttribute('href'); // Obtém o ID da seção alvo
        
        // Atualiza a URL sem recarregar a página
        history.pushState(null, null, null);
        
        // Rola suavemente para a seção alvo
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
const interval = setInterval(nextSlide, 10000000);

function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  updateSlider();
}

function updateSlider() {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
