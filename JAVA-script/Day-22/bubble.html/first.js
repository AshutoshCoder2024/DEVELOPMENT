document.addEventListener("mousemove", (event) => {

    /* here we make a div in our body and our eventListener is click so when we click in body a new div is create */
    const circle = document.createElement('div'); /* make a div  */
    circle.className ='circle';  /* give the circle as a class to the div  */
    // circle.textContent = "hii";  /* add the contenet of div  */
    circle.style.color="black";
   

    const x=event.clientX; /* from this line we get the location/distanec from left where we click   */
    const y=event.clientY; /* from this line we get the location/distanec from top where we click   */
    /* as we give absolute posiiton to circle div so  it changes with respect to  emidiate parents of circle div that is body so    */
    circle.style.left=`${x-25}px` /* here x is random distance from left  */
    circle.style.top=`${y-25}px` /* here x is random distance from top   */
    /* hamlog ko x aur y mil gya to matlab  body pe jha v click karenge uska position aur uske help se whhi pe circle bnega   */


 const colors = [
  "#FF0000", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#800080", "#FFC0CB", "#000000", "#FFFFFF", "#808080",
  "#A52A2A", "#00FFFF", "#FF00FF", "#008080", "#E6E6FA", "#800000", "#000080", "#808000", "#FFD700", "#C0C0C0",
  "#FFE5B4", "#F5F5DC", "#FFFFF0", "#40E0D0", "#FF7F50", "#FFBF00", "#98FF98", "#EE82EE", "#E0115F", "#50C878",
  "#FF007F", "#36454F", "#DC143C", "#00FFFF", "#FF00FF", "#00FF00", "#4B0082", "#CCCCFF", "#C2B280", "#DDA0DD",
  "#F0E68C", "#F4C430", "#B87333", "#CD7F32", "#FF2400", "#00A86B", "#9966CC", "#007FFF", "#FFFDD0", "#FFDB58",
  "#CC7722", "#704214", "#FF69B4", "#DEB887", "#FFDAB9", "#00CED1", "#7FFFD4", "#4682B4", "#F08080", "#E0FFFF",
  "#FFF0F5", "#FAFAD2", "#B0E0E6", "#F5DEB3", "#5F9EA0", "#ADD8E6", "#FF4500", "#DAA520", "#FF8C00", "#7CFC00",
  "#8A2BE2", "#20B2AA", "#7B68EE", "#6B8E23", "#DC143C", "#9932CC", "#FF1493", "#8B0000", "#556B2F", "#BDB76B",
  "#6495ED", "#2E8B57", "#D2691E", "#FF6347", "#FF4500", "#ADFF2F", "#F0F8FF", "#7FFF00", "#00FA9A", "#AFEEEE",
  "#2F4F4F", "#778899", "#FFD700", "#D2B48C", "#228B22", "#9ACD32", "#B0C4DE", "#00BFFF", "#4682B4", "#00008B",
  "#8B008B", "#800080", "#A020F0", "#5D3FD3", "#3CB371", "#7CFC00", "#66CDAA", "#9400D3", "#1E90FF", "#DB7093",
  "#F5F5DC", "#FFB6C1", "#E6E6FA", "#FFF8DC", "#F0FFF0", "#FFFAFA", "#FFFFE0", "#FAEBD7", "#FFE4B5", "#EEE8AA",
  "#F5FFFA", "#D8BFD8", "#FFEBCD", "#FFDEAD", "#FFFAF0", "#FAF0E6", "#E0FFFF", "#B0E0E6", "#87CEEB", "#4682B4",
  "#5F9EA0", "#6495ED", "#000080", "#00CED1", "#FFD700", "#FF4500", "#FF6347", "#FF69B4", "#FF8C00", "#FFA07A",
  "#A0522D", "#FA8072", "#FF00FF", "#7B68EE", "#9932CC", "#BA55D3", "#4B0082", "#9370DB", "#FF1493", "#DA70D6",
  "#D8BFD8", "#E6E6FA", "#DDA0DD", "#FF00FF", "#C71585", "#FF69B4", "#DB7093", "#F08080", "#FFB6C1", "#E9967A",
  "#FA8072", "#F5DEB3", "#DEB887", "#D2B48C", "#BC8F8F", "#B22222", "#FF7F50", "#CD5C5C", "#8B0000", "#A52A2A",
  "#800000", "#F0E68C", "#F5F5DC", "#FAFAD2", "#FFFACD", "#FFFFE0", "#BDB76B", "#FFD700", "#DAA520", "#CD853F",
  "#D2691E", "#FF4500", "#FF6347", "#FF8C00", "#FFA07A", "#FF7F50", "#FFDAB9", "#FFE4C4", "#FFE4B5", "#FFF8DC",
  "#FAEBD7", "#FFEBCD", "#FFFACD", "#FAFAD2", "#FFDEAD", "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B", "#8B4513"
];

        circle.style.background=colors[Math.floor(Math.random()*colors.length)];
    document.body.appendChild(circle); /* link the div to the body  */



    /* we have to delete the div because when we click then a new div add to aur body 
    so using the setTimeout function we delete one div in every 5000 ms that is 5s  */
    setTimeout(()=>{
       circle.remove();
    },5000)

})

