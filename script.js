let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let ntugas = document.getElementById("tugas");
let nkuis = document.getElementById("kuis");
let nuts = document.getElementById("uts");
let nuas = document.getElementById("uas");
let nsoftskill = document.getElementById("softskill");

let tabel = document.getElementById("tblMahasiswa");
// array data
let data = [];
let nilaihuruf;
let jumlah;


function nakhir(ntugas, nkuis,nuts,nuas, nsoftskill){
    return jumlah =ntugas*0.2+nkuis*0.1+nuts*0.3+nuas*0.3+nsoftskill*0.1;
}

function nhuruf(jumlah){
    if (jumlah>90){
        return nilaihuruf = 'A';
    }
    else if (jumlah>85){
        return nilaihuruf = 'A-';
    }
    else if (jumlah>75){
        return nilaihuruf = 'B+';
    }
    else if (jumlah>67){
        return nilaihuruf = 'B';
    }
    else if (jumlah>58){
        return nilaihuruf = 'B-';
    }
    else if (jumlah>50){
        return nilaihuruf = 'C+';
    }
    else if (jumlah>41){
        return nilaihuruf = 'C';
    }
    else if (jumlah>16){
        return nilaihuruf = 'D';
    }
    else if (jumlah>0){
        return nilaihuruf = 'E';
    }
}

function simpanData(){
    console.log("Tombol ditekan");
    console.log(npm.value);
    console.log(nama.value);
    console.log(ntugas.value);
    console.log(nkuis.value);
    console.log(nuts.value);
    console.log(nuas.value);
    console.log(nsoftskill.value);    
    
    // method push()
    data.push([npm.value, nama.value, ntugas.value, nkuis.value
        ,  nuts.value, nuas.value
        , nsoftskill.value,nakhir(ntugas.value, nkuis.value, nuts.value, nuas.value, nsoftskill.value),nhuruf(jumlah)]);
    console.log("Data: " + data);
    tabel.innerHTML = "";
    data.forEach(tampilMahasiswa);
}

data.forEach(tampilMahasiswa);

function tampilMahasiswa(value, index){
    console.log("forEach");
    console.log(value);
    console.log(index);
    // tabel.innerHTML += "<tr><td>" + value[0] + "</td><td>" + value[1] + "</td><td><button onclick='hapusMahasiswa("+index+")'>Hapus</button></td></tr>";
    tabel.innerHTML += '<tr><td>' + value[0] + '</td><td>' + value[1] +'</td><td>'
    + value[2]+'</td><td>'+value[3]+'</td><td>'+value[4]+'</td><td>'+value[5]+'</td><td>'+value[6]+'</td><td>'+value[7]+'</td><td>'+value[8]+'</td><td><button onclick="hapusMahasiswa('+index+')">Hapus</button></td></td>';

}

function hapusMahasiswa(index){
    console.log("Hapus data pada index: " + index);
    // method splice untuk hapus data
    data.splice(index, 1);
    // lihat isi variabel array data
    console.log(data);
    tabel.innerHTML = "";
    data.forEach(tampilMahasiswa);
}

// let resultData = [
//     [123, "aaa"],
//     [234, "bbb"]
// ];

// let resultData2 = [
//     {npm: 123, nama: "aaa"},
//     {npm: 234, nama: "bbb"},
// ];
