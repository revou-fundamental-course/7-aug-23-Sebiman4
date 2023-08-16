function luas() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    if (!isNaN(angka1) && !isNaN(angka2)) {
    const hasil1 = angka1 * angka2 / 2;
    document.getElementById("hasil1").textContent = hasil1;
    } else {
        alert("Masukkan nilai terlebih dahulu !");
    }
}

function keliling(){
    const angka3 = parseFloat(document.getElementById("angka3").value);
    const angka4 = parseFloat(document.getElementById("angka4").value);
    const angka5 = parseFloat(document.getElementById("angka5").value);
if (!isNaN(angka3) && !isNaN(angka4) && !isNaN(angka5)) {
    const hasil2= angka3 + angka4 + angka5;
    document.getElementById("hasil2").textContent = hasil2;
    
} else {
    alert("Masukkan nilai terlebih dahulu !");
}
}

function reset1() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil1").value = "";
}

function reset2() {
    document.getElementById("angka3").value = "";
    document.getElementById("angka4").value = "";
    document.getElementById("angka5").value = "";
    document.getElementById("hasil2").value = "";
}

