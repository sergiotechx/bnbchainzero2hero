**Homework 11**  
**Foundry Introduction**  
1\. Install Foundry  
[See Instructions](https://github.com/foundry-rs/foundry#installation)  
First run the command below to get foundryup , the Foundry  
toolchain installer:  
curl  -L https://foundry.paradigm.xyz | bash  
 

If you do not want to use the redirect, feel free to manually download  
the foundryup installation script from [here](https://raw.githubusercontent.com/foundry-rs/foundry/master/foundryup/install).  
 

Then, run foundryup in a new terminal session or after reloading  
your PATH .

  
Other ways to use foundryup , and other documentation, can be  
found [here](https://github.com/foundry-rs/foundry/tree/master/foundryup).  
Create a project  
Run the tests supplied to familiarise yourself with Foundry

---

**The windows way** 😀

Go to [https://github.com/foundry-rs/foundry/releases](https://github.com/foundry-rs/foundry/releases)

Download the latest one 


![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/1.png)

[https://github.com/foundry-rs/foundry/releases/tag/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22](https://github.com/foundry-rs/foundry/releases/tag/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22)

Download the windows archive

[https://github.com/foundry-rs/foundry/releases/download/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22/foundry_nightly_win32_amd64.zip](https://github.com/foundry-rs/foundry/releases/download/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22/foundry_nightly_win32_amd64.zip)

Unpack in some directory

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/2.png)

Add the path into the environment

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/3.png)

Go to a selected path and open the terminal

run “forge init _project-name_”

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/4.png)

cd myfisrtone

open visualstudio code

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/5.png)

Run forge build

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/6.png)

For testing

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/7.png)


Import for testing:   _import "forge-std/Test.sol";_

import your contract _import "../src/Counter.sol";_

Instead contrsuctor you must to create the setUp( ) function_

each test function must have the prefix “test”_

To run the test_

Run “forge test”

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/8.PNG)
