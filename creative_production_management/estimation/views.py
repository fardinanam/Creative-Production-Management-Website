from django.shortcuts import render
from django.views.generic import CreateView
from django.shortcuts import redirect
from django.urls import reverse
from estimation.models import *


class CSOLoginView(CreateView):
  def get(self, request):
    return render(request, 'estimation/login.html')

  def post(self, request):
    username = request.POST['username']
    password = request.POST['password']

    

    cso = None

    try:
      cso = CSO.objects.get(username=username, password=password)  
    except:
      return render(request, 'estimation/login.html')

    # url = reverse()
    return redirect('create-estimation/' + str(cso.username) + '/')

def create_estimation(request, username:str):

  if request.method == 'POST':
    estimated_time = request.POST['estimated-time']
    estimated_cost = request.POST['estimated-cost']
    description = request.POST['description']

    cso = CSO.objects.get(username=username)
    designer = Designer.objects.get(username="anup")
    tag = Tag.objects.get(name="video editor")
    vendor = Vendor.objects.get(name="Ananto")
    designer_set = set()
    designer_set.add(designer)
    tag_set = set()
    tag_set.add(tag)
    estimation = Estimation(description=description, cso=cso, estimated_duration_months=estimated_time, estimated_cost=estimated_cost, designers=designer_set, tags=tag_set, vendors=vendor)
    estimation.save()
  return render(request, 'estimation/estimation.html', {'username': username})


