# Generated by Django 3.0.1 on 2020-10-21 20:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('category', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.IntegerField()),
                ('accountID', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('orderTime', models.DateTimeField()),
                ('pickupTime', models.DateTimeField()),
                ('isFavorite', models.BooleanField()),
                ('rewards', models.IntegerField())
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('quantity', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('orderID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Order')),
            ],
        ),
    ]
