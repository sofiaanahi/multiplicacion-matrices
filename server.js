const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/multiply', (req, res) => {
    const { matrix1, matrix2 } = req.body;

    {
        const rows1 = matrix1.length;
        const cols1 = matrix1[0].length;
        const rows2 = matrix2.length;
        const cols2 = matrix2[0].length;
    
        if (cols1 !== rows2) {
            throw new Error('El número de columnas de la Matriz 1 debe ser igual al número de filas de la Matriz 2.');
        }
    
        const result = [];
        for (let i = 0; i < rows1; i++) {
            result[i] = [];
            for (let j = 0; j < cols2; j++) {
                let sum = 0;
                for (let k = 0; k < cols1; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum;
            }
        }
        
        const resultMatrix = multiplyMatrices(matrix1, matrix2);
        res.json(resultMatrix);
    
        return result;
        
   
    }
    
});

function multiplyMatrices(matrix1, matrix2) {
  
    
    {
        const rows1 = matrix1.length;
        const cols1 = matrix1[0].length;
        const rows2 = matrix2.length;
        const cols2 = matrix2[0].length;
    
        if (cols1 !== rows2) {
            throw new Error('El número de columnas de la Matriz 1 debe ser igual al número de filas de la Matriz 2.');
        }
    
        const result = [];
        for (let i = 0; i < rows1; i++) {
            result[i] = [];
            for (let j = 0; j < cols2; j++) {
                let sum = 0;
                for (let k = 0; k < cols1; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum;
            }
        }
        
        const resultMatrix = multiplyMatrices(matrix1, matrix2);
        res.json(resultMatrix);
    
        return result;
        
   
    }
}

app.listen(port, () => {
    console.log(`El servidor funciona en http://localhost:${port}`);
});
