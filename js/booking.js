// Booking form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;
  const date = this.date.value;
  const time = this.time.value;
  const purpose = this.purpose.value;

  // Open WhatsApp with pre-filled message
  const whatsappURL = `https://wa.me/2348058701731?text=Booking%20Details:%0AName:%20${name}%0APhone:%20${phone}%0ADate:%20${date}%0ATime:%20${time}%0APurpose:%20${purpose}`;
  window.open(whatsappURL, '_blank');

  alert('Booking details sent to WhatsApp!');
  this.reset();
});