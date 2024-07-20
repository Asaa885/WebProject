from django.urls import path
from app import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('student/', views.studentlist, name='studentlist'),
    path('student/<int:pk>/', views.studentdetails, name='studentdetail'),
    path('combination/', views.combinationlist, name='combinationlist'),
    path('combination/<int:pk>/', views.combinationdetail, name='combination_detail'),
    path('faculty/', views.facultylist, name='faculty_list'),
    path('faculty/<int:pk>/', views.facultydetail, name='facultydetail'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('application/', views.studentsApplication, name='studentApplication'),
    # path('csrf-cookie/', views.csrf_cookie, name='csrf-cookie'),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('apply_comb/', views.applyComb),
    
]
