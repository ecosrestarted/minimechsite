// voorbeeld: simpele alert op contact form submit (vervang of breid uit zoals je wilt)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Bericht ontvangen. We nemen snel contact met je op.");
    contactForm.reset();
  });
}
