# Generated by Django 3.0.5 on 2020-06-18 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0059_auto_20200618_1141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order_with_trxid',
            name='admin_rcv_btc_wallet',
            field=models.CharField(default='na', max_length=100),
        ),
        migrations.AlterField(
            model_name='order_with_trxid',
            name='admin_send_btc_wallet',
            field=models.CharField(default='na', max_length=100),
        ),
    ]
