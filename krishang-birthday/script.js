const RSVP_ENDPOINT = "https://formsubmit.co/kiranmutturu@gmail.com";

const form = document.querySelector("#rsvp-form");
const note = document.querySelector("#form-note");

if (RSVP_ENDPOINT) {
  form.action = RSVP_ENDPOINT;
  const nextPage = document.createElement("input");
  nextPage.type = "hidden";
  nextPage.name = "_next";
  nextPage.value = new URL("thank-you.html", window.location.href).href;
  form.append(nextPage);
  note.textContent = "Your RSVP will be sent securely when you submit this form.";
} else {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    note.textContent = "RSVP is not connected yet. Add your free form endpoint in script.js, then share the invitation link.";
    note.classList.add("is-warning");
  });
}
