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
          <div className="flex flex-col gap-y-3">
            {/* CONTENT */}
            <h3 className="font-bold">
              Firstly, we set up the initial configuration and import all
              necessary packages for this project.
            </h3>
            <CodeSnippet code={codeOne} />
            <h3 className="font-bold">
              Next step, involves importing raw data and performing initial
              preprocessing steps to prepare it.
            </h3>
            <CodeSnippet code={codeTwo} />
            <h3 className="font-bold">
              Next step, Subsequently, we create a dataset ready to be used in
              the model training process.
            </h3>
            <CodeSnippet code={codeTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent3;
