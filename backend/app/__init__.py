# app/__init__.py

from flask import Flask
from .api import api
from .config import Config
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    
    # Load configuration settings
    app.config.from_object(Config)


    # Initialize CORS with the correct configuration
    cors = CORS(
        app,
        resources={
            r"/api/*": {
                "origins": [
                    "http://localhost:8080",
                ]
            }
        },
    )

    
    # Register blueprints (API)
    app.register_blueprint(api, url_prefix="/api")
    
    return app

