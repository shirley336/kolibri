# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-05 23:35
from __future__ import unicode_literals

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kolibriauth', '0002_auto_20160318_0557'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='roles', to='kolibriauth.FacilityUser'),
        ),
    ]