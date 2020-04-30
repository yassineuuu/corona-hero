let test = document.getElementById('start');
const button1= document.createElement('button')
const button2= document.createElement('button')
let answers = [];

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
       document.querySelector('.circl').style.left='47.4%'
       document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
       document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                   <div class="answer">
                                                   <div><input type="radio" name="qst" id="oui" value="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
                                                   <div><input type="radio" name="qst" id="non" value="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
                                                   </div>`
     
       
        document.getElementById('para').style.background="#D0E5F0";
        test.remove()
        buttons.appendChild(button1).innerHTML = "Suivant";
        buttons.appendChild(button2).innerHTML = "Précedent";
        document.querySelectorAll('button')[1].setAttribute('id', 'nxt')
        document.querySelectorAll('button')[2].setAttribute('id', 'prev')
        
        
        const next =document.getElementById('nxt')
        const prev =document.getElementById('prev')
        next.disabled=true;
        //Next question et progress bar
        if(i<=0){
            prev.style.display="none"
            
        }
        

        const progress = document.getElementById('prog').style
        var width = 4;
        
        progress.width=width+"%";
        function Question(){
                

            switch (i) {
                case  1:
                    
                    document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                <div class="answer">
                                                                <span><input type="number" name="Q2" id="température" min="34" max="42" placeholder="34 - 42">
                                                                deg</span>
                                                                </div>`
                                                                // var selectOption2 = document.getElementById('input[type=number]');
        
                                                                // if (selectOption2.value==""){
                                                                //     alert("Answer the question please")
                                                                //     return;
                                                                // }else{
                                                                //     i++;
                                                                // }   
                                                                                            
                break;                                           
                case 9:
                    document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                <div class="answer">
                                                                <div><input type="radio" name="qst" id="bien"  value="Bien"><label for="bien"><i class="far fa-grin-alt"></i><h4>${data[i].answer[0]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="assez" value="Assez bien"><label for="assez"><i class="far fa-smile"></i><h4>${data[i].answer[1]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="fatigué" value="Fatigué(e)"><label for="fatigué"><i class="far fa-grimace"></i><h4>${data[i].answer[2]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="trésfatigué" value="Trés fatigué(e)"><label for="trésfatigué"><i class="far fa-tired"></i><h4>${data[i].answer[3]}</h4></label></div>
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
                                                                console.log(document.getElementById('poids').value)
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
                                                                <div><input type="radio" name="qst" id="oui" value="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="non" value="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="homme" value="homme"><label for="homme"><i class="fas fa-male"></i><h4>${data[i].answer[2]}</h4></label></div>
                                                                </div>`
                break;
                default:
                   
                    
                    document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                <div class="answer">
                                                                <div><input type="radio" name="qst" id="oui" value="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="non" value="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
                                                                </div>`
                

                
                break;
            }
        
        }
        document.getElementById('para').addEventListener('change', (e) => {

            
        
            if (data[i].type === 'number') {
        
        
        
        
        
        
                const number = parseFloat(data[i].value)
        
                if (number >= data[i].min && number <= data[i].max) {
        
                    answers.push(data[i].value)
                    console.log(answers);
        
        
                    next.disabled = false
                } else {
                    next.disabled = true
        
                }
        
        
            } else {
        
        
                answers.push(data[i].answer)
                console.log(answers);
                next.disabled = false
            }
        
        
        
        
        
        })
        next.addEventListener('click', function(){

             
            var selectOption = document.querySelector('input[type=radio]:checked');
            
                    // if(!selectOption){
                    //     alert("Answer the question please")
                    //     return;
                    // }
                   
                        
            i++;
            prev.style.display="block"

            if(i>=21){
                i=21
                next.innerHTML="Terminé"
                next.addEventListener('click', function(){
                    document.getElementById('para').innerHTML ="TEST FIN";
                    document.querySelector('.circl').style.left='68;1%'

                })
            }
            next.disabled=true;
             
            
            
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
                prev.style.display="none"
                
            }
            // document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
            // document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
            //                                         <div class="answer">
            //                                         <div><input type="radio" id="oui"><label for="oui"><h4>${data[i].answer[0]}</h4></label></div>
            //                                         <div><input type="radio" id="non"><label for="non"><h4>${data[i].answer[1]}</h4></label></div>
            //                                         </div>`
            Question();
            
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
