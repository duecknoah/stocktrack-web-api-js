import fetch from "node-fetch";

const homeDepot = {
    depottest: () => console.log('a'),
    getProduct: (sku) => {
        return fetch(`https://stocktrack.ca/hd/search.php?n=1&p=1&t=sku&q=${sku}`)
        .then(res => res.json())
        .then(json => {
            return json;
        })
    },
}

export default homeDepot;