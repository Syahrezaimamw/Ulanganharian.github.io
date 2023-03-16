//TUGAS FUNCTION DAN OBJEK

//NO1
function cetakFunction(a){
    return `hallo nama saya `+ a
}

console.log(cetakFunction("DICKY"));


//NO 2
function penjumlahan(a, b){
     return a + b;

}
let angka1= 20;
let angka2= 7;
let output = penjumlahan (angka1, angka2)
console.log(output);

//NO 3
var hello;

hello = function(){
    return "hello World"
}
console.log(hello)
//no4
let obj = {
    nama: "john",
    umur: 22,
    bahasa : "indonesia",
    fullName: function(){
        console.log(`nama ${this.nama} ${this.umur} ${this.bahasa}`)
    }
}
obj.fullName();

//no5
let arr = ["John Doe", "laki-laki", "baca buku", 1992]
let objek = {
    Nama: arr[0],
    Gender: arr[1],
    Hobi: arr[2],
    Lahir: arr[3],
};
console.log(objek);

//no 6
let buah = [
    {
        nama:'Nanas',
        bijinya:'tidak',
        harga:9000
    },{
        nama:'Jeruk',
        bijinya:'ada',
        harga:8000
    },{
        nama:'Semangka',
        bijinya:'ada',
        harga:10000
    },{
        nama:'Pisang',
        bijinya:'tidak',
        harga:7000
    },
];
const user= buah.filter((buah) => buah.bijinya === 'tidak');
 console.log(user);
