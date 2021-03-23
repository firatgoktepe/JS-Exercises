class Storage {
    static getKms(){
        let kms;
        if(localStorage.getItem('kms')===null){
           kms=[];
        }else{
            kms = JSON.parse(localStorage.getItem('kms'));
        }
        return kms;
    }
    static displayKms(){
        const kms = Storage.getKms();
        //console.log(kms.slice(-7));
        kms.slice(-7).forEach(km => {
            addNewEntry(km);
        });
        
        const totalValue = kms.slice(-7).reduce((a, b) => a + b, 0).toFixed(1);
        document.getElementById('total').innerText = totalValue;
        document.getElementById('progressTotal').innerText = totalValue;

        const average = ( kms.slice(-7).reduce((a, b) => a + b, 0)  / kms.slice(-7).length).toFixed(1);
        document.getElementById('average').innerText = average;

        const high = Math.max(...kms.slice(-7));
        document.getElementById('high').innerText = high;

        
        const completedPercent = totalValue / (goal / 100);
        const progressCircle = document.querySelector('#progressCircle');
      
        if (completedPercent > 100) {completedPercent === 100};
        progressCircle.style.background = `conic-gradient(
          #70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%`


        
    }
    static addKm(km){
        const kms = Storage.getKms();
        kms.push(km);
        localStorage.setItem('kms', JSON.stringify(kms));
    }
}



document.addEventListener('DOMContentLoaded', Storage.displayKms);




const goal = 25
let entries = []
const entriesWrapper = document.querySelector('#entries')
document.querySelector('#target').innerText = goal

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild)

  const listItem = document.createElement('li')
  const listValue = document.createTextNode(newEntry.toFixed(1))
  listItem.appendChild(listValue)
  entriesWrapper.appendChild(listItem)
  

}

function reducer(total, currentValue) {
  return total + currentValue
}

function calcTotal() {
  const totalValue = entries.reduce(reducer).toFixed(1)
  document.getElementById('total').innerText = totalValue
  document.getElementById('progressTotal').innerText = totalValue
}

function calcAverage() {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1)
  document.getElementById('average').innerText = average
}

function weeklyHigh() {
  const high = Math.max(...entries)
  document.getElementById('high').innerText = high
}

function calcGoal() {
  const totalValue = entries.reduce(reducer).toFixed(1)
  const completedPercent = totalValue / (goal / 100)
  const progressCircle = document.querySelector('#progressCircle')

  if (completedPercent > 100) {completedPercent === 100}
  progressCircle.style.background = `conic-gradient(
    #70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%`
}


function handleSubmit(event) {
  event.preventDefault()
  const entry = Number(document.querySelector('#entry').value)
  if (!entry) return
  entries.push(entry)
  document.querySelector('form').reset()
  addNewEntry(entry)
  console.log(entry)
  Storage.addKm(entry) //Save to LS
  calcTotal()
  calcAverage()
  weeklyHigh()
  calcGoal()
  location.reload()
}

const form = document
  .querySelector('form')
  .addEventListener('submit', handleSubmit);


  //Clear button event
 document.querySelector('#clear_btn').addEventListener('submit', ()=>{
     localStorage.clear();
 });

