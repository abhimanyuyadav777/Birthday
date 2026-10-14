
/* ==========================================
   BIRTHDAY SURPRISE WEBSITE
   JavaScript Interactions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 🌸 Premium Loading Screen
const loadingScreen = document.getElementById("loadingScreen");

window.addEventListener("load", () => {
    setTimeout(() => {
        loadingScreen.classList.add("loading-hidden");
    }, 2500);
});

    // PERSONAL BIRTHDAY SETTINGS

    const birthdayPersonName = "Nitin";
    function typeMessage(element, message, speed = 45, onComplete = null) {
    element.textContent = "";

    let index = 0;

    function typeNextCharacter() {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            setTimeout(typeNextCharacter, speed);
        } else if (typeof onComplete === "function") {
            onComplete();
        }
    }

    typeNextCharacter();
}




    // ELEMENTS
    const welcomeScreen = document.getElementById("welcomeScreen");
    const birthdayScreen = document.getElementById("birthdayScreen");

    const openSurprise = document.getElementById("openSurprise");
    const wishButton = document.getElementById("wishButton");
    const messageButton = document.getElementById("messageButton");

    const wishMessage = document.getElementById("wishMessage");
    const messageCard = document.getElementById("messageCard");

    const backgroundDecor = document.getElementById("backgroundDecor");
    const confettiContainer = document.getElementById("confettiContainer");


// 1. PREMIUM FLOATING FLOWERS

const decorations = [
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f338.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f337.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f339.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f33c.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f338.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f337.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f339.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f33c.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f98b.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2728.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ae.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ae.svg",
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ae.svg",
];

function createFloatingDecoration() {
    const decoration = document.createElement("img");

    decoration.classList.add("floating-decoration");

    decoration.src =
        decorations[Math.floor(Math.random() * decorations.length)];

    decoration.alt = "";
    decoration.setAttribute("aria-hidden", "true");
    decoration.draggable = false;

    const size = 20 + Math.random() * 22;

    decoration.style.width = size + "px";
    decoration.style.height = size + "px";
    decoration.style.left = Math.random() * 100 + "%";

    const duration = 10 + Math.random() * 8;

    decoration.style.animationDuration = duration + "s";

    backgroundDecor.appendChild(decoration);

    setTimeout(() => {
        decoration.remove();
    }, duration * 1000);
}

// Gentle initial floating decorations
for (let i = 0; i < 8; i++) {
    setTimeout(createFloatingDecoration, i * 600);
}

// Add new decorations slowly for a dreamy effect
setInterval(createFloatingDecoration, 1400);



    // 2. CONFETTI CELEBRATION

    function launchConfetti() {

        const confettiColors = [
            "#ff6fae",
            "#ffc2dc",
            "#f5a623",
            "#ffffff",
            "#d8a7ff",
            "#ff9fba"
        ];

        const numberOfPieces = 90;

        for (let i = 0; i < numberOfPieces; i++) {

            const piece = document.createElement("span");

            piece.classList.add("confetti-piece");

            piece.style.left = Math.random() * 100 + "%";

            piece.style.backgroundColor =
                confettiColors[
                Math.floor(Math.random() * confettiColors.length)
                ];

            piece.style.animationDelay =
                (Math.random() * 0.8) + "s";

            piece.style.animationDuration =
                (2 + Math.random() * 2) + "s";

            confettiContainer.appendChild(piece);

            setTimeout(() => {
                piece.remove();
            }, 5000);
        }
    }


    // 3. OPEN THE SURPRISE

    openSurprise.addEventListener("click", () => {

        openSurprise.disabled = true;

        welcomeScreen.classList.add("fade-out");

        setTimeout(() => {

            welcomeScreen.classList.add("hidden");

            birthdayScreen.classList.remove("hidden");

            launchConfetti();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 650);

    });


    // 4. MAKE A WISH

    wishButton.addEventListener("click", () => {

        const isHidden = wishMessage.classList.contains("hidden");

        if (isHidden) {

            wishMessage.classList.remove("hidden");

            wishButton.textContent = "Your Wish Is Special 💗";

            launchConfetti();

        } else {

            wishMessage.classList.add("hidden");

            wishButton.innerHTML = "Make a Wish ✨";

        }

    });


    // 5. REVEAL THE PERSONAL BIRTHDAY MESSAGE

    // BIRTHDAY ENVELOPE INTERACTION

    const envelopeSection = document.getElementById("envelopeSection");
    const envelope = document.getElementById("envelope");
    const envelopeInstruction = document.getElementById("envelopeInstruction");

    let envelopeOpened = false;

    messageButton.addEventListener("click", () => {

        envelopeSection.classList.remove("hidden");

        envelopeSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        messageButton.textContent = "Your Little Surprise Is Below 🌸";

    });

    envelope.addEventListener("click", () => {

        if (envelopeOpened) return;

        envelopeOpened = true;

        envelope.classList.add("opened");
        envelope.setAttribute("aria-expanded", "true");

        envelopeInstruction.textContent =
            "A little happiness, just for you... 💗";

        launchConfetti();

        setTimeout(() => {

            const letter = document.createElement("div");
            letter.className = "envelope-message";

            letter.innerHTML = `
            <div class="card-flower"> <img src="https://cdn-icons-png.flaticon.com/128/7809/7809452.png" alt=""
                    aria-hidden="true"> </div>

            <p class="card-label">A LITTLE WISH FOR YOU</p>

            <h3 id="letterPersonName"></h3>

            <p>
                Happy Birthday! 🎂💗
                <br><br>
                May your life always be filled with happiness,
                your heart with peace, and your days with
                countless reasons to smile. ✨
            </p>

            <p class="special-note">
                Some people have a way of making the world feel a little more beautiful, simply by being who they are. 🌸 <br>
I hope this birthday brings you countless reasons to smile😊, <br> beautiful memories to cherish, and happiness that stays with you throughout the year. 💗 <br>
And if this little surprise makes you smile😊, then it has done exactly what it was made for👍.

            </p>

            <p>
                Wishing you a beautiful year ahead,
                full of wonderful moments and new beginnings.
            </p>

            <p class="card-ending">
                Once again, Happy Birthday! ♡
            </p>

            <p class="creator-credit">
                Made by Abhimanyu ❤️
            </p>
        `;

            // Naam ko typing effect ke saath dikhana
            const nameHeading =
                letter.querySelector("#letterPersonName");

            envelopeSection.appendChild(letter);

            typeMessage(
    nameHeading,
    `Dear ${birthdayPersonName} `,
    90,
    () => {
        const nameImage = document.createElement("img");

        nameImage.src = "https://cdn-icons-png.flaticon.com/128/15675/15675772.png";
        nameImage.alt = "Birthday decoration";
        nameImage.className = "name-decoration-img";

        nameHeading.insertAdjacentElement("afterend", nameImage);
    }
);

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 850);

    });




    // 6. PREVENT ACCIDENTAL MULTIPLE CLICKS
    // Buttons remain usable, but each interaction is handled
    // by the event listeners above.

    // 7. BACKGROUND MUSIC CONTROLS

    const musicToggle = document.getElementById("musicToggle");
    const birthdayMusic = document.getElementById("birthdayMusic");

    musicToggle.addEventListener("click", async () => {

        if (birthdayMusic.paused) {

            try {
                await birthdayMusic.play();

                musicToggle.textContent = "⏸ Pause Music";
                musicToggle.setAttribute("aria-pressed", "true");
                musicToggle.setAttribute("aria-label", "Pause background music");

            } catch (error) {

                musicToggle.textContent = "🎵 Try Again";
                console.error("Music could not be played:", error);

            }

        } else {

            birthdayMusic.pause();

            musicToggle.textContent = "🎵 Play Music";
            musicToggle.setAttribute("aria-pressed", "false");
            musicToggle.setAttribute("aria-label", "Play background music");

        }

    });

    birthdayMusic.addEventListener("ended", () => {
        musicToggle.textContent = "🎵 Play Music";
        musicToggle.setAttribute("aria-pressed", "false");
    });



});

