from flask import Flask, request, render_template
import pickle  # Assuming you're using pickle to load your model

app = Flask(__name__)

# Load your trained model (update the model_path to your actual model file)
model_path = 'gnb_model.pkl'  # Update this path
with open(model_path, 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/')
def home():
    return render_template('index.html')  # This is your HTML file

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the form
    yellow_fingers = int(request.form['YELLOW_FINGERS'])
    anxiety = int(request.form['ANXIETY'])
    peer_pressure = int(request.form['PEER_PRESSURE'])
    chronic_disease = int(request.form['CHRONIC_DISEASE'])
    fatigue = int(request.form['FATIGUE'])
    allergy = int(request.form['ALLERGY'])
    wheezing = int(request.form['WHEEZING'])
    alcohol_consuming = int(request.form['ALCOHOL_CONSUMING'])
    coughing = int(request.form['COUGHING'])
    swallowing_difficulty = int(request.form['SWALLOWING_DIFFICULTY'])
    chest_pain = int(request.form['CHEST_PAIN'])
    anxyelfin = int(request.form['ANXYELFIN'])

    # Prepare the input for the model
    input_features = [[yellow_fingers, anxiety, peer_pressure, chronic_disease, fatigue,
                       allergy, wheezing, alcohol_consuming, coughing, swallowing_difficulty,
                       chest_pain, anxyelfin]]

    # Make prediction
    prediction = model.predict(input_features)

    # Convert prediction to "Yes" or "No"
    result = "Yes" if prediction[0] == 1 else "No"

    # Render the result template with the prediction
    return render_template('result.html', prediction=result)

if __name__ == '__main__':
    app.run(debug=True)
