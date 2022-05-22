let boxelement=document.createElement("div");
boxelement.classList.add("box");
document.body.append(boxelement);

      
      


//table element
let Tableelement=document.createElement("table");
boxelement.append(Tableelement);

       //tr1 element
      let tr1element=document.createElement("tr");
      Tableelement.append(tr1element);

//td11 element
 
           let td11=document.createElement("td");
           td11.setAttribute("colspan","3");
           tr1element.append(td11);
             
           //ip1
             let ip1=document.createElement("input");
             ip1.setAttribute("type","text");
             ip1.setAttribute("id","result0")
             td11.append(ip1);

             
            


 //td12 element
            let td12= document.createElement("td")
            tr1element.append(td12);

            //ip2
             let ip2=document.createElement("input");
             ip2.setAttribute("type","button");
             ip2.setAttribute("value","c");
             ip2.classList.add("button")
     //clear function
             let clearfunction=(()=>{
              document.getElementById("result0").value = "";
                 })
		  
             ip2.addEventListener("click",clearfunction);
             td12.append(ip2)

    //tr2 element
    let tr2element=document.createElement("tr");
    Tableelement.append(tr2element);             
          
    
          //td21 element
          let td21= document.createElement("td")
          tr2element.append(td21);

          //ip-11
           let ip11=document.createElement("input");
           ip11.setAttribute("type","button");
           ip11.setAttribute("value","1");
           ip11.setAttribute("id","result11");
           ip11.classList.add("button");

                let display1=(()=>{
                document.getElementById("result0").value+="1";
              });
              ip11.addEventListener("click",display1);
              td21.append(ip11);
              

          //td22 element
          let td22= document.createElement("td")
          tr2element.append(td22);

          //ip-12
           let ip12=document.createElement("input");
           ip12.setAttribute("type","button");
           ip12.setAttribute("value","2");
           ip12.setAttribute("id","result12");
           ip12.classList.add("button");
           ip12.addEventListener("click",(()=>{
             document.getElementById("result0").value+="2";
           }))
            td22.append(ip12);
  
           

            
          //td23  element
          let td23= document.createElement("td")
          tr2element.append(td23);

          //ip-13
           let ip13=document.createElement("input");
           ip13.setAttribute("type","button");
           ip13.setAttribute("value","3");
           ip13.setAttribute("id","result13");
           ip13.classList.add("button");
           ip13.addEventListener("click",(()=>{
            document.getElementById("result0").value+="3";
          }))
            td23.append(ip13);

            
    //  let value3=document.getElementById("result13")
    //  console.log(value3.value);


            
          //td21 element
          let td24= document.createElement("td")
          tr2element.append(td24);

          //ip-14
           let ip14=document.createElement("input");
           ip14.setAttribute("type","button");
           ip14.setAttribute("value","+");
           ip14.setAttribute("id","result14");
           ip14.classList.add("button");
           ip14.addEventListener("click",(()=>{
            document.getElementById("result0").value+="+";
          }))
            td24.append(ip14);


            // let value4=document.getElementById("result14")
            // console.log(value4.value);
       

              //tr3 element
    let tr3element=document.createElement("tr");
    Tableelement.append(tr3element);             
          
    
          //td31 element
          let td31= document.createElement("td")
          tr3element.append(td31);

          //ip-21
           let ip21=document.createElement("input");
           ip21.setAttribute("type","button");
           ip21.setAttribute("value","4");
           ip21.setAttribute("id","result21");
           ip21.classList.add("button");
           ip21.addEventListener("click",(()=>{
            document.getElementById("result0").value+="4";
          }))
            td31.append(ip21);


            // let value5=document.getElementById("result21")
            // console.log(value5.value);
       

          //td32 element
          let td32= document.createElement("td")
          tr3element.append(td32);

          //ip-32
           let ip32=document.createElement("input");
           ip32.setAttribute("type","button");
           ip32.setAttribute("value","5");
           ip32.setAttribute("id","result32");
           ip32.classList.add("button");
           ip32.addEventListener("click",(()=>{
            document.getElementById("result0").value+="5";
          }))
            td32.append(ip32);


            // let value6=document.getElementById("result32")
            // console.log(value6.value);
       
            
          //td33  element
          let td33= document.createElement("td")
          tr3element.append(td33);

          //ip-33
           let ip33=document.createElement("input");
           ip33.setAttribute("type","button");
           ip33.setAttribute("value","6");
           ip33.setAttribute("id","result33");
           ip33.classList.add("button");
           ip33.addEventListener("click",(()=>{
            document.getElementById("result0").value+="6";
          }))
            td33.append(ip33);

            let value7=document.getElementById("result33")
            console.log(value7.value);
       

            
          //td34 element
          let td34= document.createElement("td")
          tr3element.append(td34);

          //ip-34
           let ip34=document.createElement("input");
           ip34.setAttribute("type","button");
           ip34.setAttribute("value","-");
           ip34.setAttribute("id","result34");
           ip34.classList.add("button");
           ip34.addEventListener("click",(()=>{
            document.getElementById("result0").value+="-";
          }))
            td34.append(ip34);


            // let value8=document.getElementById("result34")
            // console.log(value8.value);
       

            
              //tr4 element
    let tr4element=document.createElement("tr");
    Tableelement.append(tr4element);             
          
    
          //td41 element
          let td41= document.createElement("td")
          tr4element.append(td41);

          //ip-41
           let ip41=document.createElement("input");
           ip41.setAttribute("type","button");
           ip41.setAttribute("value","7");
           ip41.setAttribute("id","result41");
           ip41.classList.add("button");
           ip41.addEventListener("click",(()=>{
            document.getElementById("result0").value+="7";
          }))
            td41.append(ip41);


            // let value9=document.getElementById("result41")
            // console.log(value9.value);
       

          //td42 element
          let td42= document.createElement("td")
          tr4element.append(td42);

          //ip-42
           let ip42=document.createElement("input");
           ip42.setAttribute("type","button");
           ip42.setAttribute("value","8");
           ip42.setAttribute("id","result42");
           ip42.classList.add("button");
           ip42.addEventListener("click",(()=>{
            document.getElementById("result0").value+="8";
          }))
            td42.append(ip42);

           
    //  let value10=document.getElementById("result42")
    //  console.log(value10.value);

            
          //td43  element
          let td43= document.createElement("td")
          tr4element.append(td43);

          //ip-43
           let ip43=document.createElement("input");
           ip43.setAttribute("type","button");
           ip43.setAttribute("value","9");
           ip43.setAttribute("id","result43");
           ip43.classList.add("button");
           ip43.addEventListener("click",(()=>{
            document.getElementById("result0").value+="9";
          }))
            td43.append(ip43);


            // let value11=document.getElementById("result43")
            // console.log(value11.value);
       
            
          //td44 element
          let td44= document.createElement("td")
          tr4element.append(td44);

          //ip-44
           let ip44=document.createElement("input");
           ip44.setAttribute("type","button");
           ip44.setAttribute("value","*");
           ip44.setAttribute("id","result44");
           ip44.classList.add("button");
           ip44.addEventListener("click",(()=>{
            document.getElementById("result0").value+="*";
          }))
            td44.append(ip44);


            // let value12=document.getElementById("result44")
            // console.log(value12.value);
       

     
              //tr5 element
              let tr5element=document.createElement("tr");
              Tableelement.append(tr5element);             
                    
              
                    //td51 element
                    let td51= document.createElement("td")
                    tr5element.append(td51);
          
                    //ip-51
                     let ip51=document.createElement("input");
                     ip51.setAttribute("type","button");
                     ip51.setAttribute("value","=");
                     ip51.setAttribute("id","result51");
                     ip51.classList.add("button");
                     ip51.addEventListener("click",(()=>{
                      let x = document.getElementById("result0").value
                      let y = eval(x)
                      document.getElementById("result0").value = y
                    }))
                      td51.append(ip51);
          
          
    //  let value13=document.getElementById("result51")
    //  console.log(value13.value);

          
                    //td52 element
                    let td52= document.createElement("td")
                    tr5element.append(td52);
          
                    //ip-52
                     let ip52=document.createElement("input");
                     ip52.setAttribute("type","button");
                     ip52.setAttribute("value","0");
                     ip52.setAttribute("id","result52");
                     ip52.classList.add("button");
                     ip52.addEventListener("click",(()=>{
                      document.getElementById("result0").value+="0";
                    }))
                      td52.append(ip52);
          
          
    //  let value14=document.getElementById("result52")
    //  console.log(value14.value);

                      
                    //td53  element
                    let td53= document.createElement("td")
                    tr5element.append(td53);
          
                    //ip-53
                     let ip53=document.createElement("input");
                     ip53.setAttribute("type","button");
                     ip53.setAttribute("value","%");
                     ip53.setAttribute("id","result53");
                     ip53.classList.add("button");
                     ip53.addEventListener("click",(()=>{
                      document.getElementById("result0").value+="%";
                    }))
                      td53.append(ip53);
          
          
    //  let value15=document.getElementById("result53")
    //  console.log(value15.value);

                      
                    //td54 element
                    let td54= document.createElement("td")
                    tr5element.append(td54);
          
                    //ip-44
                     let ip54=document.createElement("input");
                     ip54.setAttribute("type","button");
                     ip54.setAttribute("value","/");
                     ip54.setAttribute("id","result54");
                     ip54.classList.add("button");
                     ip54.addEventListener("click",(()=>{
                      document.getElementById("result0").value+="/";
                    }))
                      td54.append(ip54);
          
          
    //  let value16=document.getElementById("result54")
    //  console.log(value16.value);

          
          
          
