# storematerial
Purpose
This document is provided to install the required servers and deploy the application in windows operating systems.
Pre-requisites
-	Operating System: Windows
-	System Requirements XAMP, NodeJs

Technologies 	used
-	NodeJs
-	Express
-	Graphql 
-	Sequelize
-	Angularjs
-	Php
Installation Procedure
Step 1
download NodeJs from https://nodejs.org/en/
Click on "node-v9.2.0-x64.msi" and install
Open command prompt by typing "cmd" and type " npm -version" and press enter button
if you see node version number then nodejs is installed properly
Step2
download xampserver  from the following link https://www.apachefriends.org/download.html
and click on " xampserverx.x.x_x64.exe " and install.

Step 3
Download the files for git(Credintials will be send in the mail)
1) materialmanage.rar
2) db.sql
3) graphql.rar

un rar all above files

Step 4
Start xamp and mysql server 

Step 5

Install the database using db.sql file
Step 6

Place "materialmanage" folder in " C:\xampp\htdocs\ "

Step 7
Open browser and enter "http://localhost/materialmanage" and press enter this should start the application

Step 8
Open graphql which is downloaded from git
Go to the config folder and  open "config.json" provide the database connections. 
Change the host, provide the database name, username and password required for the database connection.
Save the file.

Step 9
Assuming your gaphql folder is located at D:/graphql
Go to the command prompt.
enter cd D: and press enter
cd graphql and press enter
finally enter npm start and press enter
Now server should is ready
Open the browser and enter http:// localhost:8088/graphql.
if this works well we are good to go
Step 10
Open the browser and enter "http://localhost/ materialmanage"

If everthing is installed and configured the application should open up and we can start entering store, material and add material quantities to store.
