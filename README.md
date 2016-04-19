[![Stories in Ready](https://badge.waffle.io/FarcicalPopsicle/faunadex.png?label=ready&title=Ready)](https://waffle.io/FarcicalPopsicle/faunadex)

# Faunadex

Track and share your animal encounters, see what animals your friends are encountering, learn about wonderful wildlife, and talk with other animal enthusiasts! It utilizes the ARKive API to retrieve information and pictures about animals!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What things you need to install the software and how to install them

```
Give examples
```

### Installing
1.  Install MySQL.  See the following: http://www.willfulbard.com/2016/04/installing-mysql-on-a-mac/

2.  Run the database create script by running `mysql -u root -p faunadex < schema.sql`, then enter your root password and you're golden.

3.  Run `npm install` and `npm install -g grunt nodemon mocha chai phantomjs casperjs mocha-casperjs casper-chai`

4.  Run the testdata creation script by running `node createTestData.js`.  At the present there is a bug in this script which prevents it from stopping.  Simply wait about 10 seconds and ^c to stop the script.

5.  Run `npm start` to start the server on http://localhost:1337.  This starts both a nodemon instance that watches the server directory and a grunt watch instance that watches the client directory and has webpack recompile on change.

6.  Run `npm test` to run the tests.  Tests in the test_client directory are run by mocha-casperjs, and tests in the test_server directory are run my plain mocha.


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* React
* Redux
* Express
* Node
* MySQL

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

<!--## Versioning-->

<!--We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

## Authors

* **Alexander Turinske** - *Initial work* - [alexanderturinske](https://github.com/alexanderturinske)
* **Will Wheeler** - *Initial work* - [willfulbard](https://github.com/willfulbard)
* **Travis Carson** - *Initial work* - [travisCarson](https://github.com/travisCarson)

See also the list of [contributors](https://github.com/FarcicalPopsicle/faunadex/contributors) who participated in this project.

<!--## License-->

<!--This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details-->

## Acknowledgments

* Hack Reactor
* The amazing animals all around us
* ARKive.org
