
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
      "id": "21",
      "name": "Ciara Klocko",
      "email": "Harvey76@yahoo.com"
    },
    {
      "id": "22",
      "name": "Quentin O'Kon",
      "email": "Amely_Cummings2@yahoo.com"
    },
    {
      "id": "23",
      "name": "Ms. Gabriella Kunde",
      "email": "Lorenza_Cummerata@hotmail.com"
    },
    {
      "id": "24",
      "name": "Gerald Reilly",
      "email": "Lia_Konopelski@gmail.com"
    },
    {
      "id": "25",
      "name": "Brody Carter I",
      "email": "Colten.Wilderman90@hotmail.com"
    },
    {
      "id": "26",
      "name": "Alanis Klocko",
      "email": "Johathan.Champlin69@gmail.com"
    },
    {
      "id": "27",
      "name": "Caroline Miller",
      "email": "Delaney.Kozey74@gmail.com"
    },
    {
      "id": "28",
      "name": "Ms. Merritt McClure",
      "email": "Wendy.Zieme@gmail.com"
    },
    {
      "id": "29",
      "name": "Jovani Schoen",
      "email": "Norval_Zieme@hotmail.com"
    },
    {
      "id": "30",
      "name": "Berniece Bradtke",
      "email": "Okey.Fisher39@hotmail.com"
    },
    {
      "id": "31",
      "name": "Hanna Gottlieb",
      "email": "Edna62@hotmail.com"
    },
    {
      "id": "32",
      "name": "Christiana Bergnaum",
      "email": "Donnie.Paucek22@gmail.com"
    },
    {
      "id": "33",
      "name": "Reid Stehr",
      "email": "Hiram69@gmail.com"
    },
    {
      "id": "34",
      "name": "Evans Ward",
      "email": "Liliane72@hotmail.com"
    },
    {
      "id": "35",
      "name": "Miss Enos Davis",
      "email": "Kolby.Grady@hotmail.com"
    },
    {
      "id": "36",
      "name": "Mathew Lueilwitz",
      "email": "Mariah.Hagenes@yahoo.com"
    },
    {
      "id": "37",
      "name": "Romaine Robel",
      "email": "Sheila19@yahoo.com"
    },
    {
      "id": "38",
      "name": "Immanuel Aufderhar",
      "email": "Aileen32@hotmail.com"
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



    