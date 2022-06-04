
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
      "id": "16",
      "name": "Nasir Gerhold",
      "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
      "id": "17",
      "name": "Raymundo Ritchie PhD",
      "email": "Antwan.Schoen15@yahoo.com"
    },
    {
      "id": "18",
      "name": "Delmer Marvin",
      "email": "Kiera62@yahoo.com"
    },
    {
      "id": "19",
      "name": "Rachel Wilkinson",
      "email": "Foster_Conroy@gmail.com"
    },
    {
      "id": "20",
      "name": "Gladys Howell",
      "email": "Constance.Labadie10@yahoo.com"
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



   