let cop = document.getElementById("copybtn");
cop.addEventListener("click", copy);

function copy(e) {
  let copied = document.getElementById("inputtext");

  copied.select();
  copied.setSelectionRange(0, 9999);

  navigator.clipboard.writeText(copied.value);
  cop.innerText = "Copied !!";
}

let pas = document.getElementById("pastebtn");
pas.addEventListener("click", paste);

function paste(e) {
  
  if (document.getElementById("copybtn").innerText === "Copied !!") {
    document.getElementById("outputtext").classList.remove("hide");
    let out = document.getElementById("outputtext");
    
    out.value = document.getElementById("inputtext").value;
    pas.innerText = "Pasted !!";
    
  }
  else{
    alert("Areh bhai copy karlo pehle !!");
  }
}