let divelement=document.createElement("div");
divelement.innerText="enter the name";
document.body.append(divelement);

let ip1=document.createElement("input");
ip1.setAttribute("type","text");
ip1.setAttribute("id","name");
document.body.append(ip1);

let z=document.getElementById("name");


let url=("https://api.nationalize.io/?name=");

let btnelement=document.createElement("button");
btnelement.innerText="verify";
btnelement.addEventListener("click",(async()=>{
        let response=await fetch(`${url}${z.value}`);
        let result=await response.json();
        let country=await result.country;
    //  console.log(country);
    if(country.length==0){
      let spanelement=document.createElement("span");
      spanelement.setAttribute("style","border:1px solid black;margin:10px;padding:10px;color:white;background-color:black");
      spanelement.innerText="name is not available";
      document.body.append(spanelement);
    }
    else{
     let Telement=document.createElement("table");
     Telement.setAttribute("style","border:1px solid black;border-collapse:collapse");
      
     let theadelement=document.createElement("thead");

     let tr1element=document.createElement("tr");
     theadelement.append(tr1element);

     let headers=["country_id","probability"];
     headers.forEach((element)=>{
       let th1=document.createElement("th");
       th1.setAttribute("style","border:1px solid black;border-collapse:collapse");
       th1.innerText=element;
       tr1element.append(th1)
     })
let tbodyelement=document.createElement("tbody");
country.forEach((value)=>{
  
  let td1=document.createElement("td");
td1.setAttribute("style","border:1px solid black")
  td1.innerText=value.country_id;
  
  let td2=document.createElement("td");
  td2.innerText=value.probability;
  if(value.probability<0.3){
    td2.setAttribute("style","border:1px solid black;color:white;background-color:red");
  }else if(value.probability>0.3 && value.probability<0.5){
    td2.setAttribute("style","border:1px solid black;color:white;background-color:blue");
  }
  else{
    td2.setAttribute("style","border:1px solid black;color:white;background-color:green");
  }
  
  const tr2forbody=document.createElement("tr");
  tr2forbody.append(td1,td2);
  tbodyelement.append(tr2forbody);
})


// let tr2=document.createElement("tr");
// tbodyelement.append(tr2);
   


 
//     let td1=document.createElement("td");
//     td1.setAttribute("style","border:1px solid black;border-collapse:collapse");
//     td1.innerText=`${country[0].country_id}`;
//   tr2.append(td1);

//   let td2=document.createElement("td");
  
//   if(country[0].probability>country[1].probability)
//   {
//     td2.setAttribute("style","color:green;border:1px solid black;border-collapse:collapse")
//   }
//   else{
//    td2.setAttribute("style","color:red;border:1px solid black;border-collapse:collapse");
//   }
//   td2.innerText=`${country[0].probability}`;
// tr2.append(td2);

 
   
//    let tr3=document.createElement("tr");
//    tbodyelement.append(tr3)
  
//      let td3=document.createElement("td");
//      td3.setAttribute("style","border:1px solid black;border-collapse:collapse");
//      td3.innerText=`${country[1].country_id}`;
//    tr3.append(td3);

//    let td4=document.createElement("td");
//    if(country[1].probability>country[0].probability)
//    {
//      td4.setAttribute("style","color:green;border:1px solid black;border-collapse:collapse")
//    }
//    else{
//     td4.setAttribute("style","color:red;border:1px solid black;border-collapse:collapse");
//    }
//    td4.innerText=`${country[1].probability}`;
//  tr3.append(td4);

       Telement.append(theadelement,tbodyelement);
     
    document.body.append(Telement);
}
     }
   ));
    
document.body.append(btnelement);