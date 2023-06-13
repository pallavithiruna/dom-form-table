// function submit(){
//     var firstname=document.getElementById("child1").value;
//     var lastname=document.getElementById("child2").value;
//     var address=document.getElementById("child3").value;
//     var pincode=document.getElementById("child4").value;
//     var gender=document.getElementsByName("gender");
//     var state=document.getElementById("child5").value;
//     var country=document.getElementById("child6").value;
   
//     console.log(firstname);
//     console.log(lastname);
//     console.log(address);
//     console.log(pincode);
//     console.log(state);
//     console.log(country);
    

// }; 

function submit() {
        const firstname = document.getElementById('child1').value;
        const lastname= document.getElementById('child2').value;
        const address=document.getElementById("child3").value;
        const pincode=document.getElementById("child4").value;
        const gender=document.getElementsByName("gender")
        var i;
        for(i=0;i<=gender.length;i++){
        var data=gender[i];
        if(data.checked){
        result=data.value;
        break;
        }
       else{
       result='noRadioChecked'
       }
       }
        const state=document.getElementById("child5").value;
        const country=document.getElementById("child6").value;
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const firstEle = document.createElement('td');
        const lastEle = document.createElement('td');
        const addEle = document.createElement('td');
        const pinEle= document.createElement('td');
        const genderEle=document.createElement('td')
        const stateEle=document.createElement('td');
        const countryEle=document.createElement('td');
        firstEle.innerHTML = firstname;
        lastEle.innerHTML = lastname;
        addEle.innerHTML=address;
        pinEle.innerHTML=pincode;
        genderEle.innerHTML=result;
        stateEle.innerHTML=state;
        countryEle.innerHTML=country;
        trElement.appendChild(firstEle);
        trElement.appendChild(lastEle);
        trElement.appendChild(addEle);
        trElement.appendChild(pinEle);
        trElement.appendChild(genderEle)
        trElement.appendChild(stateEle);
        trElement.appendChild(countryEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
