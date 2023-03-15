**ABI CODE**

It is a public json representation of our public “methods” of the contract and enable  the possibility to use the contract by another app( mobile, web, desktop…)

In general is a get set contract around the _number_ state variable ( private) and how  access it with public methods. 

[  
    {  
**// Function parameter:** type = uint256 ,name_  =num

"inputs": \[  
            {  
                "internalType": "uint256",  
                "name": "num",  
                "type": "uint256"  
            }  
        \],  
        _**//Function :**name =store, return = no return, expend or not gas : expend gas beacuse change a state variable,  type= function_

        "name": "store",  
        "outputs": \[\],  
        "stateMutability": "nonpayable",  
        "type": "function"  
    },  
    {  
**// Function parameter:** no input parameter  _        

"inputs": \[\],  
**//Function :**name =retrieve_

"name": "retrieve",

**//Function return:** data type uint256, _expend or not gas_  = only read a state variable ( for free!), type= function  
        "outputs": \[  
            {  
                "internalType": "uint256",  
                "name": "",  
                "type": "uint256"  
            }  
        \],  
      

"stateMutability": "view",  
        "type": "function"  
    }  
\]

