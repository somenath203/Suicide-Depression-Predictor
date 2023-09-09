from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import nltk
from nltk.corpus import stopwords
import string
from nltk.stem.porter import PorterStemmer
import pickle


app = FastAPI()


origins = ["*"]


nltk.download('punkt')


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


vectorizer = pickle.load(open('myvectorizer.pkl', 'rb'))

model = pickle.load(open('mymodel.pkl', 'rb'))


class inputModel(BaseModel):
    inputText: str


nltk.download('stopwords')

ps = PorterStemmer()


def preprocess_text(text):
    text = text.lower()

    text = nltk.word_tokenize(text)

    y = []

    for i in text:
        if i.isalnum():
            y.append(i)

    text = y[:]

    y.clear()

    for i in text:
        if i not in stopwords.words('english') and i not in string.punctuation:
            y.append(i)

    text = y[:]

    y.clear()

    for i in text:
        y.append(ps.stem(i))

    return " ".join(y)


@app.get('/')
def welcome():
    return {
        'success': True,
        'message': 'server of "suicidal thoughts and depression predictor" is up and running successfully '
    }


@app.post('/predict')
async def predict(inputFromFrontend: inputModel):

    proccessed_text = preprocess_text(inputFromFrontend.inputText)

    proccessed_text_vectorized = vectorizer.transform(
        [proccessed_text]).toarray()

    prediction = model.predict(proccessed_text_vectorized)

    pred_result_msg = ''

    if prediction[0] == 1:
        pred_result_msg = 'suicidal thought'
    else:
        pred_result_msg = 'not suicidal thought'

    return {
        'success': True,
        'message': pred_result_msg,
        'pred_value': float(prediction[0])
    }
