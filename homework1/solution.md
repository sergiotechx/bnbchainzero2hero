**Homework 1**  
**Decentralized Monopoly**  

**Cheating:**

The game can be set in public through smartcontracts, the rules are public. The blockchain guaranties the transparency and player movements.

**Ensuring agreement about the state of the system:**

This is the beauty of blockchain, with an EVM or alternative virtual machine we have a set of tools to ensure the right state of the system**.**

**Communication problems (timeouts):**

We know that is not symmetric communication, the system can assign a reasonable time per each player, if the player do not make  a movement in a reasonable time, the system can skip it and continue with the next player movement.  
We expect user communication issues from time to time, but not a blockchain downtime because it is a decentralized system with a zero downtime

**How to decide who should take the next turn:**

At the beginning of the tournament, we can use VRF ( chainlink random number) to guarantee transparency and assign your game turn.

When the game is already started the smartcontract can have the users turns list and the actual user , its is just made a loop. 

**How to allow the correct people to join the game:**

We can create an NFT as an access key or  have a list or allowed address.
