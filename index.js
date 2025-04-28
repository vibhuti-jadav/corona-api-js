
let url = 'https://api.rootnet.in/covid19-in/stats/latest'

let card = document.querySelector("#coronaCard")  


fetch(url)
.then((res) => res.json())
 .then((res) => {
    console.log(res)
    showStates(res)
})

 function showStates(resp){ 
    resp.data.regional.map((st) =>{
        document.querySelector(".states").innerHTML += `<option value="${st.loc}" >${st.loc}</option>`
    })

  
                  
    document.querySelector(".states").onchange=function(e){
        let data = resp.data.regional.filter((st) => st.loc == e.target.value)  

        console.log(data)
        
        card.innerHTML =`
        <div class="row g-2 p-3 rounded bg-white " >
            <h4>${data[0].loc}</h4>
                        <div class="col-12">
                         <div class="shadow p-2  rounded-2" >   
                            <p>Foreigncase:<b>${data[0].confirmedCasesForeign}</b></p>
                            </div>
                        </div>
                           
                        
                          <div class="col-12">
                                <div class="shadow p-2 rounded-2" > 
                                <p>Indiancase:<b>${data[0].confirmedCasesIndian  }</b</p>
                            </div>
                        </div>
              
                           <div class="col-12">
                                <div class="shadow p-2 rounded-2" > 
                                <p>Deaths:<b>${data[0].deaths }</b></p>
                            </div>
                        </div>

                        <div class="col-12">
                                <div class="shadow p-2 rounded-2" > 
                                <p>Discharged:<b>${data[0].discharged }</b></p>
                            </div>
                        </div>
                         <div class="col-12">
                                <div class="shadow p-2 rounded-2" > 
                                <p>TotalConfirmed:<b>${data[0].totalConfirmed }</b></p>
                            </div>
                        </div>
                           
                        </div>
        `
    }
 }







