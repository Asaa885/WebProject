from django.db import models
from django.contrib.auth.models import User

# class AdmissionConfirmation(models.Model):
#     adminName = models.CharField(max_length=50)
#     adminDate = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name
class Combination(models.Model):
    combName = models.CharField(max_length=100)
    combCode = models.CharField(max_length=100)
    first_name = models.CharField( max_length=30, null=True)
    last_name = models.CharField( max_length=30, null=True)
    
    

    def __str__(self):
        return self.combName
    

class Student(models.Model):
    
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    date_reported = models.DateField(auto_now_add=True) 
    address = models.TextField()
    nida_id = models.CharField(max_length=20, unique=True)
    status = models.CharField(max_length=10, default='active')


    def __str__(self):
        return f"{self.first_name} {self.last_name}"



class Faculty(models.Model):
    Combination = models.ForeignKey(Combination, on_delete=models.CASCADE)
    fName =models.CharField(max_length=100)

    def __str__(self):
        return self.fName


