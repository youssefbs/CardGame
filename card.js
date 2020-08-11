document.addEventListener('DOMContentLoaded',()=>{
        var i=0
        document.getElementById('resultat').innerHTML=i
        const cardArray=[
            {
                name:'fries',
                img:'images/fries.png'
            },
            {
                name:'cheeseburger',
                img:'images/cheeseburger.png'
            },
            {
                name:'hotdog',
                img:'images/hotdog.png'
            },
            {
                name:'ice-cream',
                img:'images/ice-cream.png'
            },
            {
                name:'milkshake',
                img:'images/milkshake.png'
            },
            {
                name:'fries',
                img:'images/fries.png'
            },
            {
                name:'cheeseburger',
                img:'images/cheeseburger.png'
            },
            {
                name:'hotdog',
                img:'images/hotdog.png'
            },
            {
                name:'ice-cream',
                img:'images/ice-cream.png'
            },
            {
                name:'milkshake',
                img:'images/milkshake.png'
            },
            {
                name:'pizza',
                img:'images/pizza.png'
            },
            {
                name:'pizza',
                img:'images/pizza.png'
            },

        ]
    cardArray.sort(()=>{return 0.5-Math.random()})
    const grid= document.querySelector('.grid')  
    var chosencard=[] 
    var chosenid=[]
   


    for(let j=0;j<12;j++)
    {
        let card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',j)
        grid.appendChild(card)
        card.addEventListener('click',flipCard)
    }


    function flipCard() {
       let j=this.getAttribute('data-id')
        if(chosencard.length==0 || j!=chosenid[0])
        {
            chosencard.push(cardArray[j])
            chosenid.push(j)
            this.setAttribute('src',cardArray[j].img)
            if(chosencard.length==2)
            {
                 setTimeout(cardmatch,500)
            }
        }
    }



    function cardmatch(){
        var card=document.querySelectorAll('img')
        if(chosencard[1].name==chosencard[0].name)
        {
            i=i+1
            card[chosenid[0]].removeEventListener('click',flipCard)
            card[chosenid[1]].removeEventListener('click',flipCard)
            document.getElementById('resultat').innerHTML=i
            if(i==6)
            {
                alert("congratulation")
                let conf = confirm("Do tou want to play again ?");
                if(conf)
                {
                    location.reload(); 
                }
            }
               
        }
        else
        {
            card[chosenid[0]].setAttribute('src','images/blank.png')
            card[chosenid[1]].setAttribute('src','images/blank.png')
        }
        chosenid=[]
        chosencard=[]

    }
})