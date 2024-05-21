let isActive = "luas";
// botton switcher
let luasBtn = document.getElementById("luasbtn");
let kelBtn = document.getElementById("kelbtn");
// gather id for switcher between luas or kel
let hitungLuas = document.getElementById("hitungLuas");
let hitungKel = document.getElementById("hitungKel");
const validationAlert = "INVALID INPUT!!! please input positive numeric chars";
// calculation function triggered by calculate button
const calculate = (tipe) => {
  if (tipe === "luas") {
    // variable gather alas tinggi value
    let alas = Number(document.getElementById("alas").value);
    let tinggi = Number(document.getElementById("tinggi").value);
    // validation not number and +
    if (!Number(alas) || !Number(tinggi) || alas < 0 || tinggi < 0) {
      console.log("invalid input ");
      return alert(validationAlert);
    }
    // calculation exec
    let result = (1 / 2) * alas * tinggi;
    // add element on id when calculation i completed
    document.getElementById(
      "result1"
    ).innerHTML = `<h5>Result:</h5><p>L = 1/2 x a x t<br>L = 1/2 x ${alas} x ${tinggi}<br>L = <b>${result}</b></p>`;
    return;
  } else {
    // variable gather s1s2s3 value
    let s1 = Number(document.getElementById("s1").value);
    let s2 = Number(document.getElementById("s2").value);
    let s3 = Number(document.getElementById("s3").value);
    // validation not number and +
    if (
      !Number(s1) ||
      !Number(s2) ||
      !Number(s3) ||
      s1 < 0 ||
      s2 < 0 ||
      s3 < 0
    ) {
      console.log("invalid input ");
      return alert(validationAlert);
    }
    // calculation exec
    let result = s1 + s2 + s3;
    // add element on id when calculation i completed
    document.getElementById(
      "result2"
    ).innerHTML = `<h5>Result:</h5><p>K = S1 + S2 + S3<br>K = ${s1} + ${s2} + ${s3}<br>K = <b>${result}</b></p>`;
    return;
  }
};
// check element has specific class
const hasClass = (element, className) => {
  return element.classList.contains(className);
};
// function of switching between class
const switchCalc = (tipe) => {
  // condition if clicked == isactive state
  if (tipe != isActive) {
    if (!hasClass(luasBtn, "active")) {
      // condition if luasbtn is inactive
      luasBtn.className = "active";
      kelBtn.className = "";
      isActive = "luas";
      hitungKel.style.display = "none";
      hitungLuas.style.display = "block";
    } else {
      //condition meet else
      kelBtn.className = "active";
      luasBtn.className = "";
      isActive = "keliling";
      hitungKel.style.display = "block";
      hitungLuas.style.display = "none";
    }
  } else return;
};
// reset field function
const resetField = (tipe) => {
  if (tipe == "luas") {
    // remove any child element
    document.getElementById("alas").value = document.getElementById(
      "tinggi"
    ).value = "";
    document.getElementById("result1").innerHTML = "";
  } else {
    // remove any child elements
    document.getElementById("s1").value =
      document.getElementById("s2").value =
      document.getElementById("s3").value =
        "";
    document.getElementById("result2").innerHTML = "";
  }
};
