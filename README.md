# Suicide-Depression-Predictor

## Content

- [Introduction](#Introduction)
- [Components of the Project](#Components-of-the-Project)
- [About the Frontend of the Project](#About-the-Frontend-of-the-Project)
- [About the backend of the Project](#About-the-backend-of-the-Project)
- [About the machine learning Model](#About-the-machine-learning-Model)
- [Links](#Links)
- [Deployment](#Deployment)
- [Contributions](#Contributions)
- [Warning](#Warning)



## Introduction 

The Suicide-Depression-Predictor is a project that predicts the risk of suicide and depression in individuals. The project can be used to identify individuals who are at risk of suicide or depression, so that they can receive early intervention and treatment.
The Suicide-Depression-Predictor is a valuable tool for mental health professionals, as it can help them to better understand the risk factors for suicide and depression. It can also be used to raise awareness of suicide and depression, and to promote suicide prevention.

## Components of the Project

The project is divided into three Parts: Frontend, Backend and the Machine Learning Model

## About the Frontend of the Project

The user-friendly frontend of this project is built with ReactJS and TailwindCSS. It allows users to make predictions about their risk of suicide or depression using voice-to-text technology. Here, the user have
to speak through there mic and then, when the user has finished speaking, all the words spoke by the user will be displayed in the textarea. The user can then submit the response to get the desired prediction.

## About the backend of the Project

The backend of this project is created with the help of FastAPI. After the user clicks on Submit Button in the frontend, the response is send to the FastAPI via axios and then FastAPI forwards this response to the machine 
learning model for the prediction

## About the machine learning Model

The machine learning model of this project is created with the help of Support Vector Classifier. The accuracy on training data is around 95% while the accuracy on test data is around 90% and the model is trained 
on a dataset of 10,000 datapoints where 5000 datapoints belong to the category of 'suicical/depression thoughts' and the other 5000 datapoints belong to the category of 'non suicical/depression thoughts'.

## Links

Live preview of this project: https://suicidal-thought-and-depression-predictor-frontend.vercel.app/

Link to the deployed API of the project: https://suicidal-thought-depression-predictor.onrender.com/

Link to the swagger documentation of the backend API of the project: https://suicidal-thought-depression-predictor.onrender.com/docs

Link to the jupyter notebook of the machine learning model: https://github.com/somenath203/Suicide-Depression-Predictor/blob/main/backend/suicide_depression_classification_kmeans.ipynb

## Deployment

The frontend of the project is deployed in Vercel whereas the backend of the project is deployed in Render with the help of Docker.

## Contributions

I have designed the entire frontend of this project whereas my teammate Vishal Lazrus created the entire backend FastAPI and the machine learning model.

## Warning

Although the model is able to classify between 'suicical/depression thoughts' and 'non suicical/depression thoughts', but, since, it is only trained on a small dataset of only 10,000 datapoints, therefore,
there is a chance that, in some cases, the model might make wrong predictions.
