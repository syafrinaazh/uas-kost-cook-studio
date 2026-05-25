const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

// Supaya server bisa membaca data format JSON dan aman dari CORS
app.use(cors());
app.use(express.json());

// Lokasi file data resep kita
const FILE_PATH = path.join(__dirname, 'recipes.json');

// Jalur 1: Tes apakah servernya hidup
app.get('/', (req, res) => {
    res.send("Halo! Server Kost Cook Studio sudah aktif dan aman. 🍳");
});

// Jalur 2: Mengambil semua data resep dari file JSON
app.get('/api/recipes', (req, res) => {
    try {
        const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
        const recipes = JSON.parse(fileData);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Gagal membaca data resep", error: error.message });
    }
});

// Jalur 3: Menambahkan resep baru (POST)
app.post('/api/recipes', (req, res) => {
    try {
        // 1. Baca data yang sudah ada di file JSON saat ini
        const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
        const recipes = JSON.parse(fileData);

        // 2. Ambil data resep baru yang dikirim oleh Postman/Frontend
        const newRecipe = {
            id: Date.now(), // Bikin ID unik otomatis pakai waktu saat ini
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            tools: req.body.tools,
            estimated_cost: req.body.estimated_cost,
            cooking_time: req.body.cooking_time
        };

        // 3. Masukkan resep baru ke dalam list resep lama
        recipes.push(newRecipe);

        // 4. Simpan kembali list yang sudah diperbarui ke file recipes.json
        fs.writeFileSync(FILE_PATH, JSON.stringify(recipes, null, 2), 'utf-8');

        // 5. Beri respon ke client kalau data berhasil disimpan
        res.status(201).json({
            message: "Resep anak kost berhasil ditambah! 👨‍🍳",
            data: newRecipe
        });

    } catch (error) {
        res.status(500).json({ message: "Gagal menyimpan resep", error: error.message });
    }
});

// Jalur 4: Menghapus resep berdasarkan ID (DELETE)
app.delete('/api/recipes/:id', (req, res) => {
    try {
        const recipeId = parseInt(req.params.id); // Mengambil ID dari URL masukan

        // 1. Baca data resep saat ini
        const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
        let recipes = JSON.parse(fileData);

        // 2. Cek apakah resep dengan ID tersebut memang ada
        const isRecipeExist = recipes.some(recipe => recipe.id === recipeId);
        if (!isRecipeExist) {
            return res.status(404).json({ message: "Resep tidak ditemukan! Mungkin sudah dihapus." });
        }

        // 3. Filter data: Buang resep yang ID-nya cocok, sisakan yang lain
        recipes = recipes.filter(recipe => recipe.id !== recipeId);

        // 4. Simpan kembali data yang baru tanpa resep yang dihapus tadi
        fs.writeFileSync(FILE_PATH, JSON.stringify(recipes, null, 2), 'utf-8');

        res.status(200).json({ message: "Resep berhasil dihapus dari dapur! 🗑️" });

    } catch (error) {
        res.status(500).json({ message: "Gagal menghapus resep", error: error.message });
    }
});

// Jalur 5: Mengubah/Mengedit resep berdasarkan ID (PUT)
app.put('/api/recipes/:id', (req, res) => {
    try {
        const recipeId = parseInt(req.params.id);
        const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
        let recipes = JSON.parse(fileData);

        // Cari tahu posisi index resep yang mau diubah
        const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);

        if (recipeIndex === -1) {
            return res.status(404).json({ message: "Resep tidak ditemukan!" });
        }

        // Perbarui data resep tersebut dengan data baru dari Postman
        recipes[recipeIndex] = {
            ...recipes[recipeIndex], // Tetap pertahankan ID lama yang tidak boleh berubah
            title: req.body.title || recipes[recipeIndex].title,
            description: req.body.description || recipes[recipeIndex].description,
            ingredients: req.body.ingredients || recipes[recipeIndex].ingredients,
            tools: req.body.tools || recipes[recipeIndex].tools,
            estimated_cost: req.body.estimated_cost || recipes[recipeIndex].estimated_cost,
            cooking_time: req.body.cooking_time || recipes[recipeIndex].cooking_time
        };

        // Simpan perubahan ke file JSON
        fs.writeFileSync(FILE_PATH, JSON.stringify(recipes, null, 2), 'utf-8');
        
        res.status(200).json({ 
            message: "Resep berhasil diperbarui! 📝", 
            data: recipes[recipeIndex] 
        });

    } catch (error) {
        res.status(500).json({ message: "Gagal memperbarui resep", error: error.message });
    }
});

// Menjalankan server di port 5000
app.listen(PORT, () => {
    console.log(`Aplikasi jalan di http://localhost:${PORT}`);
});