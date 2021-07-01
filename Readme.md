# Stock Track Discord Bot
Get notified via Discord when a product is available in store, online.

Options:
- Home Depot
- Canadian Tire
- Walmart

Common Functions:
- get stores that sell a product SKU within a radius
- get stock of product at a given store
- get stock of product at multiple given stores

TODO:
- Create wrapper function for handling stock check requests to different endpoints.
    Fetch store data json file from stocktrack, see a local copy in store_data.json.
    This file may be updated at any point so its best we fetch theirs first
- Add discord integration

Possible uses:
- Check inventory based off SKU


Get notified when a particular SKU becomes available at a store type near you.
    - Each SKU is specific to a store?



React
Firebase integration for storing peoples requested alerts.


how to use:
- Specify your city to the bot, then specify the search radius
    - it will search through and find a store in that city
    - 


Some guy is keeping tabs on updates:
https://forums.redflagdeals.com/stocktrack-inventory-checker-tool-some-canadian-b-m-stores-2229322/


7043	RICHMOND	2700 Sweden Way, Richmond, BC, V6V 2W8	3.9 km	398	outOfStock	0	now
Home depot AC request:
https://stocktrack.ca/hd/stock.php?loc=7259&product=1001592204&src=sku

Response:
{
    "min_ago": 49,
    "aisleBay": {
        "productCode": "1001221502",
        "storeId": "7043",
        "aisleLocation": "",
        "bayLocation": ""
    },
    "optimizedPrice": {
        "displayPrice": {
            "value": 658
        },
        "regprice": {
            "value": 658
        }
    },
    "storeStock": {
        "stockLevel": 0,
        "stockLevelStatus": "outOfStock"
    }
}


Canadian Tire AC request:
search for product info based off SKU 
https://stocktrack.ca/ct/search.php?q=0430756&n=1&p=1&s=relevance&t=prod

Stores list:

Multiple stores in one request:
https://stocktrack.ca/ct/availability.php?store=0606,0610,0605,0389,0603,0604,0910,0601,0678,0443,0608,0489&sku=0430756&src=prod




----------


TODO:
