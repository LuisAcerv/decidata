import csv
import json
from pathlib import Path
from flask import Response


def ParseCSV():
    script_location = Path(__file__).absolute().parent

    file_location = script_location / 'detections.csv'

    csvfile = open(file_location, 'r')

    jsonfile = open('./output.json', 'w')

    fieldnames = ("id", "date", "channel", "brand", "commercial")
    reader = csv.DictReader(csvfile, fieldnames)

    detections = []

    for row in reader:
        data = json.dump(row, jsonfile)
        detections.append(row)

    return Response(json.dumps(detections),  mimetype='application/json')
