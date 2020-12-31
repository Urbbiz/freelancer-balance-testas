function formatMoney(money) {
    if (typeof money !== 'number') {
        return '-';
    }
    return  money + ' Eur';
}
// return money ? money + 'Eur' : '-';
/* funkcija formatMoney ir jos RETURN paaiskinimas; jeigu pinigu yra 'klaustukas' grazinu pinigus+ 'Eur', jeigu nera pinig : grazinu '-' */

function renderTable(monthNames, cashFlow) {
    let HTML ='';
    for(let i=0; i<cashFlow.length; i++) {
        const item = cashFlow[i];

        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${monthNames[item.month-1]}</div>
                    <div class="cell">${formatMoney(item.income)} </div>
                    <div class="cell">${formatMoney(item.expense)} </div>
                    <div class="cell">${formatMoney(0)}</div>
                </div>`
    }
    const tableContentDOM = document.querySelector('.table-content');
    tableContentDOM.innerHTML = HTML;



}

renderTable(months, account)

/*monthNames yra tas pats kaip months, o cashFlow tas pats kaip account, cia tik patys persivadinom savo patogumui, skaitomumui, bet jie yra tas pats ir reiskia ta pati*/