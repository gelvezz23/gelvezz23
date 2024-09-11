/*!
=========================================================
* Steller Landing page
=========================================================

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

function enviarCorreo(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  if (email != null) {
    var sLink =
      "mailto:gelvezz223@gmail.com" +
      "?subject=" +
      subject +
      "&body=" +
      `	correo: ${email} 
	  	mesaje: ${message}`;
    window.location.href = sLink;
  }
}

const cookieBanner = document.querySelector(".cookie-banner");
const acceptButton = document.querySelector(".accept-cookies");

acceptButton.addEventListener("click", () => {
  cookieBanner.style.display = "none";
  // Aquí puedes almacenar el consentimiento del usuario en una cookie
});
