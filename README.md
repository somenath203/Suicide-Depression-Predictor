# Suicide-Depression-Predictor
![](https://github.com/somenath203/Suicide-Depression-Predictor/assets/83393190/f75b8246-4685-4276-8879-950ac2bf9bc8)

## Contents

- [Introduction](#Introduction)
- [Components of the Project](#Components-of-the-Project)
- [About the Frontend of the Project](#About-the-Frontend-of-the-Project)
- [About the backend of the Project](#About-the-Backend-of-the-Project)
- [About the machine learning Model](#About-the-Machine-Learning-Model)
- [Deployment](#Deployment)
- [Links](#Links)
- [Contributions](#Contributions)
- [Warning](#Warning)



## Introduction 

The Suicide-Depression-Predictor is a healthcare project that uses machine learning to predict the risk of suicide and depression in individuals. It can be used to identify those who are at risk of suicide or depression so that they can receive early intervention and treatment.
The Suicide-Depression-Predictor is a valuable tool for mental health professionals, as it can help them to better understand the risk factors for suicide and depression. It can also be used to raise awareness of suicide and depression, and to promote suicide prevention.

## Components of the Project

The project is divided into three parts: Frontend, Backend and the Machine Learning Model

## About the Frontend of the Project

The user-friendly frontend of this project is built with ReactJS and TailwindCSS. It allows users to make predictions about their risk of suicide or depression using voice-to-text technology. Here, the user have
to speak through there mic and then, when the user has finished speaking, all the words spoke by the user will be displayed in the textarea. The user can then submit the response to get the desired prediction and the result of the prediction will be shown in the form of a sweetalert modal.

## About the Backend of the Project

The backend of this project is created with the help of FastAPI. After the user clicks on Submit Button in the frontend, the response is send to the FastAPI via axios and then FastAPI forwards this response to the machine 
learning model for the prediction

## About the Machine Learning Model

The machine learning model of this project is created with the help of Support Vector Classifier. The accuracy on training data is around 95% while the accuracy on test data is around 90% and the model is trained 
on a dataset of 10,000 datapoints where 5000 datapoints belong to the category of 'suicical/depression thoughts' and the other 5000 datapoints belong to the category of 'non suicical/depression thoughts'.

## Deployment

The frontend of the project is deployed in Vercel whereas the backend of the project is deployed in Render with the help of Docker.

## Links

Live preview of the project: https://suicidal-thought-and-depression-predictor-frontend.vercel.app/

Link to the deployed API of the project: https://suicidal-thought-depression-predictor.onrender.com/

Link to the swagger documentation of the backend API of the project: https://suicidal-thought-depression-predictor.onrender.com/docs

Link to the jupyter notebook of the machine learning model: https://github.com/somenath203/Suicide-Depression-Predictor/blob/main/backend/suicide_depression_classification_kmeans.ipynb

Link to the dataset used to train the machine learning model: https://www.kaggle.com/datasets/nikhileswarkomati/suicide-watch

## Contributions

I have designed the entire frontend of this project whereas my teammate Vishal Lazrus created the entire backend FastAPI and the machine learning model.

## Warning

Although the model is able to classify between 'suicical/depression thoughts' and 'non suicical/depression thoughts', but, since, it is only trained on a small dataset of only 10,000 datapoints, therefore,
there is a chance that, in some cases, the model might make wrong predictions.

