# -*- coding: utf-8 
import random
import json
import pickle
import numpy as np
import nltk
import json
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import load_model
import tensorflow as tf

lemmatizer = WordNetLemmatizer()
intents = json.loads(open('intents.json').read())

words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))
model = load_model('chatbot_model.h5')

def clean_up_sentences(sentence):
    sentence_word = nltk.word_tokenize(sentence)
    sentence_word = [lemmatizer.lemmatize(word) for word in sentence_word]
    return sentence_word

def bag_of_words(sentence):
    sentence_word = clean_up_sentences(sentence)
    bag = [0] * len(words)
    for w in sentence_word:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    Error = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > Error]

    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({'intent': classes[r[0]], 'probability': str(r[1])})
    return return_list

def get_response(lista, jsons):
    tag = lista[0]['intent']
    intent_list = jsons['intents']
    for i in intent_list:
        if i['tag'] == tag:
            result = random.choice(i['response'])
            break
    return result

from aiohttp import web
import aiohttp_cors
import socketio

# Configuração do Socket.IO com CORS
sio = socketio.AsyncServer(cors_allowed_origins=['http://localhost:4200'])
app = web.Application()
sio.attach(app)

cors = aiohttp_cors.setup(app, defaults={
    "http://localhost:4200": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        allow_headers=["*"],
        allow_methods=["*"],
    )
})

# Adicione CORS apenas para rotas que não possuem um manipulador de opções
for route in app.router.routes():
    if route.resource.canonical == '/socket.io/':
        continue
    cors.add(route)

@sio.event
async def connect(sid, environ):
    print(f'Usuário conectado: {sid}')

@sio.event
async def disconnect(sid):
    print(f'Usuário desconectado: {sid}')

@sio.event
async def message(sid, data):
    ints = predict(data)
    response = get_response(ints, intents)
    await sio.emit('response', {'sid': sid, 'message': response}, room=sid)

if __name__ == '__main__':
    web.run_app(app, port=3000)