[![Stories in Ready](https://badge.waffle.io/FarcicalPopsicle/faunadex.png?label=ready&title=Ready)](https://waffle.io/FarcicalPopsicle/faunadex)

# Faunadex

Track and share your animal encounters, see what animals your friends are encountering, learn about wonderful wildlife, and talk with other animal enthusiasts! It utilizes the ARKive API to retrieve information and pictures about animals!

## Installing
1.  Install MySQL.  See the following: http://www.willfulbard.com/2016/04/installing-mysql-on-a-mac/

2.  Run the database create script by running `mysql -u root -p faunadex < schema.sql`, then enter your root password and you're golden.

3.  Run `npm install` and `npm install -g grunt nodemon mocha chai phantomjs casperjs mocha-casperjs casper-chai`

4.  Run the testdata creation script by running `node createTestData.js`.  At the present there is a bug in this script which prevents it from stopping.  Simply wait about 10 seconds and ^c to stop the script.

5.  Run `npm start` to start the server on http://localhost:1337.  This starts both a nodemon instance that watches the server directory and a grunt watch instance that watches the client directory and has webpack recompile on change.

6.  Run `npm test` to run the tests.  Tests in the test_client directory are run by mocha-casperjs, and tests in the test_server directory are run my plain mocha.


## Built With

* React
* Redux
* Express
* Node
* MySQL


<!--## Versioning-->

<!--We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

## Authors

* **Travis Carson** - *Initial work* - [travisCarson](https://github.com/travisCarson)
* **Will Wheeler** - *Initial work* - [willfulbard](https://github.com/willfulbard)
* **Alexander Turinske** - *Initial work* - [alexanderturinske](https://github.com/alexanderturinske)


<!--## License-->

<!--This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details-->

## Acknowledgments

* Hack Reactor
* The amazing animals all around us
* ARKive.org

