#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by f0x11 on 2015/4/21

from flask import Flask, render_template

app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def hello_world():
    return render_template('hello.html')

if __name__ == '__main__':
    app.run(port=8888)