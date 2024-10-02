const marqueeMsgs = [
  "Our pasta, who art in a colander, draining be your noodles. Thy noodle come, Thy sauce be yum, on top some grated Parmesan. Give us this day, our garlic bread, …and forgive us our trespasses, as we forgive those who trample on our lawns.",
  "Icarus laughed as he fell. Threw his head back and yelled into the winds, arms spread wide, teeth bared to the world",
  "It's giving bozo...",
  "What the sigma",
  "Born to goon, forced to edge",
  "Also try Terraria!",
  "What we do in life echoes in eternity - Maxiumus",
  "Roll for initiative....",
  "The supreme art of war is to subdue the enemy without fighting - Sun Tzu",
  "How do I code this...?"
];

const marquee = document.getElementById("change");

function splash() {
  marquee.innerHTML = marqueeMsgs[Math.floor(Math.random() * marqueeMsgs.length)];
  console.log("Website used Splash!");
}

marquee.addEventListener('animationiteration', splash);

splash();

