const sezione = document.querySelector('#titoloGalleria section');
const lista = document.querySelector('#titoloGalleria h1');
const titolo = document.querySelector('#titoloGalleria section div');

const figure = document.createElement('figure');
figure.setAttribute('class','animate__animated animate__fadeInRight');
const figcaption = document.createElement('figcaption');
const img = document.createElement('img');

const lb1 = document.createElement('h2');
const lb2 = document.createElement('h2');
const lb3 = document.createElement('h2');

const macchineIndustriali = ['Puma 35 Q.li', 'Puma 60 Q.li', 'Gransasso 75 Q.li', 'Traker'];
const macchineOperatrici = ['Puma 65 Q.li' , 'Gransasso 80 Q.li', 'Traker'];

let stop = true;

lista.addEventListener('click',visualizza)
function visualizza(){
    if(stop != false){
        lb1.setAttribute('class','animate__animated animate__fadeInLeft');
        lb1.setAttribute('class','animazioneTitolo');
        lb1.textContent = 'Macchine industriali';
        titolo.appendChild(lb1);
            for (const macchina of macchineIndustriali){
                const para1 = document.createElement('p');
                para1.setAttribute('class','animate__animated animate__fadeInLeft');
                para1.textContent = macchina;
                titolo.appendChild(para1);

                if(macchina === macchineIndustriali[0]){
                    para1.addEventListener('click',function(){
                        img.setAttribute('src','./galleryImages/puma35.webp');
                        sezione.appendChild(figure);
                        figure.appendChild(img);
                        figcaption.textContent = 'Per chi lavora, il carico utile e importante, e il PUMA 35 ti sorprendera. Questo "peso leggero" si colloca ai vertici della categoria con un carico utile fino a 1675 kg. Il merito va soprattutto al telaio imbullonato, robusto, flessibile e leggero. La snella cabina di guida (160cm di larghezza) e le dimensioni compatte lo rendono agile e maneggevole anche nei vicoli piu stretti. Compatto all\'esterno ma con la piu alta capacita di carico della categoria, PUMA 35 porta la tua attivita esattamente dove vuoi. Ora e piu efficiente, piu maneggevole e anche la manutenzione e piu facile da gestire. Sono disponibili tre motorizzazioni: 130 CV, 150 CV e 175 CV. Inoltre ti offre un carico utile elevato (fino a 1675Kg), ridotti costi di gestione, tre passi disponibili e il telaio piu resistente del mondo, che supporta gli allestimenti piu diversi. La combinazione della massima capacita di carico e di dimensioni compatte con il miglior carico utile della categoria e con costi di gestione ridotti: il PUMA 35 e una soluzione per le aziende di tutte le tipologie e dimensioni.'
                        figure.appendChild(figcaption);
                    })
                }else if (macchina === macchineIndustriali[1]){
                    para1.addEventListener('click', function(){
                        img.setAttribute('src','./galleryImages/puma60.webp')
                        sezione.appendChild(figure);
                        figure.appendChild(img);
                        figcaption.textContent = 'Per chi lavora, il carico utile è importante, e il PUMA 60 ti sorprenderà. Questo “peso leggero” si colloca ai vertici della categoria con un carico utile fino a 4000 kg e un carico rimorchiabile fino a 3.500 kg. Il merito va soprattutto al telaio imbullonato, robusto, flessibile e leggero. La snella cabina di guida (160cm di larghezza) e le dimensioni compatte lo rendono agile e maneggevole anche nei vicoli più stretti. Compatto all \’esterno ma con la più alta capacità di carico della categoria, PUMA 65 porta la tua attività esattamente dove vuoi. Ora è più efficiente, più maneggevole e anche la manutenzione è più facile da gestire. Sono disponibili tre motorizzazioni: 130 CV, 150 CV e 175 CV. Inoltre ti offre un carico utile elevato (fino a 4000Kg), ridotti costi di gestione, tre passi disponibili e il telaio più resistente del mondo, che supporta gli allestimenti più diversi. La combinazione della massima capacità di carico e di dimensioni compatte con il miglior carico utile della categoria e con costi di gestione ridotti: il PUMA 65 è una soluzione per le aziende di tutte le tipologie e dimensioni.'
                        figure.appendChild(figcaption);
                    })
                }
                
            }
        lb2.setAttribute('class','animate__animated animate__fadeInLeft');
        lb2.setAttribute('class','animazioneTitolo');
        lb2.textContent = 'Macchine operatrici';
        titolo.appendChild(lb2);
            for (const macchina of macchineOperatrici){
                const para2 = document.createElement('p');
                para2.setAttribute('class','animate__animated animate__fadeInLeft');
                para2.textContent = macchina;
                titolo.appendChild(para2);
            }
        lb3.setAttribute('class','animate__animated animate__fadeInLeft');
        lb3.setAttribute('class','animazioneTitolo');
        lb3.textContent = 'Rimorchio RML 35';
        titolo.appendChild(lb3)
        stop = false;
    }else{
      const headers = document.querySelectorAll('#titoloGalleria h2');
      for(const header of headers){
          header.remove();
      }
      const paras = document.querySelectorAll('#titoloGalleria p');
      for(const para of paras){
          para.remove();
      }
      figure.remove();
      stop = true;
    }
    console.log('Lista finita');
};
