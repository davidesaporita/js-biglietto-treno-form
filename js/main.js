/***************************
 * VENDITA BIGLIETTO TRENO
 ***************************/

/** 
 * REFERENZE ELEMENTI
 */
var container = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');

/**
 * EVENTI
 */

// Generare il biglieto
bottoneGenera.addEventListener('click', 
    function() {
        // Ottieni valori input utente
        var nome = document.getElementById('nome').value;
        var kmDaPercorrere = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;

        // Calcolo biglietto
        var prezzoKm = 0.21;
        var costoBiglietto = prezzoKm * kmDaPercorrere;
        var offerta = 'Biglietto Standard';

        // Calcoliamo il costo e l'offerta applicata
        if (fasciaEta == 'minorenne') {
            // 20% sconto
            costoBiglietto -= costoBiglietto * 0.2;
            offerta = 'Sconto minorenne';
        } else if (fasciaEta == 'over65') {
            // 40% sconto
            costoBiglietto -= costoBiglietto * 0.4;
            offerta = 'Sconto Over 65';
        }

        // Controllo dei decimali
        costoBiglietto = costoBiglietto.toFixed(2) + '€';

        // Numero random per la carrozza da 1 a 9
        var numCarrozza = Math.ceil( Math.random() * 9);

        // Numero random per codice cp da 90000 a 100000
        var codiceCp = Math.floor( Math.random() * (100000 - 90000) ) + 90000;

        // Inseriamo valori nella pagina
        document.getElementById('nome-passeggero').innerHTML = nome;
        document.getElementById('offerta-applicata').innerHTML = offerta;
        document.getElementById('carrozza').innerHTML = numCarrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('costo').innerHTML = costoBiglietto;

        document.getElementById('costo').innerHTML = costoBiglietto;

        document.getElementById('biglietto').innerHTML += '<div class="row" id="dontclick"><button class="btn" style="text-align:center;">Non cliccare qui</button></div>';
        var dontclick = document.getElementById('dontclick');
        dontclick.addEventListener('click', 
            function() {
                document.getElementById('biglietto').classList.add("rotate");
            }
        );

        // Mostra biglietto
        container.className = 'show';
    }   
);

// Reset biglietto

bottoneAnnulla.addEventListener('click', 
    function() {
        // Reset input utente
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = 'maggiorenne';
        // Nascondi biglietto
        container.className = 'hidden';
        // Reset dati biglietto
        document.getElementById('nome-passeggero').innerHTML = '';
        document.getElementById('offerta-applicata').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codice-cp').innerHTML = '';
        document.getElementById('costo').innerHTML = '';
        document.getElementById('dontclick').remove();
    }
);