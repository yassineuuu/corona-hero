let test = document.getElementById('start');
var i = 1;
// PAGE1 DU test

test.addEventListener('click', function(){
    
 const url = 'http://localhost:3000/Questions'

    const getQuestio = async function(){ 
        let res = await fetch(url+`/${i}`)
        let data =await res.json()
        
        
        document.getElementById('para').innerHTML = `<h4>${data.qst}</h4>
                                                    <span style="display:inline-block"><input type="radio" id="oui"><h4>${data.answer[0]}</h4></span>
                                                    <span><input type="radio" id="non"><h4>${data.answer[1]}</h4></span>`
        
        test.setAttribute('id', 'next');
        test =document.getElementById('next');
        test.innerHTML = "NEXT";
        i++;
        let width =document.getElementById('prog').style.width;
        width+=4.2;
        };
        getQuestio();
});
