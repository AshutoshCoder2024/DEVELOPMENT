const colors = [
    "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray",
    "Brown", "Cyan", "Magenta", "Teal", "Lavender", "Maroon", "Navy", "Olive", "Gold", "Silver",
    "Peach", "Beige", "Ivory", "Turquoise", "Coral", "Amber", "Mint", "Violet", "Ruby", "Emerald",
    "Rose", "Charcoal", "Crimson", "Aqua", "Fuchsia", "Lime", "Indigo", "Periwinkle", "Sand", "Plum",
    "Khaki", "Saffron", "Copper", "Bronze", "Scarlet", "Jade", "Amethyst", "Azure", "Cream", "Mustard"
  ];
  

  function  change_color(){

    const element=document.getElementById("color");
    element.style.backgroundColor=colors[Math.floor(Math.random()*49)];
  }
  change_color();
  setInterval(change_color,1000);

 
  