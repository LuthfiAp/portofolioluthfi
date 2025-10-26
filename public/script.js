// Efek mengetik
const texts = ["Programmer.", "UI/UX Designer.", "Graphic Designer."];
let count = 0, index = 0, isDeleting = false;
const speed = 100, delSpeed = 60, wait = 1500;

function type() {
  const container = document.getElementById("typing-container");
  if (!container) return;
  if (!isDeleting && index <= texts[count].length) {
    container.textContent = texts[count].substring(0, index++);
    setTimeout(type, speed);
  } else if (isDeleting && index >= 0) {
    container.textContent = texts[count].substring(0, index--);
    setTimeout(type, delSpeed);
  } else if (index < 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    setTimeout(type, speed);
  } else {
    isDeleting = true;
    index = texts[count].length - 1;
    setTimeout(type, wait);
  }
}
type();

// Ambil data proyek dari REST API
fetch("/api/projek")
  .then(res => res.json())
  .then(data => {
    const projekSection = document.createElement("section");
    projekSection.id = "projek";
    projekSection.innerHTML = `
      <h2 class="section-title">Projek</h2>
      <div class="edu-container">
        ${data.map(p => `
          <div class="edu-box">
            <h3>${p.nama}</h3>
            <p>${p.deskripsi}</p>
          </div>`).join("")}
      </div>`;
    document.body.appendChild(projekSection);
  })
  .catch(err => console.error("Gagal ambil data projek:", err));

// Kirim form kontak ke REST API
document.getElementById("kontakForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  const status = document.getElementById("status");

  try {
const res = await fetch("/api/kontak", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nama, email, pesan })
});

    const result = await res.json();
    status.textContent = result.status;
    status.style.color = "green";
    e.target.reset();
  } catch (err) {
    status.textContent = "Gagal mengirim pesan!";
    status.style.color = "red";
  }
});
