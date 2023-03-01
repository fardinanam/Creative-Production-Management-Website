from django.urls import path
from . import views

urlpatterns = [
  path('', views.CSOLoginView.as_view(), name='login'),
  path('prev-estimations/<str:username>/', views.prev_estimations, name='prev-estimations'),
  path('create-estimation/<str:username>/', views.create_estimation, name='create-estimation'),
  path('edit-estimation/<int:estimation_id>', views.edit_estimation, name='edit-estimation'),
]