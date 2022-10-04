/* Lê o XML */  
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/lista_animes.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
let animes = xmlDoc.getElementsByTagName("anime");
var cont = animes.length;

matriz = new Array;
x = 0;


matriz = [
                ['D','R','A','G','O','N','B','A','L','L','N','B','L','E','A','C','H','N','T'],
                ['C','H','A','I','N','S','A','W','M','A','N','C','N','A','R','U','T','O','U'],
                ['A','P','A','S','O','N','E','P','I','E','C','E','O','U','L','O','H','B','G'],
                ['R','S','O','C','H','G','T','S','Y','T','D','I','A','H','N','T','E','I','E'],
                ['I','A','T','O','K','Y','O','G','H','O','U','L','O','N','Y','N','L','E','R'],
                ['T','L','S','E','R','I','T','Q','S','U','I','T','A','L','U','T','A','T','H'],
                ['O','T','D','E','M','O','N','S','L','A','Y','E','R','A','M','A','T','Y','J'],
                ['A','J','O','I','E','H','N','W','I','S','E','E','T','E','S','F','H','H','K'],
                ['A','O','N','E','P','U','N','C','H','M','A','N','A','I','E','R','T','N','B'],
                ['G','H','L','I','Z','J','D','F','A','T','C','O','E','Z','K','X','B','B','A'],
                ['C','Y','B','E','R','P','U','N','K','E','D','G','E','R','U','N','N','E','R'],
                ['R','V','U','C','B','A','L','K','Z','O','T','J','S','N','Q','U','R','O','G'],
                ['N','T','R','P','S','V','T','S','G','O','L','D','E','N','T','I','M','E','X'],
];


document.write("<table>");
for(linha=0; linha<13; linha++){
    
    document.write("<tr>");
    for(coluna=0; coluna<19; coluna++){
       
        x++;
        document.write("<td id='" + x + "' align='center' >" + matriz[linha][coluna] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


colorirPalavra();

function colorirPalavra(){
    for(i=0; i<=cont-1; i++){
        
        inicial = parseInt(animes[i].getElementsByTagName('inicial')[0].childNodes[0].nodeValue);
        final = parseInt(animes[i].getElementsByTagName('final')[0].childNodes[0].nodeValue);
        incremento = parseInt(animes[i].getElementsByTagName('incremento')[0].childNodes[0].nodeValue);
        cor = animes[i].getElementsByTagName('cor')[0].childNodes[0].nodeValue;

        for(z=inicial; z<=final; z=z+incremento){
           
            document.getElementById(z).style.background = cor;
        }
    }
}