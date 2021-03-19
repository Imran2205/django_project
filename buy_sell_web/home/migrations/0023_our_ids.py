# Generated by Django 3.0.5 on 2020-05-02 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0022_auto_20200502_1201'),
    ]

    operations = [
        migrations.CreateModel(
            name='our_ids',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=100)),
                ('state', models.CharField(choices=[('active', 'active'), ('inactive', 'inactive')], default='active', max_length=100)),
            ],
        ),
    ]