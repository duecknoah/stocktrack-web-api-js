import fetch from 'node-fetch';
import homedepot from './stores/hd/homedepot.js';


const stores = {
    "hd": homedepot   
};

const stocktrack = {
    getStoreNames: () => {
        return {
            "Home Depot": "hd"
        }
    },
    getStore: store => stores[store],
};

let a = stocktrack.getStore("hd").getProduct("1001221502");
a.then(res => console.log(res))

export default stocktrack;