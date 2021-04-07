# Online_Offline_Budget_Trackers

Link to Deployed Application: https://peaceful-lowlands-93110.herokuapp.com/

Technologies Used: Mongoose, IndexedDB, Javascript, Webmanifest, Service-Worker.js.

Project Description: The Online/Offline Budget Tracker is an application that records the name and amount of a transaction, then either adds or subtracts funds for that transaction. This application keeps track of your funds, just like a user balancing a checkbook, except utilizing a Mongoose JS database schema model to add each transaction to a database. To give the user a more solid understanding of what is in their account, a graph is displayed below the list of transactions. The graph list the total amount on the y-axis, then the time on the x-axis. If the application goes offline, then the user can count on the technologies of IndexedDB and Caching to have their records available. IndexedDB keeps the list of pending transactions in the browsers IndexedDB application interface. Caching is made available using the service-worker.js, where the database is retained.

An example of the budget tracker in usage
![](assets/budgettracker.png)