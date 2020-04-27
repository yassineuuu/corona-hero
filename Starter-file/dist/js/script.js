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
                                                   <div class="answer">
                                                   <div><input type="radio" id="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
                                                   <div><input type="radio" id="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
                                                   </div>`
     
       
        document.getElementById('para').style.background="#D0E5F0";
        test.remove()
        buttons.appendChild(button1).innerHTML = "Suivant";
        buttons.appendChild(button2).innerHTML = "Précedent";
        document.querySelectorAll('button')[1].setAttribute('id', 'nxt')
        document.querySelectorAll('button')[2].setAttribute('id', 'prev')

        const next =document.getElementById('nxt')
        const prev =document.getElementById('prev')

        //Next question et progress bar


        const progress = document.getElementById('prog').style
        var width = 4;
        
        progress.width=width+"%";
        next.addEventListener('click', function(){
            i++;
            if(i>=22){
                i=21
            }
            function Question(){


                switch (i) {
                    case  1:
                        document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                    <div class="answer">
                                                                    <span><input type="number" name="Q2" id="température" min="34" max="42" placeholder="34 - 42">
                                                                    deg</span>
                                                                    </div>`
                    break;
                    case 9:
                        document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                    <div class="answer">
                                                                    <div><input type="radio" id="bien"><label for="bien"><i class="far fa-grin-alt"></i><h4>${data[i].answer[0]}</h4></label></div>
                                                                    <div><input type="radio" id="assez"><label for="assez"><i class="far fa-smile"></i><h4>${data[i].answer[1]}</h4></label></div>
                                                                    <div><input type="radio" id="fatigué"><label for="fatigué"><i class="far fa-grimace"></i><h4>${data[i].answer[2]}</h4></label></div>
                                                                    <div><input type="radio" id="trésfatigué"><label for="trésfatigué"><i class="far fa-tired"></i><h4>${data[i].answer[3]}</h4></label></div>
                                                                    </div>`
                    break;
                    case  10:
                        document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                    <div class="answer">
                                                                    <span><input type="number" name="Q2" id="age" min="15" max="100" placeholder="15 - 100">
                                                                    ans</span>
                                                                    </div>`
                    break;
                    case  11:
                        document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                    <div class="answer">
                                                                    <span><input type="number" name="Q2" id="poids" min="15" max="300" placeholder="Poids">
                                                                    kg</span>
                                                                    </div>`
                    break;
                    case  12:
                        document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                    <div class="answer">
                                                                    <span><input type="number" name="Q2" id="taille" min="140" max="300" placeholder="Taille">
                                                                    cm</span>
                                                                    </div>`
                    break;
                    case  19:
                        document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                    <div class="answer">
                                                                    <div><input type="radio" id="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
                                                                    <div><input type="radio" id="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
                                                                    <div><input type="radio" id="homme"><label for="homme"><i class="fas fa-male"></i><h4>${data[i].answer[2]}</h4></label></div>
                                                                    </div>`
                    break;
                    default:
                        document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                        document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                    <div class="answer">
                                                                    <div><input type="radio" id="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
                                                                    <div><input type="radio" id="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
                                                                    </div>`
                    break;
                }
            
            }
            Question();
            
            
            
            function progressBar(){
                
                width+=4.4
                progress.width=width+"%";

                if (width>=100){
                    width=100
                }
               
            }
            progressBar();
            
            
        })


        //button précedet


        prev.addEventListener('click', function(){
            i--;
            if(i<=0){
                i=0
            }
            document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
            document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                    <div class="answer">
                                                    <div><input type="radio" id="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
                                                    <div><input type="radio" id="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
                                                    </div>`
            
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
