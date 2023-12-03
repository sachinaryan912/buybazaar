from gtts import gTTS
import os

def text_to_speech(text, language='en', filename='output.mp3'):
    tts = gTTS(text=text, lang=language, slow=False)
    tts.save(filename)
    os.system(f"open {filename}")

text_to_speech("Welcome to buybazaar")
