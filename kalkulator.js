// menampilkan angka-angka di layar
const math = document.querySelectorAll(".math");
const layar = document.querySelector("input");
math.forEach(function(e){
    e.addEventListener("click", function(m){
        let n = m.currentTarget.querySelector("b").innerHTML;
        layar.value += n;
    });
});

// menghitung hasil dari angka-angka di layar
const hasil = document.querySelector(".hasil");
hasil.addEventListener("click", function(){
    console.log(eval(layar.value));
    layar.value = eval(layar.value);
});

// membersihkan layar
const cls = document.querySelector(".cls");
cls.addEventListener("click", function(){
   layar.value = "";
});

// menghapus angka terakhir
const del = document.querySelector(".del");
del.addEventListener("click", function(){
    layar.value = layar.value.substring(0, layar.value.length - 1);
});

// membuat bilangan menjadi negatif atau positif
const minplus = document.querySelector(".minplus");
minplus.addEventListener("click", function(){
    layar.value = eval(layar.value);
    if(layar.value > 0 ){
        layar.value = -Math.abs(layar.value);
    }else{
        layar.value = Math.abs(layar.value);
        
    }
});