const express = require('express');
const { v4: uuidv4 } = require('uuid')

const app = express();
app.use(express.json());

const customers = [];

const verifyIfExistsAccountCpf = (req, res, next) => {
    const { cpf } = req.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if(!customer){
        return res.status(400).json({ error: 'Customer not found' });
    }

    req.customer = customer;
    return next();
}

//app.use(verifyIfExistsAccountCpf); //after that, all routes will be verified

app.post('/account', (req, res) => {
    const { cpf, name } = req.body;
    
    const customerAlreadyExists = customers.some(customer => customer.cpf === cpf);
    
    if(customerAlreadyExists){
        res.status(400).json({ error: 'Customer already exists' });
    }
   
    customers.push({
        id: uuidv4(),
        cpf,
        name,
        statement: []
    })

    return res.status(201).send();
})

app.get('/statement', verifyIfExistsAccountCpf, (req, res) => {
    const { customer } = req;

    return res.json(customer.statement);

})

app.listen(3333);