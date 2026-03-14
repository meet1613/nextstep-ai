














from flask import Flask, render_template, request, jsonify
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# OpenRouter client
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def generate_suggestion(goal, time):
    prompt = f"""
    You are a smart productivity coach.
    User goal: {goal}
    Available time: {time} minutes.
    Suggest ONE clear next action.
    """

    response = client.chat.completions.create(
        model="openai/gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/suggest", methods=["POST"])
def suggest():
    data = request.json
    goal = data["goal"]
    time = data["time"]

    result = generate_suggestion(goal, time)

    return jsonify({"result": result})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)
