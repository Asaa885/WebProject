from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']



class CombinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Combination
        fields = '__all__'
        
class StudentSerializer(serializers.ModelSerializer):
    combination = CombinationSerializer(read_only=True)
    
    class Meta:
        model = Student
        fields = ('first_name', 'last_name', 'combination','date_of_birth', 'gender', 'date_reported', 'address', 'nida_id',)
        


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'
