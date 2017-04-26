import json

from flask import Flask, render_template

app = Flask(__name__)
app.config.update(
    DEBUG=True,
)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/CitiBike', methods=['GET', 'POST'])
def citibike():



    return render_template('index.html')

if __name__ == '__main__':
    app.run()
