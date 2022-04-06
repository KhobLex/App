

    fetch('https://www.boredapi.com/api/activity/')
.then((response)=> response.json())
.then((data)=>{
    document.getElementById("activity").innerHTML= data.activity;
    document.getElementById("type").innerHTML= `Activity Type : ${data.type}`;
    if(data.link == ''){
        
    }else{
        document.getElementById("link").innerHTML= `<a href="${data.link}">Link</a>`;
    }
    console.log(data);
})
.catch((err)=>{
    document.getElementById("activity").innerHTML=err.message + `, Check Your Network Connection  ! ! ! !`;
})


