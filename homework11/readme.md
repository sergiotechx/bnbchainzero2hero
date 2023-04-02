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

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/40c2a2a327180e499330a4cb4a8fa5eaf8ea7b9fc0ec371f.png)
![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework11/1.png)

[https://github.com/foundry-rs/foundry/releases/tag/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22](https://github.com/foundry-rs/foundry/releases/tag/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22)

Download the windows archive

[https://github.com/foundry-rs/foundry/releases/download/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22/foundry_nightly_win32_amd64.zip](https://github.com/foundry-rs/foundry/releases/download/nightly-da2392e58bb8a7fefeba46b40c4df1afad8ccd22/foundry_nightly_win32_amd64.zip)

Unpack in some directory

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/68610ca4f866ba60f783454fde7f1868e6d1da29148124e2.png)

Add the path into the environment

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/00cd55c052acf05404bf46323343fbeed6a418b5aa069fde.png)

Go to a selected path and open the terminal

run “forge init _project-name_”

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/22d07578bcfaf6179079b4fe197ee01a52668a2380d94478.png)

cd myfisrtone

open visualstudio code

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/08eab32df9277449f219695e103129f9530cb546d4c8310b.png)

Run forge build

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/40dbe11306d5e8140e9e5c62b5054bf14d5fb8bcbe3ba41d.png)

For testing

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/9b814d19475dbdd0cf3aff32e63c2c347efeecf0a6840d56.png)

Import for testing:   _import "forge-std/Test.sol";_

import your contract _import "../src/Counter.sol";_

_Instead contrsuctor you must to create the setUp( ) function_

_each test function must have the prefix “test”_

_To run the test_

_Run “forge test”_

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/0a851c033d64cefaebf73c5fbf2462fae657bfd181a07099.png)
