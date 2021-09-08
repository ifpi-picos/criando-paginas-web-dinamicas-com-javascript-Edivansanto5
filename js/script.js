let camposelectUF = document.querySelector("#uf")
let campoSelectCidade = document.querySelector("#cidades")
let campoSelectButton = document.querySelector("#salvando")

let campoSelecaoCidades = new Map()
// regioes nordeste
campoSelecaoCidades.set('sele',['Selecione'])
campoSelecaoCidades.set(0,['Maceió','Arapiraca','Rio Largo','Palmeira do Indio'])
campoSelecaoCidades.set(1,['Salvador','Feira de Santana','Vitória da conquista','Camaçari','Juazeiro'])
campoSelecaoCidades.set(2,['Fortaleza','Juazeiro do Norte','Caucaia','Marancanaú','Sobral'])
campoSelecaoCidades.set(3,['São Luiz','Imperatriz','São josé do Ribamar','Timon','Caxias'])
campoSelecaoCidades.set(4,['João Pessoa','Campina Grande','Santa Rita','Patos','Bayeux'])
campoSelecaoCidades.set(5,['Picos','Teresina','Floriano','Valênça','Água-Branca','Passagem Franca'])
campoSelecaoCidades.set(6,['Recife','Jaboatão dos Guararapes','Olinda','Cauruaru','Petrolina','paulista'])
campoSelecaoCidades.set(7,['Natal','Mossoró','Parnamirim','São Gonçalo do Amarante','Macaiba'])
campoSelecaoCidades.set(8,['Aracajú','Nossa Senhora do Socorro','Lagarto','Atatibaia','São Cristovão'])

// regioes norte



camposelectUF.addEventListener('change',()=>{
    let cidades = campoSelecaoCidades.get(parseInt(camposelectUF.value))
    console.log(cidades)
})


