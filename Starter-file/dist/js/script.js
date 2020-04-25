let test = document.getElementById('start');
const button1= document.createElement('button')
const button2= document.createElement('button')

var i = 0;
// PAGE1 DU test

test.addEventListener('click', function(){
    
 const url = 'http://localhost:3000/Questions'

    const getQuestio = async function(){ 
        let res = await fetch(url)
        let data =await res.json()
        if (i>=data.length){
            alert("last question")
       }
       document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                    <span style="display:inline-block"><input type="radio" id="oui"><h4>${data[i].answer[0]}</h4></span>
                                                    <span><input type="radio" id="non"><h4>${data[i].answer[1]}</h4></span>`

        test.remove()
        buttons.appendChild(button1).innerHTML = "Suivant";
        buttons.appendChild(button2).innerHTML = "Précedent";
        document.querySelectorAll('button')[1].setAttribute('id', 'nxt')
        document.querySelectorAll('button')[2].setAttribute('id', 'prev')

        const next =document.getElementById('nxt')
        const prev =document.getElementById('prev')
        const progress = document.getElementById('prog').style
        var width = 4;
        
        progress.width=width+"%";
        next.addEventListener('click', function(){
            i++;
            document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
            document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                    <span style="display:inline-block"><input type="radio" id="oui"><h4>${data[i].answer[0]}</h4></span>
                                                    <span><input type="radio" id="non"><h4>${data[i].answer[1]}</h4></span>`

            
            
            
            function progressBar(){
                
                width+=4.4
                progress.width=width+"%";

                if (width>=100){
                    width=100
                }
               
            }
            progressBar();
            
            
        })
        prev.addEventListener('click', function(){
            i--;
            document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
            document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                    <span style="display:inline-block"><input type="radio" id="oui"><h4>${data[i].answer[0]}</h4></span>
                                                    <span><input type="radio" id="non"><h4>${data[i].answer[1]}</h4></span>`
            function progressBarBack(){
                
                width-=4.4
                progress.width=width+"%";
                                        
                if (width<=0){
                    width=0
                  }
                  
                                                       
            }
            progressBarBack();
        })

        
        };
        
        getQuestio();
        

        
    
        
});
