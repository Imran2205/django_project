# Generated by Django 3.0.5 on 2020-05-17 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0039_auto_20200517_0206'),
    ]

    operations = [
        migrations.AddField(
            model_name='review_msg',
            name='length',
            field=models.IntegerField(default=0),
        ),
    ]