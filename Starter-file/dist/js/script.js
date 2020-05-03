let test = document.getElementById('start');
const button1= document.createElement('button')
const button2= document.createElement('button')
let answers = [];

var i = 0;

var result = 0;



// Test function   (the big one (°o¨) )

test.addEventListener('click', function(){

 const url = 'http://localhost:3000/Questions'
    const getQuestio = async function(){ 
        
        let res = await fetch(url)
        let data =await res.json()
        if (i>=data.length){
            alert("last question")
       }
       document.querySelector('.circl').style.left='48.15%'
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


       //switch function

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
                                                                <span><input type="number" name="Q2" id="poids" min="35" max="300" placeholder="Poids">
                                                                kg</span>
                                                                </div>`
                                                                console.log(document.getElementById('poids').value)
                break;
                case  12:
                    document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                                <div class="answer">
                                                                <span><input type="number" name="Q2" id="taille" min="100" max="300" placeholder="Taille">
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

        // change detection function
        document.getElementById('para').addEventListener('change', () => {
            
            if (document.querySelectorAll('input')[0].type === 'radio'){
                answers.push(document.querySelectorAll('input:checked')[0].defaultValue)
                console.log(answers);
                next.disabled = false
                if (answers[0] === "oui") {

                    result++;
                }
                if (answers[7] === 'oui' || answers[8] === 'oui') {

                    result++
                }
                
                
                if (answers[9] === 'Fatigué(e)' || answers[9] === 'Très fatigué') {
                    result++
                }
                
                
                if (answers[13] === 'oui' || answers[14] === 'oui') {
                
                    result++
                }
                // if (answers.length>=i+1){
                //     document.querySelector('input').addEventListener('change', function popQuestionR () {
                //         answers.pop();
                //         return popQuestionR();
                //     })
                // }
               
                
            }
        
            else if (document.querySelectorAll('input')[0].type === 'number') {

                const number = document.querySelector('input').value
                
                if (number >= data[i].min && number <= data[i].max) {
        
                    answers.push(number)
                    console.log(answers);
                    next.disabled = false
                    // if (answers.length>=i+1){
                    //     document.querySelector('input').addEventListener('change', function popQuestionN () {
                            
                    //         answers.pop();
                    //         return popQuestionN();
                    //     })
                    // }
                } else {
                    next.disabled = true
                    
        
                }
           
        
            } 
        
        })

        // next question function

        next.addEventListener('click', function(){
                   
                        
            i++;
            prev.style.display="block"

            if(i>=21){
                i=21
                next.innerHTML="Terminé"
                next.addEventListener('click', function(){
                    testDone ();
                    document.querySelector('.circl').style.left='63.2%'
                    next.style.display="none"
                    prev.style.display="none"

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


        // précedet question function


        prev.addEventListener('click', function(){
            i--;
            width-=4.4
            if(i<=0){
                
                prev.style.display="none"
                document.getElementById('q/qs').innerHTML = `${data[i].id}/22`
            document.getElementById('para').innerHTML = `<h4>${data[i].qst}</h4>
                                                    <div class="answer">
                                                    <div><input type="radio" id="oui"><label for="oui"><h4>${data[i].answer1}</h4></label></div>
                                                    <div><input type="radio" id="non"><label for="non"><h4>${data[i].answer2}</h4></label></div>
                                                    </div>`
                                                    progress.width=width+"%";
                                                    answers = []
            }
           
            Question();
            
            function progressBarBack(){
                
                
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






//test done function

function testDone () {
                if (result === 0) {

                document.getElementById('para').innerHTML = `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19, consulter la page Conseils<hr>
                Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
                document.getElementById('para').style.fontSize ='22px';
                document.getElementById('para').style.fontWeight ='bold';
                document.getElementById('para').style.color ='#787878';

            } else if (result === 1) {

                document.getElementById('para').innerHTML = `Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes<hr>
                Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
                document.getElementById('para').style.fontSize = '22px'
                document.getElementById('para').style.fontWeight = 'bold'
                document.getElementById('para').style.color = '#787878'

            } else if (result === 2) {
                resultMessage[0].innerText = `Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domicile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.<hr>
                Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
                document.getElementById('para').style.fontSize = '22px'
                document.getElementById('para').style.fontWeight = 'bold'
                document.getElementById('para').style.color = '#787878'
            } else {
                document.getElementById('para').innerHTML = `Appelez le 141<br> 
                                            <br> 
                                            <br>
                                            Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
                document.getElementById('para').style.fontSize = '42px'
                document.getElementById('para').style.color = '#d63031'
                document.getElementById('para').style.fontWeight = 'bold'





            }
}




