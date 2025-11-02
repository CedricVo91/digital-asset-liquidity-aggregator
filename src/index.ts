import express from 'express'; 
import cors from 'cors'; // allowing API calls from browsers


const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Liquidity Aggregation API is running'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
})

