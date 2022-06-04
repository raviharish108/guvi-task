   
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


let persondetails=[{
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
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



    let divelement=document.createElement("div");
    divelement.style.display="flex";
    divelement.style.marginLeft="550px"
    document.body.append(divelement);
