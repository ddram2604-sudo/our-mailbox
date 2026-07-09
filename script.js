const letters = {

hug:{

title:"Open when you're needing a hug",

text:"One day this will be a real hug. Until then, imagine my arms around you. You never have to earn my comfort—you already have it."

},

sleep:{

title:"Open when you're struggling to sleep",

text:"Close your eyes. Imagine we're watching the moon together. Tomorrow can wait. Tonight, just rest."

},

moon:{

title:"Open when you're looking at the moon",

text:"The moon has always reminded me of us. It shines because of the sun... and you've always been my sun."

}

};

document.querySelectorAll(".envelope").forEach(button=>{

button.onclick=()=>{

const id=button.dataset.letter;

letterTitle.innerHTML=letters[id].title;

letterText.innerHTML=letters[id].text;

popup.style.display="flex";

}

})

close.onclick=()=>{

popup.style.display="none";

}
