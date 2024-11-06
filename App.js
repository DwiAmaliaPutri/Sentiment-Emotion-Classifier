import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import PredictionList from './components/PredictionList';

function App() {
    const [predictions, setPredictions] = useState([]);
    const [latestPrediction, setLatestPrediction] = useState(null);

    const handleSubmit = (inputText) => {
        // Membuat hasil prediksi acak untuk Sentimen dan Emosi
        const sentiments = ['Positive', 'Negative'];
        const emotions = ['Happy', 'Sadness', 'Love','Anger','Fear'];
        const newPrediction = {
            'Customer Review': inputText,
            'Sentimen': sentiments[Math.floor(Math.random() * sentiments.length)],
            'Emotion': emotions[Math.floor(Math.random() * emotions.length)],
        };

        // Menambahkan prediksi ke daftar dan mengatur prediksi terbaru
        setPredictions((prevPredictions) => [...prevPredictions, newPrediction]);
        setLatestPrediction(newPrediction);
    };

    // Fungsi untuk menghitung jumlah Sentimen dan Emosi dengan filtering
    const countLabels = (predictions) => {
        const sentimentCount = { Positive: 0, Negative: 0 };
        const emotionCount = { Happy: 0, Love: 0, Sadness: 0, Fear: 0, Anger: 0 };

        predictions.forEach((prediction) => {
            sentimentCount[prediction.Sentimen]++;
            emotionCount[prediction.Emotion]++;
        });

        return { sentimentCount, emotionCount };
    };

    const { sentimentCount, emotionCount } = countLabels(predictions);

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
                <div style={labelCountContainerStyle}>
                    <div style={labelCountStyle}>
                        <h3>Sentimen Count:</h3>
                        <p>
                            👍🏼Positive: {sentimentCount.Positive} | 👎🏼Negative: {sentimentCount.Negative}
                        </p>

                        <h3>Emotion Count:</h3>
                        <p>
                            😁Happy: {emotionCount.Happy} | 🥰Love: {emotionCount.Love} | 😢Sadness: {emotionCount.Sadness} | 😨Fear: {emotionCount.Fear} | 😡Anger: {emotionCount.Anger}
                        </p>
                    </div>
                </div>

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
    minHeight: '100vh', // Pastikan ini '100vh' untuk memastikan halaman terisi penuh
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
    display: 'flex', // Menggunakan flexbox untuk layout horizontal
    justifyContent: 'space-between', // Menyusun konten di kedua sisi
};

const labelCountContainerStyle = {
    flex: 1, // Memberikan ruang untuk label count
    marginRight: '10px', // Menambahkan jarak antara count dan tabel
};

const labelCountStyle = {
    textAlign: 'left',
    marginBottom: '5px',
    padding: '12px',
    backgroundColor: '#ecf0f1',
    borderRadius: '10px'
};

const predictionListContainerStyle = {
    width: '80%',
    maxWidth: '700px',
    flex: 2, // Memberikan lebih banyak ruang untuk tabel prediksi
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px'
};

export default App;
