# Generated by Django 5.0.6 on 2024-07-16 01:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_studentapplication'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentapplication',
            name='high_school_gpa',
        ),
    ]
