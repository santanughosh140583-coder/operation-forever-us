
// ===== EDIT THESE 6 PROFILES =====
// Names, titles, captions, photos and letters change here.

const friends = [

 {
  name: "Friend 01",
  title: "THE CHAOS CREATOR",
  caption: "The one who turns ordinary days into stories.",
  photo: "photos/friend1.jpeg",
  letter: "Thank you for bringing your own kind of chaos and happiness into this little universe. Never stop being unapologetically you. ❤️"
 },

 {
  name: "Friend 02",
  title: "THE HEART KEEPER",
  caption: "A little warmth in every memory.",
  photo: "photos/friend2.jpeg",
  letter: "You make this group feel a little more like home. I hope life gives you the same warmth you give everyone around you. ❤️"
 },

 {
  name: "Friend 03",
  title: "THE MEME MACHINE",
  caption: "Official supplier of laughter and madness.",
  photo: "photos/friend3.jpeg",
  letter: "Thanks for all the laughs, ridiculous moments and memories that make no sense to anyone else. Stay legendary. ❤️"
 },

 {
  name: "Friend 04",
  title: "THE SILENT LEGEND",
  caption: "Quiet presence. Unforgettable impact.",
  photo: "photos/friend4.jpeg",
  letter: "Some friendships don't need constant words. Your presence itself means a lot. I'm grateful you're part of this story. ❤️"
 },

 {
  name: "Friend 05",
  title: "THE DREAMER",
  caption: "Big dreams, bright energy, golden soul.",
  photo: "photos/friend5.jpeg",
  letter: "I hope every dream you're quietly carrying finds its way into reality. And wherever you go, remember this little universe is cheering for you. ❤️"
 },

 {
  name: "Friend 06",
  title: "THE UNPREDICTABLE ONE",
  caption: "Never boring. Always one of us.",
  photo: "photos/friend6.jpeg",
  letter: "Life is more fun, more surprising and more memorable with you in it. Here's to many more chapters together. ❤️"
 }

];

// INTRO
function enterUniverse() {
  go("universe");
}

// PAGE NAVIGATION
function go(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// FRIEND PROFILE CARDS
function renderPeople() {
  const grid = document.getElementById("people");

  grid.innerHTML = friends.map((f, i) => `
    <article class="person" onclick="showFriend(${i})">

      <div class="portrait">
        <img
          src="${f.photo}"
          alt="${f.name}"
          onerror="this.remove();this.parentElement.textContent='ADD PHOTO ${i+1}'"
        >
      </div>

      <div class="person-meta">
        <small>AGENT 0${i+1} · PROFILE</small>
        <h3>${f.name}</h3>
        <p>${f.title}</p>
      </div>

    </article>
  `).join("");
}

// FRIEND DETAILS MODAL
function showFriend(i) {
  const f = friends[i];

  openModal(`
    <div class="eyebrow">
      AGENT 0${i+1} · PERSONAL FILE
    </div>

    <img
      class="modal-photo"
      src="${f.photo}"
      onerror="this.style.display='none'"
    >

    <h2>${f.name}</h2>

    <div class="tag">${f.title}</div>

    <p style="margin-top:18px">${f.caption}</p>

    <p style="margin-top:15px;color:#e8bd73">
      “A permanent part of our story.”
    </p>
  `);
}

// LETTER ENVELOPES
function renderLetters() {
  document.getElementById("letterGrid").innerHTML =
    friends.map((f, i) => `
      <div class="envelope" onclick="openLetter(${i})">

        <div class="icon">✉</div>

        <h3>${f.name}</h3>

        <small>OPEN YOUR LETTER ↗</small>

      </div>
    `).join("");
}

// OPEN PERSONAL LETTER
function openLetter(i) {
  const f = friends[i];

  openModal(`
    <div class="eyebrow">
      A LETTER, JUST FOR YOU
    </div>

    <div style="font-size:45px;margin:20px">
      💌
    </div>

    <h2>Dear ${f.name},</h2>

    <p>${f.letter}</p>

    <p style="margin-top:20px;color:#e8bd73">
      — From your favourite little universe
    </p>
  `);
}

// MODAL FUNCTIONS
function openModal(content) {
  document.getElementById("modalContent").innerHTML = content;

  document.getElementById("modal").classList.add("open");
}

function closeModal(e) {
  if (
    !e ||
    e.target.id === "modal" ||
    e.target.classList.contains("close")
  ) {
    document.getElementById("modal").classList.remove("open");
  }
}

// LIGHT DIYA
function lightDiya() {
  document.getElementById("diya").classList.add("lit");

  document.getElementById("blessing").textContent =
    "May our friendship always find its way back to light. Happy Diwali, my favourite six. 🪔";
}

// BACKGROUND STARS
function makeStars() {
  const el = document.getElementById("stars");

  for (let i = 0; i < 70; i++) {
    let s = document.createElement("i");

    s.className = "star";

    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";

    s.style.animationDelay = Math.random() * 4 + "s";

    el.appendChild(s);
  }
}

// INITIALIZE WEBSITE
document.addEventListener("DOMContentLoaded", () => {
  makeStars();
  renderPeople();
  renderLetters();
});
