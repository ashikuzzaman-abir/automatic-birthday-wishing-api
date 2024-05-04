# Automatic Birthday Wishing Through Email 🎂

### Requirements

In this assignment, you will create a nodeJS project with an Express Framework.
Your system will have to be able to send an email to customers on their birthdays automatically, containing a simple birthday message.  Just to mention, you can simply add 5 customers with their birthdays through an API (e.g. /customer/register), and no need for a view or template.

This assessment is designed to assess your skills in building a RESTful API, integrating task scheduling/background tasks, etc.

### **Technology Stack Used:**

* Node.js (v20)
* TypeScript
* Express
* MongoDB
* Mongoose ORM
* node-cron
* Joi
* Jest
* Supertest

# Project Setup Guidline

1. Go to the project's directory
2. Run the following command to install packages in terminal `npm i`
3. Create `.env` file into the root of the directory
4. Include the environment variable into the `.env` file that has been provided through email
5. Include SMTP mail server's credentials into the `.env` file
6. To **start the development** server run this command in terminal `npm run dev`
7. To start the development server with SMTP settings run this command in terminal `npm run dev:smtp`
8. To **start the production** server run this command in terminal `npm run start`
9. To **start the production** server with SMTP settings run this command in terminal `npm run start:smtp`
10. Server will start on [localhost:5000](http://localhost:5000)

### Seeding 5 customers with today as date of birth

* Run `npm run seed:customers` script in the command line before starting the server it will automatically seed 5 customers with today's date of birth.
* Then start the server.

## Start Test Procedures

1. Go to the project's directory
2. Start the server in one terminal window by running this command `npm run dev` or `npm run start`
3. Open another terminal window in the project's directory and run this command `npm run test`
