import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import BlogPost from "../components/BlogPost";
import {
  codeOne,
  codeTwo,
  codeThree,
  codeFour,
  codeFive,
  codeSix,
  codeSeven,
  codeEight,
  codeNine,
} from "./../../codeSnippets.js";

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
              <h3 className="text-xl font-bold mb-1">1</h3>
              <p className="mb-3">
                Firstly, we set up the initial configuration and import all
                necessary packages for this project.
              </p>
              <CodeSnippet code={codeOne} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <code className="language-javascript">
                    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
                  </code>
                  : Reduces the amount of logging displayed by TensorFlow,
                  showing only error messages. This is done to maintain console
                  output cleanliness and focus on important messages only.
                </p>
                <p>
                  <code className="language-javascript">
                    import pandas as pd
                  </code>
                  : Imports pandas for data manipulation.
                </p>

                <p>
                  <code className="language-javascript">import json</code>:
                  Imports the json module for saving model results in JSON
                  format.
                </p>

                <p>
                  <code className="language-javascript">
                    import numpy as np
                  </code>
                  : Imports numpy for mathematical operations with arrays.{" "}
                </p>

                <p>
                  <code className="language-javascript">
                    from sklearn.preprocessing import MinMaxScaler{" "}
                  </code>
                  : Imports MinMaxScaler from Scikit-learn for scaling data
                  features.
                </p>

                <p>
                  <code className="language-javascript">
                    import matplotlib.pyplot as plt
                  </code>
                  : Imports matplotlib for data visualization.{" "}
                </p>

                <p>
                  <code className="language-javascript">
                    import tensorflow as tf
                  </code>{" "}
                  and{" "}
                  <code className="language-javascript">
                    from tensorflow.keras.models import Sequential
                  </code>
                  : Imports TensorFlow and Keras for building and training
                  neural network models.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <code className="language-javascript">
                    import tensorflow as tf
                  </code>{" "}
                  and{" "}
                  <code className="language-javascript">
                    from tensorflow.keras.models import Sequential
                  </code>
                  : Keras, with TensorFlow as its backend, is a highly popular
                  choice for deep learning due to its user-friendly API and
                  strong integration with TensorFlow. This simplifies the
                  building, training, and evaluation of neural network models.
                </p>

                <p>
                  <code className="language-javascript">
                    import pandas as pd
                  </code>
                  : This library is the gold standard for tabular data
                  manipulation in Python. Pandas offers powerful and flexible
                  tools for reading, transforming, and analyzing data.
                </p>

                <p>
                  <code className="language-javascript">
                    import numpy as np
                  </code>
                  : A fundamental library for array operations in Python, widely
                  used in machine learning and data science.
                </p>

                <p>
                  <code className="language-javascript">
                    from sklearn.preprocessing import MinMaxScaler
                  </code>
                  : Provides numerous tools for data preprocessing and model
                  evaluation. MinMaxScaler is highly effective for scaling data
                  to fit within a specific range, aiding in model stability and
                  convergence speed for neural networks.
                </p>

                <p>
                  <code className="language-javascript">
                    import matplotlib.pyplot as plt
                  </code>
                  : Extremely powerful for data visualization. It is crucial for
                  understanding and presenting data and model results clearly.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">2</h3>
              <p className="mb-3">
                Next step, involves importing raw data and performing initial
                preprocessing steps to prepare it.
              </p>
              <CodeSnippet code={codeTwo} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <span className="font-medium">Importing data</span>: Fetching
                  data from the given URL using{" "}
                  <code className="language-javascript">pd.read_csv</code>.
                </p>
                <p>
                  <span className="font-medium">
                    Converting 'Tanggal' column
                  </span>
                  : Changing the 'Tanggal' column from string to datetime
                  objects for easier manipulation. The format '%d-%m-%Y'
                  indicates that the dates in the original data are written as
                  day-month-year.
                </p>
                <p>
                  <span className="font-medium">
                    Setting 'Tanggal' as index
                  </span>
                  : Setting the 'Tanggal' column as the index to facilitate
                  easier access and manipulation of time-based data.
                </p>
                <p>
                  <span className="font-medium">Scaling the data</span>: Using{" "}
                  <code className="language-javascript">MinMaxScaler</code> to
                  scale the data into the range of 0-1, which helps in making
                  neural network model training more stable and faster to
                  converge.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <span className="font-medium">MinMaxScaler</span>: Uniform
                  data scaling is crucial for neural networks. A 0-1 scale
                  reduces the risk of imbalanced weightings and accelerates
                  convergence during training. Other alternatives like{" "}
                  <code className="language-javascript">StandardScaler</code>{" "}
                  (which standardizes data to a distribution with mean=0 and
                  std=1) may not be as effective for data that is not normally
                  distributed.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">3</h3>
              <p className="mb-3">
                Subsequently, we create a dataset ready to be used in the model
                training process.
              </p>
              <CodeSnippet code={codeThree} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <span className="font-medium">
                    Function{" "}
                    <code className="language-javascript">create_dataset</code>
                  </span>{" "}
                  : Creates a dataset for training by sliding a time window
                  across the data. Each{" "}
                  <code className="language-javascript">X</code> contains a
                  sequence of time series data, and{" "}
                  <code className="language-javascript">Y</code> is the data
                  value at the next time step.
                </p>
                <p>
                  <span className="font-medium">Timeseries = 5</span> : Uses the
                  last 5 data points to predict the next data point.
                </p>
                <p>
                  <span className="font-medium">Reshape data</span>: Reshapes{" "}
                  <code className="language-javascript">X</code> to (number of
                  samples, time series length, number of features) to match the
                  model's input requirements.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <span className="font-medium">Sliding Window Technique</span>{" "}
                  : This technique is highly effective for capturing temporal
                  relationships in time series data. It is more flexible than
                  approaches using a specific lag, as each data point within the
                  time window can provide valuable information for prediction.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">4</h3>
              <p className="mb-3">
                Data will be randomly split into training and testing datasets
                for model evaluation.
              </p>
              <CodeSnippet code={codeFour} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <span className="font-medium">Splitting data</span> : Dividing
                  the dataset into 70% for training and 30% for testing.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <span className="font-medium">Split Ratio</span> : The 70-30
                  ratio is a common standard in machine learning. It provides
                  enough data to train the model while retaining a substantial
                  amount of data to test the model's generalization ability.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">5</h3>
              <p className="mb-3">
                We'll construct the BiGRU model architecture and train it using
                the prepared training data.
              </p>
              <CodeSnippet code={codeFive} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <h5 className="font-medium">Creating the model:</h5>
                <p>
                  <span className="font-medium">Bidirectional GRU layer</span> :
                  Using two bidirectional GRU layers to capture information from
                  the time series in both forward and backward directions.
                </p>
                <p>
                  <span className="font-medium">Dense layer</span> : An output
                  layer with one neuron and sigmoid activation to produce the
                  prediction value.
                </p>
                <p>
                  <span className="font-medium">Compiling the model</span> :
                  Using the Adam optimizer and mean squared error (MSE) loss
                  function. The metric used is mean absolute error (MAE).
                </p>

                <h5 className="font-medium">Training the model:</h5>
                <p>
                  Training the model with training data using 250 epochs and a
                  batch size of 16, and setting aside 20% of the training data
                  for validation.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <span className="font-medium">Bidirectional GRU</span> : GRU
                  is faster to train and more efficient than LSTM, while still
                  effectively capturing temporal relationships. Bidirectional
                  GRU helps the model capture information from both directions
                  (past and future), which is crucial in time series analysis.
                </p>
                <p>
                  <span className="font-medium">Adam Optimizer</span> : This
                  optimizer is popular due to its adaptive learning rate
                  adjustments, making it fast and efficient in convergence.
                </p>
                <p>
                  <span className="font-medium">MSE and MAE</span> : MSE is used
                  as the loss function because it penalizes larger errors more
                  heavily, while MAE is used as an additional metric to provide
                  a more balanced view of the model's performance.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">6</h3>
              <p className="mb-3">
                After training completes, the results will be visualized to
                evaluate the model's performance.
              </p>
              <CodeSnippet code={codeSix} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <span className="font-medium">Visualization</span> : Plotting
                  the loss graph during training and validation to see how well
                  the model is adapting to the data.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <span className="font-medium">Loss Visualization</span> :
                  Plotting training and validation loss provides insights into
                  how the model is learning and whether overfitting or
                  underfitting is occurring. This is crucial for evaluating and
                  improving the model's performance.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">07</h3>
              <p className="mb-3">
                We'll evaluate the model to measure its accuracy in predicting
                wind speeds.
              </p>
              <CodeSnippet code={codeSeven} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <span className="font-medium">Prediction</span> : Making
                  predictions for the training and testing data.
                </p>
                <p>
                  <span className="font-medium">Inverse Transform</span> :
                  Returning the predictions and actual values to the original
                  scale for evaluation.
                </p>
                <p>
                  <span className="font-medium">Calculating metrics</span> :
                  Using RMSE, MAPE, and accuracy to evaluate the model's
                  performance.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <h5 className="font-medium">Evaluation Metrics:</h5>
                <p>
                  <span className="font-medium">RMSE</span> : Measures the
                  average prediction error in the original data units. It is
                  highly sensitive to large errors.
                </p>
                <p>
                  <span className="font-medium">MAPE</span> : Measures the
                  average error in percentage terms, making it easy to
                  interpret.
                </p>
                <p>
                  <span className="font-medium">Accuracy</span> : Provides an
                  overview of how close the predictions are to the actual values
                  in percentage terms.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">08</h3>
              <p className="mb-3">
                The prediction results will be saved in the appropriate format
                and plotted for better visualization.
              </p>
              <CodeSnippet code={codeEight} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <span className="font-medium">Saving model performance</span>{" "}
                  : Saving the model's performance results in JSON format for
                  documentation and further analysis.
                </p>
                <p>
                  <span className="font-medium">Saving the model</span> : Saving
                  the trained model in Keras format.
                </p>
                <p>
                  <span className="font-medium">Visualizing results</span> :
                  Plotting actual and predicted data for training and testing to
                  evaluate the model's performance visually.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <span className="font-medium">
                    Model and Performance Storage
                  </span>{" "}
                  : Saving the model allows for reuse and deployment in the
                  future. Performance metrics in JSON make documentation and
                  analysis easier.
                </p>
                <p>
                  <span className="font-medium">Visualizing Results</span> :
                  Visualization is crucial to ensure the model is working well
                  and to present the results to stakeholders in an easily
                  understandable way.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">09</h3>
              <p className="mb-3">
                Finally, we'll utilize the trained model to forecast wind speeds
                for the next 90 days.
              </p>
              <CodeSnippet code={codeNine} />
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <span className="font-medium">
                    Function{" "}
                    <code className="language-javascript">
                      predict_wind_speed_90days
                    </code>{" "}
                  </span>
                  : Makes predictions using the model for the next 90 days.
                </p>
                <p>
                  <span className="font-medium">Loop for 90 days</span> :
                  Generates predictions for the next 90 days by updating the
                  input data with the latest predictions.
                </p>
                <p>
                  <span className="font-medium">Visualization</span> : Plots the
                  predicted wind speeds for the next 90 days.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <span className="font-medium">Continuous Prediction</span> :
                  Using previous predictions as input for the next prediction
                  allows for continuous forecasting. This is very useful in
                  real-world applications such as weather forecasting.
                </p>
                <p>
                  <span className="font-medium">Visualization</span> : Making
                  90-day predictions provides insights into future wind speed
                  trends, which is important for planning and decision-making.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-neutral-700 my-7" />
          <div className="flex flex-col gap-y-3">
            <p>
              Now you have learned the steps to implement a Bidirectional GRU
              model in TensorFlow/Keras for wind speed prediction. By
              understanding these concepts and utilizing tools such as
              visualization and metric evaluation, you can develop more accurate
              and meaningful predictions. Keep exploring and applying this
              knowledge to tackle forecasting challenges across various domains!
            </p>
            <p>Thank you for reading. See you in the next post!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent3;
