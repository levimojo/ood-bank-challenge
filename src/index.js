"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
const bankAccount_1 = require("./bankAccount");
const transaction_1 = require("./transaction");
const statementFormatter_1 = require("./statementFormatter");
let account = new bankAccount_1.BankAccount('11111');
let customer = new customer_1.Customer('Alex', account);
let deposit1 = new transaction_1.Transaction(100);
let deposit2 = new transaction_1.Transaction(250);
let withdrawal1 = new transaction_1.Transaction(-150);
let withdrawal2 = new transaction_1.Transaction(-200);
let formatter = new statementFormatter_1.StatementFormatter(customer);
customer.addTransaction(deposit1);
customer.addTransaction(withdrawal2);
customer.addTransaction(deposit2);
customer.addTransaction(deposit2);
customer.addTransaction(withdrawal1);
customer.addTransaction(withdrawal2);
customer.addTransaction(deposit2);
customer.addTransaction(withdrawal2);
formatter.generateStatement();