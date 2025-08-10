from flask import Flask, render_template, request, redirect, flash, url_for
from dotenv import load_dotenv
import os
import smtplib
from datetime import datetime


load_dotenv()

EMAIL_USER=os.getenv("EMAIL_USER")
EMAIL_PASSWORD=os.getenv("EMAIL_PASSWORD")
SECRET_KEY=os.getenv("SECRET_KEY")

app = Flask(__name__)
app.secret_key=SECRET_KEY

@app.route('/')
def home():
    return render_template("index.html" , year=datetime.now().year)

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/achievements')
def achievements():
    return render_template("achievements.html")

@app.route('/projects')
def projects():
    return render_template("projects.html")

@app.route('/experience')
def experience():
    return render_template("experience.html")

@app.route('/resume')
def resume():
    return redirect(url_for('static', filename='pdf/shipali_k.pdf'))

@app.route('/contact', methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']

        try:
            send_email(name, email, subject, message)
            flash("✅ Message sent successfully!", "success")
        except Exception as e:
            flash(f"❌ Error: {str(e)}", "danger")

        return redirect(url_for("contact"))

    return render_template("contact.html")

def send_email(name, email, subject, message):
    msg = f"Subject: {subject}\n\nFrom: {name} <{email}>\n\n{message}"

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        server.sendmail(EMAIL_USER, EMAIL_USER, msg)

if __name__ == '__main__':
    app.run(debug=True)
