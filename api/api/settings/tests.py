# Test settings
from .base import *

"""
Test settings
"""
import environ
from pathlib import Path

env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)

environ.Env.read_env(os.path.join(BASE_DIR, '.env.test'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = env('DEBUG')

CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOW_CREDENTIALS = True

ALLOWED_HOSTS = env("ALLOWED_HOSTS").split(' ')
CORS_ORIGIN_WHITELIST = env('CORS_ORIGIN_WHITELIST').split(' ')

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    # read os.environ['DATABASE_URL'] and raises exception
    # The db() method is an alias for db_url().
    'default': env.db(),

    # read os.environ['SQLITE_URL']
    'extra': env.db_url(
        'SQLITE_URL',
        default='sqlite:////db.sqlite3'
    )
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

PASSWORD_HASHERS = ["django.contrib.auth.hashers.MD5PasswordHasher"]


class DisableMigrations:
    def __contains__(self, item):
        return True

    def __getitem__(self, item):
        return None


MIGRATION_MODULES = DisableMigrations()
