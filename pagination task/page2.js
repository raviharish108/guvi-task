
    let headers=["id","name","email-id"];

let headerstr=document.createElement("tr");
//th codes
headers.forEach((item)=>{
    const thelement=document.createElement("th");
    thelement.setAttribute("scope","col");
    thelement.innerText=item;
    headerstr.append(thelement);
});
let theadelement=document.createElement("thead");
theadelement.append(headerstr);


let persondetails=[ {
      "id": "11",
      "name": "Torrance Rau",
      "email": "Orin45@gmail.com"
    },
    {
      "id": "12",
      "name": "Harold Gutmann MD",
      "email": "Alyce.Stracke37@yahoo.com"
    },
    {
      "id": "13",
      "name": "Taryn Torphy",
      "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
      "id": "14",
      "name": "Bryana Lang",
      "email": "Tatum.Ullrich@yahoo.com"
    },
    {
      "id": "15",
      "name": "Nyasia Green DDS",
      "email": "Dino83@gmail.com"
    }];

const tbodyelement=document.createElement("tbody");


persondetails.forEach((value)=>{
    let th2=document.createElement("th");
    th2.setAttribute("scope","row");
    th2.innerText=value.id
    
    let td1=document.createElement("td");
    td1.innerText=value.name;
    
    let td2=document.createElement("td");
    td2.innerText=value.email;

    const tr2forbody=document.createElement("tr");
    tr2forbody.append(th2,td1,td2);
    tbodyelement.append(tr2forbody);
})


let telement=document.createElement("table");
telement.style.margin="200px";
telement.setAttribute("class","table");
telement.append(theadelement,tbodyelement);
document.body.append(telement);



  