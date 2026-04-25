#!/usr/bin/env python3
"""lists all databases in MongoDB"""

# imports
from pymongo import MongoClient


def list_databases():
    """lists all databases in MongoDB"""
    client = MongoClient('mongodb://localhost:27017/')

    databases = client.list_database_names()
    
    for db in databases:
        print(db)
