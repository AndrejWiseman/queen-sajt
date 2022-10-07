'use strict';

class MyNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <div class="hamb-ram"></div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <ul class="list-items">
                <li class="item"><a href="index.html">Početna</a></li>
                <li class="item"><a href="usluge.html">Usluge</a></li>
                <li class="item"><a href="cjenovnik.html">Cjenovnik</a></li>
                <li class="item"><a href="#s3">Galerija</a></li>
                <li class="item"><a href="#s1">Lokacija</a></li>
                <li class="item"><a href="rezervacija.html">Kontakt</a></li>
            </ul>
            
            <div class="logo2">
                <a href="index.html"><img src="img/logo3.png" alt="logo"></a>
            </div>
            
            <div class="buk-ram"></div>
            <div class="booking">
                <button class="book-dugme" onclick="location.href = 'rezervacija.html';">Rezerviši termin</button>
            </div>
        </nav>
    `
    }
}
customElements.define('my-nav', MyNav);



class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="fbox1">
                <div class="fbox1-1">
                    <h3 class="fh3">Salon</h3>
                    <ul>
                        <li class="f-li"><a href="#">O nama</a></li>
                        <li class="f-li"><a href="#">Galerija</a></li>
                        <li class="f-li"><a href="usluge.html">Usluge</a></li>
                    </ul>
                </div>
                
                <div class="fbox1-2">
                    <h3 class="fh3">Radno vrijeme</h3>
                    <table>
                        <tr>
                            <td>Ponedjeljak</td>
                            <td>9.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Utorak</td>
                            <td>9.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Srijeda</td>
                            <td>9.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Četvrtak</td>
                            <td>12.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Petak</td>
                            <td>12.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Subota</td>
                            <td>9.00 - 14.00</td>
                        </tr>
                        <tr>
                            <td>Nedjelja</td>
                            <td>Ne radimo</td>
                        </tr>
                    </table>
                </div>
                
                <div class="fbox1-3">
                    <h3 class="fh3">Kontakt</h3>
                    <div class="adresa">
                        <p class="adr1">Adresa:</p>
                        <p class="adr2">Vladike Platona 26c, 78430 Prnjavor <br> Bosna i Hercegovina</p>
                        <p class="adr3"><a href="https://goo.gl/maps/bs5eUjS4Lek41Pzm9" target="_blank">Lokacija salona</a></p>
                    </div>
                    <div class="telefon">
                        <p class="tel1">Telefon:</p>
                        <p class="tel2">+387 65 255 827</p>
                    </div>
                    <div class="social">
                        <a href="https://www.instagram.com/kozmeticki_salon_queen/">                        <i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/ks.queen.prnjavor">                        <i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://m.me/Kozmetički salon - QUEEN=fm"><i class="fa-brands fa-facebook-messenger"></i></a>
                        <a href="viber://chat?number=%2B38765255827"><i class="fa-brands fa-viber soc"></i></a>
                        <a href="tel: +38765255827"><i class="fa-solid fa-phone"></i></a>
                    </div>
                </div>

            </div>
            
            <div class="fbox2">
                <p>&copy 2022 Queen Prnjavor</p>
            </div>        
        </footer>
    `
    }
}
customElements.define('my-footer', MyFooter);



class MyUslugeLista extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <ul>
              <li><a href="manikir.html">&rArr; Manikir</a></li>
              <li><a href="pedikir.html">&rArr; Pedikir</a></li>
              <li><a href="obrve-trepavice.html">&rArr; Obrve i trepavice</a></li>
              <li><a href="sminkanje.html">&rArr; Sminkanje</a></li>
              <li><a href="puder-obrve.html">&rArr; Puder obrve</a></li>
              <li><a href="depilacija.html">&rArr; Depilacija</a></li>
          </ul>
    `
    }
}
customElements.define('my-usluge-lista', MyUslugeLista);






































