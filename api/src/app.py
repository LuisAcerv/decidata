from flask import Flask
from flask_restful import Resource, Api
from flask_restful.utils import cors
from parse_csv import ParseCSV

app = Flask(__name__)
api = Api(app)


class Channels(Resource):
    @cors.crossdomain(origin='*')
    def get(self):
        detections = ParseCSV()

        return detections


api.add_resource(Channels, '/detections')

if __name__ == '__main__':
    app.run("0.0.0.0", port=5000, debug=True)
