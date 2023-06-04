<html>
<body>
<img src="https://rakindukuri.files.wordpress.com/2023/04/fixa1.png" style="width: 100%; position: relative;">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="mobile.css" media="(max-width: 800px)">
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css">


    <div style="background: #fff; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 86%; padding: 2em; margin: 2em auto; position: absolute;">
<<section>
      <div class="home-img">
        <img src="https://rakindukuri.files.wordpress.com/2023/04/pic.jpeg" alt="">
    </div>
    <style>
  .social-media a {
    display: inline-block;
    margin: 0 0.5em;
    font-size: 2em;
    color: #333;
  }

  .far-right-1 {
      margin-left: -1.25px;
  }
  .small-text {
  font-size: 1.25em !important; /* Adjust the font size as desired */
}

  .scroll-text {
  overflow: hidden;
  white-space: nowrap;
}

.fixed-text {
  display: inline-block;
  margin-right: 0.5em;
    font-size: 1em !important;
}

.scrolling-text {
  display: inline-block;
    margin-left: -1em;
  animation: scrollText 10s steps(1, end) infinite;
  animation-play-state: paused; /* Add this line to pause the animation initially */
    font-size: 1.1em !important;
}

@keyframes scrollText {
  0% {
    width: 100%;
    transform: translateX(0); /* Add this line to keep the text centered */
  }
  20%, 100% {
    width: 100%;
    transform: translateX(0); /* Add this line to keep the text centered */
  }
}


@keyframes scrollText {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

<div class="home-text">
        <span>Hello, I'm</span>
        <h1 class="far-right-1">Rakesh Indukuri</h1>
        <h2>Bioinformatics Graduate Student</h2>
        <div class="typing-text"></div>
    <br>
    <br>
    <!-- <h2> Interested in Data Science, Machine Learning, and Bioinformatics</h2>-->
    <div class="scroll-text">
  <h3 class="small-text"><span class="fixed-text"></span> <span class="scrolling-text"></span></h3>

    </div>
    <br>
    <div class="social-media">
    <a href="https://www.facebook.com/rakindukuri/" target="_blank"><i class='bx bxl-facebook-circle'></i></a>
    <a href="https://www.instagram.com/rakesh_indukuri/" target="_blank"><i class='bx bxl-instagram-alt'></i></a>
    <a href="https://twitter.com/rakeshindukuri" target="_blank"><i class='bx bxl-twitter'></i></a>
    <a href="https://www.linkedin.com/in/rakesh-indukuri/" target="_blank"><i class='bx bxl-linkedin-square'></i></a>
    <a href="https://github.com/rakeshindukuri" target="_blank"><i class='bx bxl-github'></i></a>
    <a href="https://discordapp.com/users/332424960196739072" target="_blank"><i class='bx bxl-discord'></i></a>
    <a href="https://api.whatsapp.com/send?phone=8573135265" target="_blank"><i class='bx bxl-whatsapp'></i></a>
    <a href="mailto:rakindukuri@gmail.com"><i class='bx bx-envelope'></i></a>

    </div>
<br>
    <br>
  <a href="about.html" class="btn">About me</a>
  <a href="resume.html" class="btn">Resume</a>
  <a href="projects.html" class="btn">Projects</a>
  <a href="skills.html" class="btn">Skills</a>
  <a href="extras.html" class="btn">Extras</a>
  <a href="contact.html" class="btn">Contact</a>
</div>
  </section>
</div>
<script>
  // Check the viewport width
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Set the threshold width for non-desktop devices
  var thresholdWidth = 1023; // Adjust this value as needed

  // Redirect non-desktop users
  if (viewportWidth < thresholdWidth) {
    window.location.href = "pilot1.html";
  }

  // Define the words to be displayed
  const words = [
    "\"Exploring the realms of Computational Biology\"",
    "\"Pushing the boundaries in Machine Learning and AI\"",
    "\"Mastering the art of Programming\"",
    "\"Reimagining the future of Personalized Medicine\"",
    "\"Challenging the norms in Cancer Genomics\""
  ];

  // Shuffle the words array
  const shuffledWords = shuffleArray(words);

  // Get the scrolling text element
  const scrollingText = document.querySelector('.scrolling-text');

  // Set up the typing effect
  let wordIndex = 0;
  let charIndex = 0;
  let typingSpeed = 15; // Adjust the typing speed (in milliseconds) here
  let freezeDuration = 4200; // Adjust the duration to freeze (in milliseconds) here

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  function typeText() {
    if (charIndex < shuffledWords[wordIndex].length) {
      scrollingText.textContent += shuffledWords[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(freezeText, freezeDuration);
    }
  }

  function freezeText() {
    setTimeout(eraseText, typingSpeed);
  }

  function eraseText() {
    if (charIndex > 0) {
      scrollingText.textContent = scrollingText.textContent.slice(0, -1);
      charIndex--;
      setTimeout(eraseText, typingSpeed / 4);
    } else {
      wordIndex++;
      if (wordIndex >= shuffledWords.length) {
        wordIndex = 0;
      }
      setTimeout(typeText, typingSpeed);
    }
  }

  // Start the scrolling animation
  scrollingText.addEventListener('animationstart', () => {
    scrollingText.style.animationPlayState = 'running';
  });

  // Start the typing effect
  typeText();
</script>

</body>
</html>
