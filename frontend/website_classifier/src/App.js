import React, { useState, useEffect } from 'react';
import PredictionForm from './components/PredictionForm';
import PredictionList from './components/PredictionList';
import axios from 'axios';

function App() {
    const [predictions, setPredictions] = useState([]); // Untuk menyimpan data history prediksi
    const [latestPrediction, setLatestPrediction] = useState(null);

    // Fungsi untuk mengambil data history prediksi dari GET API
    const fetchHistory = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/predictions'); // Pastikan URL endpoint API benar
            if (response.data && Array.isArray(response.data)) {
                setPredictions(response.data); // Mengatur data history ke dalam state predictions
            } else {
                console.error("Unexpected data format:", response.data);
            }
        } catch (error) {
            console.error("Error fetching history data:", error);
        }
    };

    // Panggil fungsi fetchHistory saat komponen pertama kali dimuat
    useEffect(() => {
        fetchHistory();
    }, []);

    // Fungsi untuk mengirim review pelanggan ke POST API dan mendapatkan prediksi
    const handleSubmit = async (inputText) => {
        try {
            const formData = new FormData();
            formData.append("Data", inputText);

            const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data) {
                const newPrediction = response.data;
                console.log("Prediction received:", newPrediction);

                // Tambahkan prediksi baru ke history dan set prediksi terbaru
                setPredictions((prevPredictions) => [...prevPredictions, newPrediction]);
                setLatestPrediction(newPrediction);
            } else {
                console.error("No prediction data returned from API.");
            }
        } catch (error) {
            console.error("Prediction request error:", error);
        }
    };

    return (
        <div style={appContainerStyle}>
            <h1 style={headerStyle}>Customer Review Classification Prediction</h1>
            
            {/* Kotak Form Input dan Hasil Prediksi */}
            <div style={formContainerStyle}>
                <PredictionForm 
                    onSubmit={handleSubmit} 
                    latestPrediction={latestPrediction} 
                />
            </div>

            {/* Kotak Perhitungan Label Sentimen dan Emosi + History Prediksi */}
            <div style={historyContainerStyle}>
                {/* Tabel History Prediksi */}
                <div style={predictionListContainerStyle}>
                    <PredictionList predictions={predictions} />
                </div> 
            </div>
        </div>
    );
}

const appContainerStyle = {
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    padding: '20px',
    minHeight: '100vh',
};

const headerStyle = {
    fontSize: '2rem',
    color: '#34495e',
    marginBottom: '20px',
};

const formContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
};

const historyContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
};

const predictionListContainerStyle = {
    width: '100%',
    maxWidth: '1200px',
    flex: 2,
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px'
};

export default App;
