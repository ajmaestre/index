

// CAPTURA DE DATOS DE LOS DOCENTES DE PLANTA

var NumDocPlt = document.querySelector('#floatingNumber').value;
var NumPregPlt = document.querySelector('#numPregPlt').value;
var numPregMedPlt = document.querySelector('#numPregMedPlt').value;
var numEspPlt = document.querySelector('#numEspPlt').value;
var numMaesPlt = document.querySelector('#numMaesPlt').value;
var numDoctPlt = document.querySelector('#numDoctPlt').value;
var CatDocPlt = document.querySelector('#CatDocPlt').value;
var YearExpPlt = document.querySelector('#floatingYearExpPlt').value;
var YearExpInvPlt = document.querySelector('#floatingYearExpInvPlt').value;
var RevPubPlt = document.querySelector('#floatingRevPubPlt').value;
var LibPubPlt = document.querySelector('#floatingLibPubPlt').value;
var ObArtPlt = document.querySelector('#floatingObArtPlt').value;
var ProdSoftPlt = document.querySelector('#floatingProdSoftPlt').value;

var doc_planta_json = {}

function chargeDataDocPlt(){

    NumDocPlt = document.querySelector('#floatingNumber').value;
    NumPregPlt = document.querySelector('#numPregPlt').value;
    numPregMedPlt = document.querySelector('#numPregMedPlt').value;
    numEspPlt = document.querySelector('#numEspPlt').value;
    numMaesPlt = document.querySelector('#numMaesPlt').value;
    numDoctPlt = document.querySelector('#numDoctPlt').value;
    CatDocPlt = document.querySelector('#CatDocPlt').value;
    YearExpPlt = document.querySelector('#floatingYearExpPlt').value;
    YearExpInvPlt = document.querySelector('#floatingYearExpInvPlt').value;
    RevPubPlt = document.querySelector('#floatingRevPubPlt').value;
    LibPubPlt = document.querySelector('#floatingLibPubPlt').value;
    ObArtPlt = document.querySelector('#floatingObArtPlt').value;
    ProdSoftPlt = document.querySelector('#floatingProdSoftPlt').value;

    doc_planta_json = {
        'NumDocPlt': NumDocPlt,
        'NumPregPlt': NumPregPlt,
        'numPregMedPlt': numPregMedPlt,
        'numEspPlt': numEspPlt,
        'numMaesPlt': numMaesPlt,
        'numDoctPlt': numDoctPlt,
        'CatDocPlt': CatDocPlt,
        'YearExpPlt': YearExpPlt,
        'YearExpInvPlt': YearExpInvPlt,
        'RevPubPlt': RevPubPlt,
        'LibPubPlt': LibPubPlt,
        'ObArtPlt': ObArtPlt,
        'ProdSoftPlt': ProdSoftPlt
    }

}

function saveDocPlt(){
    chargeDataDocPlt()
    if(NumDocPlt=='' || NumPregPlt=='' || numPregMedPlt=='' || numEspPlt=='' || numMaesPlt=='' || numDoctPlt=='' || CatDocPlt=='' || YearExpPlt=='' || YearExpInvPlt=='' || RevPubPlt=='' || LibPubPlt=='' || ObArtPlt=='' || ProdSoftPlt==''){
        alert('Aún hay campos sin llenar, por favor entregue toda la información solicitada')
    }else{
        localStorage.setItem("DocPlanta", JSON.stringify(doc_planta_json));
        alert('Datos almacenados correctamente')
    }
}

function SelectNumPregPlt(){
    NumPregPlt = document.querySelector('#numPregPlt').value;
}

function SelectNumMedPregPlt(){
    numPregMedPlt = document.querySelector('#numPregMedPlt').value;
}

function SelectNumEspPlt(){
    numEspPlt = document.querySelector('#numEspPlt').value;
}

function SelectNumMaesPlt(){
    numMaesPlt = document.querySelector('#numMaesPlt').value;
}

function SelectNumDoctPlt(){
    numDocPlt = document.querySelector('#numDoctPlt').value;
}

function SelectCatDocPlt(){
    CatDocPlt = document.querySelector('#CatDocPlt').value;
}


// CAPTURA DE DATOS DE DOCENTE OCASIONAL

var NumberOcs = document.querySelector('#floatingNumberOcs').value;
var CatDocOcs = document.querySelector('#CatDocOcs').value;
var PostDocOcs = document.querySelector('#PostDocOcs').value;
var GSDocOcs = document.querySelector('#GSDocOcs').value;

var doc_ocasional_json = {}

function chargeDataDocOcs(){

    NumberOcs = document.querySelector('#floatingNumberOcs').value;
    CatDocOcs = document.querySelector('#CatDocOcs').value;
    PostDocOcs = document.querySelector('#PostDocOcs').value;
    GSDocOcs = document.querySelector('#GSDocOcs').value;

    doc_ocasional_json = {
        'NumberOcs': NumberOcs,
        'CatDocOcs': CatDocOcs,
        'PostDocOcs': PostDocOcs,
        'GSDocOcs': GSDocOcs,
    }

}

function saveDocOcs(){
    chargeDataDocOcs()
    if(NumberOcs=='' || CatDocOcs=='' || PostDocOcs=='' || GSDocOcs==''){
        alert('Aún hay campos sin llenar, por favor entregue toda la información solicitada')
    }else{
        localStorage.setItem("DocOcasional", JSON.stringify(doc_ocasional_json));
        alert('Datos almacenados correctamente')
    }
}

function SelectCatDocOcs(){
    CatDocOcs = document.querySelector('#CatDocOcs').value;
}

function SelectPostDocOcs(){
    PostDocOcs = document.querySelector('#PostDocOcs').value;
}

function SelectGSDocOcs(){
    GSDocOcs = document.querySelector('#GSDocOcs').value;
}


// CAPTURA DE DATOS DE DOCENTE CATEDRATICO

var NumberCat = document.querySelector('#floatingNumberCat').value;
var NumberH = document.querySelector('#floatingNumberH').value;
var ValorH = document.querySelector('#floatingValorH').value;
var PostDocCat = document.querySelector('#PostDocCat').value;
var GSDocCat = document.querySelector('#GSDocCat').value;

var doc_catedratico_json = {}

function chargeDataDocCat(){

    NumberCat = document.querySelector('#floatingNumberCat').value;
    NumberH = document.querySelector('#floatingNumberH').value;
    ValorH = document.querySelector('#floatingValorH').value;
    PostDocCat = document.querySelector('#PostDocCat').value;
    GSDocCat = document.querySelector('#GSDocCat').value;

    doc_catedratico_json = {
        'NumberCat': NumberCat,
        'NumberH': NumberH,
        'ValorH': ValorH,
        'PostDocCat': PostDocCat,
        'GSDocCat': GSDocCat,
    }

}

function saveDocCat(){
    chargeDataDocCat()
    if(NumberCat=='' || NumberH=='' || ValorH=='' || PostDocCat=='' || GSDocCat==''){
        alert('Aún hay campos sin llenar, por favor entregue toda la información solicitada')
    }else{
        localStorage.setItem("DocCatedratico", JSON.stringify(doc_catedratico_json));
        alert('Datos almacenados correctamente')
    }
}

function SelectPostDocCat(){
    PostDocCat = document.querySelector('#PostDocCat').value;
}

function SelectGSDocCat(){
    GSDocCat = document.querySelector('#GSDocCat').value;
}


// CALCULO DE LA NOMINA DOCENTE

var NominaTotal = document.querySelector('#NominaTotal')

function Calculate(){
    
    var DocPlanta = JSON.parse(localStorage.getItem("DocPlanta"));
    var DocOcasional = JSON.parse(localStorage.getItem("DocOcasional"));
    var DocCatedratico = JSON.parse(localStorage.getItem("DocCatedratico"));

    if(DocPlanta == null){
        alert('Aún no ha ingresado los datos de los docentes de planta');
    }else if(DocOcasional == null){
        alert('Aún no ha ingresado los datos de los docentes ocasionales');
    }else if(DocCatedratico == null){
        alert('Aún no ha ingresado los datos de los docentes catedraticos');
    }else{

        console.log(DocPlanta.numEspPlt)
        console.log(DocPlanta.numMaesPlt)
        console.log(DocPlanta.numDoctPlt)
        // CALCULO DE LA NOMINA DE LOS DOCENTES DE PLANTA
        let Tpre = (178*parseFloat(DocPlanta.NumPregPlt)) + (183*parseFloat(DocPlanta.numPregMedPlt));
        let Tpos = (20*parseFloat(DocPlanta.numEspPlt)) + (40*parseFloat(DocPlanta.numMaesPlt)) + (80*parseFloat(DocPlanta.numDoctPlt));
        let categoria = parseFloat(DocPlanta.CatDocPlt);
        let expCateg = 0;

        if (categoria == 37){
            expCateg = 20*parseFloat(DocPlanta.YearExpPlt);
        }else if(categoria == 58){
            expCateg = 45*parseFloat(DocPlanta.YearExpPlt);
        }else if(categoria == 74){
            expCateg = 90*parseFloat(DocPlanta.YearExpPlt);
        }else if(categoria == 96){
            expCateg = 120*parseFloat(DocPlanta.YearExpPlt);
        }

        let Cesc = parseFloat(categoria) + expCateg + (6*parseFloat(DocPlanta.YearExpInvPlt));
        let Pacad = (12*parseFloat(DocPlanta.RevPubPlt)) + (20*parseFloat(LibPubPlt)) + (20*parseFloat(ObArtPlt)) + (15*parseFloat(ProdSoftPlt));

        let PuntajeDocPlanta = Tpre + Tpos + Cesc + Pacad;
        
        let Nomina_Doc_Planta = parseFloat(DocPlanta.NumDocPlt)*(6435)*PuntajeDocPlanta;


        // CALCULO DE LA NOMINA DE LOS DOCENTES OCASIONALES
        let SMMLV = 1160000;
        let Bono_Doc_Ocs = parseFloat(DocOcasional.PostDocOcs) + parseFloat(DocOcasional.GSDocOcs);

        let Nomina_Doc_Ocasional = parseFloat(DocOcasional.NumberOcs)*((SMMLV*parseFloat(DocOcasional.CatDocOcs)) + (SMMLV*Bono_Doc_Ocs));


        // CALCULO DE LA NOMINA DE LOS DOCENTES CATEDRATICOS
        let Bono_Doc_Cat = parseFloat(DocCatedratico.PostDocCat) + parseFloat(DocCatedratico.GSDocCat);

        let Nomina_Doc_Catedratico = parseFloat(DocCatedratico.NumberCat)*((parseFloat(DocCatedratico.ValorH)*parseFloat(DocCatedratico.NumberH)) + (parseFloat(DocCatedratico.ValorH)*parseFloat(DocCatedratico.NumberH)*Bono_Doc_Cat))


        // CALCULO DE LA NOMINA TOTAL

        let NOMINA_TOTAL = Nomina_Doc_Planta + Nomina_Doc_Ocasional + Nomina_Doc_Catedratico;

        const formatterPeso = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        })

        NominaTotal.value = formatterPeso.format(NOMINA_TOTAL);

        localStorage.clear();
    }

}