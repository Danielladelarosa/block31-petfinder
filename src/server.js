
const express = require('express');
const app = express();

// pet data 
const petsData = [
    { name: 'Buddy', owner: 'Alice', species: 'Dog' },
    { name: 'Mittens', owner: 'Bob', species: 'Cat' },
    { name: 'Charlie', owner: 'Alice', species: 'Dog' },
    { name: 'Max', owner: 'Eve', species: 'Dog' }
];

// GET all pets
app.get('/api/v1/pets', (req, res) => {
    res.json(petsData);
});

// GET pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const petName = req.params.name;
    const pet = petsData.find(pet => pet.name === petName);
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).json({ error: 'Pet not found' });
    }
});

// GET pets by owner name
