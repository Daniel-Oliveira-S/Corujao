slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;

}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
width: 100%;
margin: 2rem 22rem;
gap: 4rem;
}

.slide {
  flex: 0 0 calc(100% / 3.28);
  min-width: calc(100% / 3.28);
  text-align: center;
  padding: 50px 1rem;
  background-color: #fff;
  margin: 2rem 0;
  border-radius: 25px;
}

.slide h2{
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  margin-top: 1rem;
  color: #000;
  margin-bottom: 1rem;
}

.slide p{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #000;
  width: 100%;
  line-height: 27px;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  visibility: hidden;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

@media  (max-width: 768px) {
  .slider {
    width: 100%;
    gap: 2rem;
    margin: 0 2rem;
  }

  .slide {
    flex: 0 0 100%;
    min-width: 100%;
      text-align: center;
      padding: 50px 0;
      background-color: #7c2399;


  }

  .slide.first{
    margin-left:-.25rem;
  }
  
  .slide.second{
    margin-left:-2.5rem ;
  }
  
  .slide.third{
    margin-left: -2rem ;
  }

  .slide h2{
    color: #fff
  }

  .slide p{
    width: 80%;
    color: #fff;
    text-align: center;
    margin: 0 auto;
  }

  .prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  color: #fa5a03;
  visibility: visible;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

}

 <div class="slider-container">
        <div class="slider">
          <div class="slide first">
            <img src="./Assets/avatar-1.svg" alt="">
            <h2>Erick - Colégio Mobile</h2>
            <p>Passei na GV, em ADM, com 98 pontos. Deu tudo certo.

              Redação, fiquei 2 pontos acima da média.
              
              Eu passei em Economia, na Insper, posicionada em décima quarta. Tirei 960 na redação
              </p>
          </div>
          <div class="slide second"><img src="./Assets/avatar-2.svg" alt="">
          <h2>Matheus - Colégio Bandeirantes</h2>
          <p>Passei! Acabou de sair a primeira chamada!

            Escrevo, mesmo. Hahaha.
            
            Infelizmente, não sei se consigo ver quanto tirei na redação. Fiquei na posição 61 de todos os que fizeram a prova.
            
            Muito obrigado, Beto! Você, definitivamente, foi o melhor professor que já tive!
            
            Meu aprendizado com as aulas foi imensurável!
            </p>
          </div>
          <div class="slide third">
            <img src="./Assets/avatar-3.svg" alt="">
            <h2>Dora Lobo - Colégio Mobile</h2>
            <p>Muito obrigado, Corujão! Você é demais!

              Te garanto que você foi muito essencial para essa aprovação. Pode esperar mais uma Coruja para a sua coleção.
              
              Passei em ADM na GV e fiquei em décimo segundo lugar no vestibular da Insper
              </p>

          </div>
        </div>
        <div class="prev-button">◀</div>
        <div class="next-button">▶</div>
      </div>


      colors:
      --bg-: #4A0751;
      --bg-: #5D9C77;
      --bg-: #7C2399;
      --bg-: #808284;
      --bg-: #AD1BD9;
      --bg-: #FA5A03;
