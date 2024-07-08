import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import BlogPost from "../components/BlogPost";

const codeOne = `
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

const codeTwo = `
url = 'https://raw.githubusercontent.com/ervanervan/dataset-skripsi/main/laporan_iklim_anambas_ff_avg_1.csv'
data = pd.read_csv(url)

data['Tanggal'] = pd.to_datetime(data['Tanggal'], format='%d-%m-%Y')
data.set_index('Tanggal', inplace=True)

scaler = MinMaxScaler(feature_range=(0, 1))
data_scaled = scaler.fit_transform(data)
`;

const codeThree = `
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

const codeFour = `
train_size = int(len(X) * 0.7)
test_size = len(X) - train_size
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]
`;

const codeFive = `
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

const codeSix = `
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

const codeSeven = `
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

const codeEight = `
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

const codeNine = `
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

const BlogContent3 = () => {
  return (
    <div className="container mx-auto">
      <BlogPost
        title="Code model bidirectional gated recurrent unit (BiGRU) for wind speed prediction"
        description="Hello everyone! Are you curious about using the Bidirectional Gated Recurrent Unit (BiGRU) model to forecast wind speeds? In this blog, we delve into the step-by-step implementation of BiGRU using TensorFlow/Keras. Let's explore how this technology can assist you in making more accurate weather forecasts."
        date={"July 08, 2024"}
        time={"03:50 PM"}
      />

      <div className="max-w-xl mx-auto bg-[#1C1C1C] rounded-b-lg text-neutral-400">
        <div className="px-6 pb-6">
          <div className="border border-neutral-700 mb-10" />
          <div className="flex flex-col gap-y-12">
            {/* CONTENT */}
            <div>
              <h3 className="text-xl font-bold mb-1">01</h3>
              <p className="mb-3">
                Firstly, we set up the initial configuration and import all
                necessary packages for this project.
              </p>
              <CodeSnippet code={codeOne} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">02</h3>
              <p className="mb-3">
                Next step, involves importing raw data and performing initial
                preprocessing steps to prepare it.
              </p>
              <CodeSnippet code={codeTwo} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">03</h3>
              <p className="mb-3">
                Subsequently, we create a dataset ready to be used in the model
                training process.
              </p>
              <CodeSnippet code={codeThree} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">04</h3>
              <p className="mb-3">
                Data will be randomly split into training and testing datasets
                for model evaluation.
              </p>
              <CodeSnippet code={codeFour} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">05</h3>
              <p className="mb-3">
                We'll construct the BiGRU model architecture and train it using
                the prepared training data.
              </p>
              <CodeSnippet code={codeFive} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">06</h3>
              <p className="mb-3">
                After training completes, the results will be visualized to
                evaluate the model's performance.
              </p>
              <CodeSnippet code={codeSix} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">07</h3>
              <p className="mb-3">
                We'll evaluate the model to measure its accuracy in predicting
                wind speeds.
              </p>
              <CodeSnippet code={codeSeven} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">08</h3>
              <p className="mb-3">
                The prediction results will be saved in the appropriate format
                and plotted for better visualization.
              </p>
              <CodeSnippet code={codeEight} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">09</h3>
              <p className="mb-3">
                Finally, we'll utilize the trained model to forecast wind speeds
                for the next 90 days.
              </p>
              <CodeSnippet code={codeNine} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent3;
