function formatMoney(money) {
    if (typeof money !== 'number') {
        return '-';
    }
    return  money + ' Eur';
}
// return money ? money + 'Eur' : '-';
/* funkcija formatMoney ir jos RETURN paaiskinimas; jeigu pinigu yra 'klaustukas' grazinu pinigus+ 'Eur', jeigu nera pinig : grazinu '-' */

function sortData (list){
    let sortedList = [];

// sortedList = list.sort((a, b) => a.month-b.month);  sita yra super funkcija issortinimui, bet panaudojom kita, kuri yra apacioj su double for loop
    
    for (let i =1; i<= 12; i++){
        for (let k = 0; k< list.length; k++ ) {
            if(list[k].month === i) {
                sortedList.push(list[k]);
                break;
            }
            
        }
    }

    return sortedList;
}
//     let minMonthNumber =Infinity;

//     for (let i=0; i<list.length; i++){
//         if (list[i].month < minMonthNumber){
//         minMonthNumber = list[i].month;
//         }
//     } 
//     console.log(minMonthNumber);
//     sortedList.push(list[minMonthNumber]); 



function renderTable(monthNames, cashFlow) {
    let HTML =''; 
        balance = 0;
        income = 0;
        expense = 0;

    cashFlow = sortData(cashFlow);

    for(let i=0; i<cashFlow.length; i++) {
        const item = cashFlow[i];
        income += item.income ? item.income : 0;
        expense += item.expense? item.expense : 0;
        balance = income - expense;

        // balance -= item.expense? item.expense : 0; sita darom tam, kad kai sutinka ne skaiciu o -, tada kad ji skaitytu kaip 0, nes kitaip tampa undefined ir toliau neskaiciuoja.


        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${monthNames[item.month-1]}</div>
                    <div class="cell">${formatMoney(item.income)} </div>
                    <div class="cell">${formatMoney(item.expense)} </div>
                    <div class="cell">${formatMoney(balance)}</div>
                </div>`
    }
    const tableContentDOM = document.querySelector('.table-content');
    const footerIncomeDOM = document.querySelector('.table-footer > .cell:nth-of-type(3)');
    const footerExpenseDOM = document.querySelector('.table-footer > .cell:nth-of-type(4)');
    const footerBalanceDOM = document.querySelector('.table-footer > .cell:nth-of-type(5)');
    tableContentDOM.innerHTML = HTML;

    footerIncomeDOM.innerText = formatMoney(income); 
    footerExpenseDOM.innerText = formatMoney(expense); 
    footerBalanceDOM.innerText = formatMoney(balance); 



}

renderTable(months, account)

/*monthNames yra tas pats kaip months, o cashFlow tas pats kaip account, cia tik patys persivadinom savo patogumui, skaitomumui, bet jie yra tas pats ir reiskia ta pati*/