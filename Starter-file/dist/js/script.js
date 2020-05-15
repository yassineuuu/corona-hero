let test = document.getElementById('start');
const button1 = document.createElement('button')
const button2 = document.createElement('button')
let answers = {};

var i = 0;

var FGmin = 0;
var FGmaj = 0;
var symp = 0;
var prono = 0;



// Test function   (the big one (°o¨) )
test.addEventListener('click', DemarerLeTeste)
function DemarerLeTeste () {

    // const url = 'http://localhost:3000/Questions'
    // const getQuestio = async function () {

    //     let res = await fetch(url)
    //     let data = await res.json()
        // if (i >= data.length) {
        //     alert("last question")
        // }
        document.getElementById('info').removeAttribute('id');
        document.getElementById('qst').setAttribute('id','info');

        document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
        document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                   <div class="answer">
                                                   <div><input type="radio" name="qst" id="oui" value="oui"><label for="oui"><h4>${testQestions[i].answer[0]}</h4></label></div>
                                                   <div><input type="radio" name="qst" id="non" value="non"><label for="non"><h4>${testQestions[i].answer[1]}</h4></label></div>
                                                   </div>`


        document.getElementById('para').style.background = "#D0E5F0";
        test.remove()
        buttons.appendChild(button1).innerHTML = "Suivant";
        buttons.appendChild(button2).innerHTML = "Précedent";
        document.querySelectorAll('button')[1].setAttribute('id', 'nxt')
        document.querySelectorAll('button')[2].setAttribute('id', 'prev')


        const next = document.getElementById('nxt')
        const prev = document.getElementById('prev')
        next.disabled = true;


        //Next question et progress bar

        if (i <= 0) {
            prev.style.display = "none"

        }


        const progress = document.getElementById('prog').style

        var width = 4;

        progress.width = width + "%";


        //switch function

        function Question() {


            switch (i) {
                case 1:

                    document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                                <div class="answer">
                                                                <span><input type="number" name="Q2" id="température" min="34" max="42" placeholder="34 - 42" autofocus>
                                                                deg</span>
                                                                </div>`
                                                                    next.disabled = false
                                                                
                                                                
                                                                


                    break;
                case 9:
                    document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                                <div class="answer">
                                                                <div><input type="radio" name="qst" id="bien"  value="Bien"><label for="bien"><i class="far fa-grin-alt"></i><h4>${testQestions[i].answer[0]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="assez" value="Assez bien"><label for="assez"><i class="far fa-smile"></i><h4>${testQestions[i].answer[1]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="fatigué" value="Fatigué(e)"><label for="fatigué"><i class="far fa-grimace"></i><h4>${testQestions[i].answer[2]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="trésfatigué" value="Trés fatigué(e)"><label for="trésfatigué"><i class="far fa-tired"></i><h4>${testQestions[i].answer[3]}</h4></label></div>
                                                                </div>`
                    break;
                case 10:
                    document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                                <div class="answer">
                                                                <span><input type="number" name="Q2" id="age" min="15" max="100" placeholder="15 - 100" autofocus>
                                                                ans</span>
                                                                </div>`
                                                                next.disabled = false
                                                                
                    break;
                case 11:
                    if (answers[11] < 15){
                        alert(" Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ")
                    }
                    document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                                <div class="answer">
                                                                <span><input type="number" name="Q2" id="poids" min="35" max="300" placeholder="Poids" autofocus>
                                                                kg</span>
                                                                </div>`
                                                                next.disabled = false
                    console.log(document.getElementById('poids').value)
                    
                    break;
                case 12:
                    document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                                <div class="answer">
                                                                <span><input type="number" name="Q2" id="taille" min="100" max="300" placeholder="Taille" autofocus>
                                                                cm</span>
                                                                </div>`
                                                                next.disabled = false
                    break;
                case 19:
                    document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                                <div class="answer">
                                                                <div><input type="radio" name="qst" id="oui" value="oui"><label for="oui"><h4>${testQestions[i].answer[0]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="non" value="non"><label for="non"><h4>${testQestions[i].answer[1]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="homme" value="homme"><label for="homme"><i class="fas fa-male"></i><h4>${testQestions[i].answer[2]}</h4></label></div>
                                                                </div>`
                    break;
                default:


                    document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                    document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                                <div class="answer">
                                                                <div><input type="radio" name="qst" id="oui" value="oui"><label for="oui"><h4>${testQestions[i].answer[0]}</h4></label></div>
                                                                <div><input type="radio" name="qst" id="non" value="non"><label for="non"><h4>${testQestions[i].answer[1]}</h4></label></div>
                                                                </div>`



                    break;
            }



        }

        // change detection function
        document.getElementById('para').addEventListener('change', () => {

            if (document.querySelectorAll('input')[0].type === 'radio') {
                answers[testQestions[i].id]=document.querySelectorAll('input:checked')[0].defaultValue
                console.log(answers);
                next.disabled = false
            } 
            else if (document.querySelectorAll('input')[0].type === 'number') {
                
                const number = document.querySelector('input').value

                if (number >= testQestions[i].min && number <= testQestions[i].max) {

                    answers[testQestions[i].id]= number
                    console.log(answers);
                    next.disabled = false
                   
                } 
                else {
                    next.disabled = true


                }


            }

        })

        // next question function

        next.addEventListener('click', function () {


            i++;
            prev.style.display = "block"

            if (i >= 21) {
                i=21
                next.innerHTML = "Terminé"
                next.addEventListener('click', function () {
                    testDone();
                    prev.style.display = "none"
                    next.disabled = false;
                    next.innerHTML= "Refaire le Teste"
                    next.addEventListener('click',()=>{
                        window.location.href='test.html';
                        
                    })
                })
                
            }
            next.disabled = true;

          

            Question();





            function progressBar() {

                width += 4.4
                progress.width = width + "%";

                if (width >= 100) {
                    width = 100
                }

            }
            progressBar();


        })


        // précedet question function


        prev.addEventListener('click', function () {
            i--;
            width -= 4.4
            if (i <= 0) {

                prev.style.display = "none"
                document.getElementById('q/qs').innerHTML = `${testQestions[i].id}/22`
                document.getElementById('para').innerHTML = `<h4>${testQestions[i].qst}</h4>
                                                    <div class="answer">
                                                    <div><input type="radio" id="oui"><label for="oui"><h4>${testQestions[i].answer1}</h4></label></div>
                                                    <div><input type="radio" id="non"><label for="non"><h4>${testQestions[i].answer2}</h4></label></div>
                                                    </div>`
                progress.width = width + "%";
                

                answers = {};
            }

            Question();

            function progressBarBack() {


                progress.width = width + "%";

                if (width <= 0) {
                    width = 0
                }



            }
            progressBarBack();
        })


    // };

    // getQuestio();





};







//test done function

function testDone() {

//symptôme:
    if(answers[2]>=39||answers[2]<=35.4){
        symp++
    }
    if(answers[3]=="oui"){
        symp++
    }
    if(answers[4]=="oui"){
        symp++
    }
    if(answers[5]=="oui"){
        symp++
    }
    if(answers[6]=="oui"){
        symp++
    }
    if(answers[7]=="oui"){
        symp++
    }
    if(answers[8]=="oui"){
        symp++
    }
    if(answers[9]=="oui"){
        symp++
    }
    if(answers[10]=="oui"){
        symp++
    }
//pronostique:
    if(answers[11]>=39){
        prono++
    }
    if(answers[14]=="oui"){
        prono++
    }
    if(answers[15]=="oui"){
        prono++
    }
    if(answers[16]=="oui"){
        prono++
    }
    if(answers[17]=="oui"){
        prono++
    }
    if(answers[18]=="oui"){
        prono++
    }
    if(answers[19]=="oui"){
        prono++
    }
    if(answers[20]=="oui"){
        prono++
    }
    if(answers[21]=="oui"){
        prono++
    }
    if(answers[22]=="oui"){
        prono++
    }
//facteur de gravité mineur:
    if (answers[1] === "oui" && answers[2]>=39) {

        FGmin++;
    }
    if (answers[8] === 'oui') {
    
        FGmin++
    }
    
    
    if (answers[10] === 'Fatigué(e)' || answers[10] === 'Trés fatigué(e)') {
        FGmin++
    }
    
    
    
//facteur de gravité majeur:

    if (answers[1] === "oui" && answers[2]<=35.4) {

        FGmaj++;
    }
    if (answers[8] === 'oui') {

        FGmaj++
    }


    if (answers[9] == "oui") {
        FGmaj++
    }


//OUTPUT

    document.getElementById('info').removeAttribute('id');
    document.getElementById('fin').setAttribute('id','info');
    if (FGmaj>=1 || FGmin > 1) {
        document.getElementById('para').innerHTML = `<h2>Appelez le 141</h2><br> 
                                            <br>
                                            Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
        document.getElementById('para').style.fontSize = '18px'
        document.getElementById('para').firstElementChild.style.color = '#d63031'
        document.getElementById('para').style.fontWeight = 'bold'
        document.getElementById('para').style.padding = '2rem';






    }else if (FGmin === 0 && FGmaj === 0 && symp <= 1) {

        document.getElementById('para').innerHTML = `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19, consulter la page Conseils<hr>
                Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
        document.getElementById('para').style.fontSize = '18px';
        document.getElementById('para').style.fontWeight = 'bold';
        document.getElementById('para').style.color = '#2B2B2C';
        document.getElementById('para').style.padding = '2rem';

    } else if (FGmin === 1) {

        document.getElementById('para').innerHTML = `Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes<hr>
                Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
        document.getElementById('para').style.fontSize = '22px'
        document.getElementById('para').style.fontWeight = 'bold'
        document.getElementById('para').style.color = '#2B2B2C'
        document.getElementById('para').style.padding = '2rem';


    } else if((FGmin === 0 && FGmaj === 0 && answers[11]>=50) || (FGmin === 1 && FGmaj === 0 && prono===0) || (FGmin > 0  && FGmaj === 0 && prono > 0)) {
        document.getElementById('para').innerHTML = `Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domicile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.<hr>
                Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
        document.getElementById('para').style.fontSize = '22px'
        document.getElementById('para').style.fontWeight = 'bold'
        document.getElementById('para').style.color = '#2B2B2C'
        document.getElementById('para').style.padding = '2rem';

    } else if (symp === 1 || (FGmin === 0 && FGmaj === 0)){
        document.getElementById('para').innerHTML = `Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.<hr>
                Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
        document.getElementById('para').style.fontSize = '18px';
        document.getElementById('para').style.fontWeight = 'bold';
        document.getElementById('para').style.color = '#2B2B2C';
        document.getElementById('para').style.padding = '2rem';
    }
}
//symptôme:
    //answers[2]>=39||answers[2]<=35.4,answers[3]=="oui",answers[4]=="oui",answers[5],answers[6],answers[7],answers[8],answers[9],answers[10]=="oui"
    
    //if(answers[2]>=39||answers[2]<=35.4){
    //     symp++
    // }
    //if(answers[3]=="oui"){
    //     symp++
    // }...
   
    

//facteur pronostique:
    //answers[11]>=70,answers[14]=="oui",answers[15],answers[16],answers[17],answers[18],answers[19],answers[20],answers[21],answers[22]
    
    //if(answers[11]>=39){
    //     prono++
    // }
    //if(answers[14]=="oui"){
    //     prono++
    // }...



//facteur de gravité:
    //mineur ==> answers[2]>=39 && answers[8]=="oui" && answers[10]=="Fatigué(e)" || "Très fatigué(e)"

    //if(answers[2]>=39){
    //     result++
    // }
    //if(answers[8]=="oui"){
    //     result++
    // }
    //if(answers[10]=="Fatigué(e)" || answers[10] "Très fatigué(e)"{
    //     result++
    // }


    //majeur ==> answers[2]<35.4 && answers[8]=="oui" && answers[9]=="oui"
    
    //if(answers[2]>=35.4){
    //     result+=2
    // }
    //if(answers[8]=="oui"){
    //     result+=2
    // }
    //if(answers[9]=="oui"){
    //     result+=2
    // }
    