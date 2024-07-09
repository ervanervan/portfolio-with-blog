// codeSnippets.js
export const codeOne = `
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import pandas as pd
import json
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, GRU, Bidirectional
`;

export const codeTwo = `
url = 'https://raw.githubusercontent.com/ervanervan/dataset-skripsi/main/laporan_iklim_anambas_ff_avg_1.csv'
data = pd.read_csv(url)

data['Tanggal'] = pd.to_datetime(data['Tanggal'], format='%d-%m-%Y')
data.set_index('Tanggal', inplace=True)

scaler = MinMaxScaler(feature_range=(0, 1))
data_scaled = scaler.fit_transform(data)
`;

export const codeThree = `
def create_dataset(dataset, timeseries=1):
    X, Y = []
    for i in range(len(dataset)-timeseries):
        end_ix = i + timeseries
        a = dataset[i:end_ix, 0]
        b = dataset[end_ix, 0]
        X.append(a)
        Y.append(b)
    return np.array(X), np.array(Y)

timeseries = 5
X, Y = create_dataset(data_scaled, timeseries)
X = np.reshape(X, (X.shape[0], timeseries, 1))
`;

export const codeFour = `
train_size = int(len(X) * 0.7)
test_size = len(X) - train_size
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]
`;

export const codeFive = `
def createModel():
    model = Sequential()
    model.add(Bidirectional(GRU(64, activation='tanh', return_sequences=True), input_shape=(timeseries, 1)))
    model.add(Bidirectional(GRU(32, activation='tanh')))
    model.add(Dense(1, activation='sigmoid'))
    model.summary()
    model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])
    return model

model = createModel()

def trainingModel(model):
    history = model.fit(X_train, Y_train, epochs=250, batch_size=16, validation_split=0.2)
    return history

history = trainingModel(model)
`;

export const codeSix = `
plt.figure(figsize=(10, 6))
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(loc='upper right')
plt.grid(True)
plt.savefig("Loss_Plot_"+model_name+".jpeg", format='jpeg', dpi=1000)
plt.show()
`;

export const codeSeven = `
train_predict = model.predict(X_train)
test_predict = model.predict(X_test)

train_predict = scaler.inverse_transform(train_predict)
test_predict = scaler.inverse_transform(test_predict)
Y_train = np.reshape(Y_train, (Y_train.shape[0], 1))
Y_test = np.reshape(Y_test, (Y_test.shape[0], 1))
actual_train = scaler.inverse_transform(Y_train)
actual_test = scaler.inverse_transform(Y_test)

def calculate_metrics(actual, predicted):
    mse = np.mean((actual - predicted) ** 2)
    rmse = np.sqrt(mse)
    mape = np.mean(np.abs((actual - predicted) / actual)) * 100
    accuracy = 100 - mape
    return rmse, mape, accuracy

rmse_train, mape_train, akurasi_train = calculate_metrics(actual_train, train_predict)
print('\nTraining Data:')
print(f'Train RMSE: {rmse_train:.4f}')
print(f'Train MAPE: {mape_train:.2f}%')
print(f'Train Accuracy: {akurasi_train:.2f}%')

rmse_test, mape_test, akurasi_test = calculate_metrics(actual_test, test_predict)
print('\nTesting Data:')
print(f'Test RMSE: {rmse_test:.4f}')
print(f'Test MAPE: {mape_test:.2f}%')
print(f'Test Accuracy: {akurasi_test:.2f}%')
`;

export const codeEight = `
plt.figure(figsize=(10, 6))
plt.plot(data.index[:train_size], actual_train.flatten(), label='Data Aktual - Training')
plt.plot(data.index[:train_size], train_predict.flatten(), label='Prediksi - Training')
plt.plot(data.index[train_size:train_size+len(actual_test)], actual_test.flatten(), label='Data Aktual - Testing')
plt.plot(data.index[train_size:train_size+len(test_predict)], test_predict.flatten(), label='Prediksi - Testing')
plt.xlabel('Tanggal')
plt.ylabel('Kecepatan Angin Rata-Rata (m/s)')
plt.title('Prediksi vs Data Aktual Kecepatan Angin Rata-Rata Anambas')
plt.legend()
plt.savefig("Actual_and_Prediction_"+model_name+".jpeg", format='jpeg', dpi=1000)
plt.show()
`;

export const codeNine = `
def predict_wind_speed_90days(model, scaler, input_data):
    input_data_reshaped = np.array(input_data).reshape(timeseries, 1)
    input_scaled = scaler.transform(input_data_reshaped)
    input_reshaped = np.reshape(input_scaled, (1, timeseries, 1))
    prediction_scaled = model.predict(input_reshaped)
    prediction = scaler.inverse_transform(prediction_scaled)
    return prediction[0, 0]

timeseries_input = scaler.inverse_transform(Y_test[-(timeseries):])
timeseries_speeds = [timeseries_input[i][0] for i in range(len(timeseries_input))]

forecasted = []
for i in range(90):
    input_x = np.array(timeseries_speeds).reshape(-1, 1)
    prediction = predict_wind_speed_90days(model, scaler, input_x)
    forecasted.append(prediction)
    timeseries_speeds.pop(0)
    timeseries_speeds.append(prediction)

plt.figure(figsize=(10, 6))
plt.plot(data.index[train_size:train_size+len(test_predict)], test_predict.flatten(), label='Data Predicition - Testing')
forecasted_dates = pd.date_range(start=data.index[train_size+len(test_predict)], periods=len(forecasted))
plt.plot(forecasted_dates, forecasted, label='Prediksi Kecepatan Angin')
plt.xlabel('Tanggal')
plt.ylabel('Kecepatan Angin Rata-Rata (m/s)')
plt.title('Prediksi Kecepatan Angin Rata-Rata Anambas Selama 90 Hari')
plt.legend()
plt.grid(True)
plt.savefig("forecasting_"+model_name+'.jpeg', format='jpeg', dpi=1000)
plt.show()
`;
