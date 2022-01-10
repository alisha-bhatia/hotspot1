"""
This file holds the tests for db.py.
"""

from unittest import TestCase, skip
# import random

import db.db as db

FAKE_USER = "Fake user"


class DBTestCase(TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_write_collection(self):
        """
        Can we write the user db?
        """
        fake_data = {FAKE_USER: {}}
        return True

    def test_get_users(self):
        """
        Can we fetch user db?
        """
        users = db.get_users()
        self.assertIsInstance(users, dict)