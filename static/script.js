async function getSuggestion(){

    const goal=document.getElementById("goal").value;
    const time=document.getElementById("time").value;

    const result=document.getElementById("result");

    result.innerHTML="🤖 Thinking about your next step...";

    const response=await fetch("/suggest",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            goal:goal,
            time:time
        })
    });

    const data=await response.json();

    result.innerHTML=data.result;
}
