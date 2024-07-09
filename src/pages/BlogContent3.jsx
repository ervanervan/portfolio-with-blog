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
} from "./../../codeSnippets";

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
              <div>
                <h4 className="text-md font-bold my-5">Explanation:</h4>
                <p>
                  <code className="bg-zinc-700">
                    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2':
                  </code>
                  Reduces the amount of logging displayed by TensorFlow, showing
                  only error messages. This is done to maintain console output
                  cleanliness and focus on important messages only.
                </p>
                <p>
                  <code className="bg-zinc-700">import pandas as pd:</code>
                  Imports pandas for data manipulation.
                </p>

                <p>
                  <code className="bg-zinc-700">import json:</code>
                  Imports the json module for saving model results in JSON
                  format.
                </p>

                <p>
                  <code className="bg-zinc-700">import numpy as np:</code>
                  Imports numpy for mathematical operations with arrays.{" "}
                </p>

                <p>
                  <code className="bg-zinc-700">
                    from sklearn.preprocessing import MinMaxScaler:{" "}
                  </code>
                  Imports MinMaxScaler from Scikit-learn for scaling data
                  features.
                </p>

                <p>
                  <code className="bg-zinc-700">
                    import matplotlib.pyplot as plt:
                  </code>
                  Imports matplotlib for data visualization.{" "}
                </p>

                <p>
                  <code className="bg-zinc-700">import tensorflow as tf</code>{" "}
                  and{" "}
                  <code className="bg-zinc-700">
                    from tensorflow.keras.models import Sequential
                  </code>
                  Imports TensorFlow and Keras for building and training neural
                  network models.
                </p>
              </div>

              <div>
                <h4 className="text-md font-bold my-5">Reasons for usage:</h4>
                <p>
                  <code className="bg-zinc-700">import tensorflow as tf</code>{" "}
                  and{" "}
                  <code className="bg-zinc-700">
                    from tensorflow.keras.models import Sequential
                  </code>
                  : Keras, with TensorFlow as its backend, is a highly popular
                  choice for deep learning due to its user-friendly API and
                  strong integration with TensorFlow. This simplifies the
                  building, training, and evaluation of neural network models.
                </p>

                <p>
                  <code className="bg-zinc-700">import pandas as pd</code>: This
                  library is the gold standard for tabular data manipulation in
                  Python. Pandas offers powerful and flexible tools for reading,
                  transforming, and analyzing data.
                </p>

                <p>
                  <code className="bg-zinc-700">import numpy as np</code>: A
                  fundamental library for array operations in Python, widely
                  used in machine learning and data science.
                </p>

                <p>
                  <code className="bg-zinc-700">
                    from sklearn.preprocessing import MinMaxScaler
                  </code>
                  : Provides numerous tools for data preprocessing and model
                  evaluation. MinMaxScaler is highly effective for scaling data
                  to fit within a specific range, aiding in model stability and
                  convergence speed for neural networks.
                </p>

                <p>
                  <code className="bg-zinc-700">
                    import matplotlib.pyplot as plt
                  </code>
                  : Extremely powerful for data visualization. It is crucial for
                  understanding and presenting data and model results clearly.
                </p>
              </div>
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
