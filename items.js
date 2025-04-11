const items = [
  {
    name: "Lightbulb",
    description: "it's the sun... or rather, the sun *of this world*.",
    icon: "icons/lightbulb.png",
    type: "key item"
  },
  {
    name: "Screwdriver",
    description: "useful for removing screws. duh.",
    icon: "icons/screwdriver.png",
    type: "tool"
  },
  {
    name: "Broken Battery",
    description: "it's big, it's busted, and it needs a charge.",
    icon: "icons/broken_battery.png",
    type: "key item"
  },
  {
    name: "Camera",
    description: "the lens is broken... but the lens is also useful 👀",
    icon: "icons/camera.png",
    type: "flavour"
  },
  {
    name: "Empty Bottle",
    description: "an empty bottle. you could probably fill it with something.",
    icon: "icons/bottle.png",
    type: "flavour"
  },
  {
    name: "Crowbar",
    description: "used to pry things open. classic puzzle tool.",
    icon: "icons/crowbar.png",
    type: "key item"
  },
  {
    name: "Dry Branch",
    description: "a Dry branch.. Wonder what it could be used for.",
    icon: "icons/dry_branch.png",
    type: "key item"
  },
  {
    name: "Charged Battery",
    description: "you can fix the elevator with this",
    icon: "icons/charged_battery.png",
    type: "key item"
  },
  {
    name: "Basement Key",
    description: "this looks old...",
    icon: "icons/basement_key.png",
    type: "tool"
  },
  {
    name: "Metal Rod",
    description: "would be nice if i could flatten this...",
    icon: "icons/metal_rod.png",
    type: "key item"
  },
];

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.item-grid');

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';

    card.innerHTML = `
      <img src="${item.icon}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <span class="tag">${item.type}</span>
    `;

    container.appendChild(card);
  });
});

