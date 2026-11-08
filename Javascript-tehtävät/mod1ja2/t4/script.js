/*
Harry Potter -lastenkirjoissa lajitteluhattu sijoittaa Tylypahkan noitien ja velhojen koulun uuden oppilaan yhteen neljästä tuvasta, jotka ovat Rohkelikko, Luihuinen, Puuskupuh ja Korpinkynsi. Kirjoita sähköinen lajitteluhattu, joka kysyy oppilaan nimeä ja arpoo oppilaalle tuvan. Jos annat nimeksi esimerkiksi Anna, ohjelma tulostaa HTML-dokumenttiin ”Anna, sinä olet Korpinkynsi.” (3p)
Käytä metodia Math.random() arvon (1, 2, 3 tai 4) arpomiseen.
Kun luku on arvottu, tarvitset valintarakenteen, jossa on useita vaihtoehtoja (if, else if, …, else tai switch).
*/

const nimi = prompt("Anna nimi?");

const tuvat = ["Rohkelikko", "Luihunen", "Puuskupuh", "Korpikynsi"];

let nro = Math.floor(Math.random() * 3);

if (nro == 0) {
    document.querySelector('#tulos').innerHTML = nimi + ' olet ' + tuvat[nro];
} else if (nro == 1) {
    document.querySelector('#tulos').innerHTML = nimi + ' olet ' + tuvat[nro]; 
} else if (nro == 2) {
    document.querySelector('#tulos').innerHTML = nimi + ' olet ' + tuvat[nro];
} else {
    document.querySelector('#tulos').innerHTML = nimi + ' olet ' + tuvat[nro];
}



