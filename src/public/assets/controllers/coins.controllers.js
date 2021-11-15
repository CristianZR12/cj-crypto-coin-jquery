import Coins from '../view/coins.html';

const getCoins = async() => {
    return await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
        method: 'GET'
    });
};

const fillTable = ({ dataTable, allCoins, tableContent }) => {
    dataTable = ``;

    allCoins.forEach((c, index) => {
        dataTable += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>
                    <img 
                        src="${c.image}"
                        alt="${c.name}"
                        class="img-fluid me-4 iconCrypto"
                    />
                    <span>${c.name}</span>
                    <span class="ms-3 text-muted">${c.symbol}</span>
                </td>
                <td>
                    ${c.current_price.toLocaleString()}
                </td>
                <td class=${c.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
                    ${c.price_change_percentage_24h}
                </td>
                <td>${c.total_volume.toLocaleString()}</td>
            </tr>
        `;
    });

    tableContent.html(dataTable);
};

export default () => {

    const divElement = document.createElement('div');
    divElement.className = 'container';

    $(divElement).html(Coins);

    var allCoins = [];

    getCoins()
        .then(res => res.json())
        .then(data => {
            allCoins = data;

            const tableContent = $('#coinsTableContent');
            var dataTable = ``;

            fillTable({ dataTable, allCoins, tableContent });

            const searchInput = $('#searchCoinsCP');

            searchInput.on('keyup', (e) => {
                let value = e.target.value;

                if (value == '') {
                    fillTable({ dataTable, allCoins, tableContent });
                } else {
                    let searchData = allCoins.filter((c) => c.name.toLowerCase().includes(value.toLowerCase()));

                    fillTable({ dataTable, allCoins: searchData, tableContent });
                }
            });

        })
        .catch(err => console.log(err));

    return divElement;
};