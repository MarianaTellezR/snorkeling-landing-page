function joinSnorkel() {
  alert("Welcome! We will need some information for you to start Snorkeling!");
  let name = prompt("What is your fullname?");
  let age = prompt("What is your age?");
  let heading = document.querySelector(".info-heading");
  let paragraph = document.querySelector(".info-paragraph");

  if (age >= 18) {
    let experience = prompt(
      "How many years of experience do you have in Snorkeling?"
    );
    if (experience >= 5) {
      alert("You are an Expert! 🦈");
      heading.innerHTML =
        "Hurray! Welcome " + name + ", you can join our EXPERT Trip 🦈";
      paragraph.innerHTML =
        "<strong>Cabo Shark Dive : </strong> Swim with the biggest and gorgeous shark in the world, an experience you will never forget! These gentle giants meet in large numbers to feed in the plankton-rich waters of Bahia de La Paz.";
    } else if (experience < 5 && experience >= 2) {
      alert("You are Talented! 🐳");
      heading.innerHTML =
        "Hurray! Welcome " + name + ", you can join our TALENTED Trip 🐳";
      paragraph.innerHTML =
        "<strong>Whales and Dolphins : </strong> Experience the ultimate whale and dolphin-watching adventure beneath the surface in the crystal-clear waters of Sri Lanka, where Blue Whale sightings are almost guaranteed!";
    } else {
      alert("You are a Beginner! 🐡");
      heading.innerHTML =
        "Hurray! Welcome " + name + ", you can join our BEGINNER Trip 🐡";
      paragraph.innerHTML =
        "<strong>Coral Reef Snorkel : </strong> With Cancun Snorkeling, immerse in the Caribbean and visit the second largest coral reef barrier in the world, the Mesoamerican Barrier Reef System, located in the protected Puerto Morelos National Marine Park";
    }
  } else {
    heading.innerHTML =
      "Sorry " + name + ", you can't join for now our Snorkeling trips 😕";
    paragraph.innerHTML = "No available groups for you at the moment";
  }
}
let joinButton = document.querySelector("button");
joinButton.addEventListener("click", joinSnorkel);
