import express, { Request, Response } from 'express';
import { Item } from './models/items';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

let items: Item[] = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 }
];

// Get all items
app.get('/items', (_req: Request, res: Response) => {
    res.json(items);
});

// Get a single item by ID
app.get('/items/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Add a new item
app.post('/items', (req: Request, res: Response) => {
    const newItem: Item = req.body;
    newItem.id = items.length + 1;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Update an item by ID
app.put('/items/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex >= 0) {
        items[itemIndex] = req.body;
        items[itemIndex].id = id;
        res.json(items[itemIndex]);
    } else {
        res.status(404).send('Item not found');
    }
});

// Delete an item by ID
app.delete('/items/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    items = items.filter(item => item.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
