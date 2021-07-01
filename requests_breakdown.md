Options:
- Home Depot
- Canadian Tire
- Walmart


# Home Depot

7043	RICHMOND	2700 Sweden Way, Richmond, BC, V6V 2W8	3.9 km	398	outOfStock	0	now

Stores info:
https://stocktrack.ca/hd/storeDetailsData.js

Home depot AC request, atm each one for each location is done separatly:
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


# Canadian Tire

Stores info:
stocktrack.ca/ct/stores.js

Canadian Tire AC request:
search for product info based off SKU 
https://stocktrack.ca/ct/search.php?q=0430756&n=1&p=1&s=relevance&t=prod

Stores list:

Multiple stores in one request:
https://stocktrack.ca/ct/availability.php?store=0606,0610,0605,0389,0603,0604,0910,0601,0678,0443,0608,0489&sku=0430756&src=prod

# Walmart

Store info:
https://stocktrack.ca/wm/stores.js?3
