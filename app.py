import json
from flask import Flask, render_template
from tweet_listener import get_tweets
from sentiment_analyzer import get_tweet_sentiments

app = Flask(__name__)
app.config.update(
    DEBUG=True,
    SECRET_KEY='EVERTWEET'
)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
