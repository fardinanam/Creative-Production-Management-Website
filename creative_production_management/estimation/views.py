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
      print("error logging in")
      return render(request, 'estimation/login.html')

    # url = reverse()
    return redirect('prev-estimations/' + str(cso.username) + '/')

def prev_estimations(request, username:str):
  if request.method == 'GET':
    estimations = Estimation.objects.all().values()
    print(estimations)
    return render(request, 'estimation/prev_estimations.html', {'username': username, 'estimations': estimations })
      

def create_estimation(request, username:str):
  if request.method == 'POST':
    name = request.POST['name']
    estimated_duration_months = request.POST['estimated-duration']
    estimated_cost = request.POST['estimated-cost']
    description = request.POST['description']

    estimated_time = request.POST['estimated-time']
    estimated_cost = request.POST['estimated-cost']

    cso = CSO.objects.get(username=username)
    designer = Designer.objects.get(username="anup")
    tag = Tag.objects.get(name="video editor")
    vendor = Vendor.objects.get(name="Ananto")
    
    # designer_set = set()
    # designer_set.add(designer)
    # tag_set = set()

    # try:
    estimation = Estimation.objects.create(description=description, cso=cso, estimated_duration_months=estimated_time, estimated_cost=estimated_cost)

    # tag_set.add(tag)
    # estimation = Estimation(description=description, cso=cso, estimated_duration_months=estimated_time, estimated_cost=estimated_cost, designers=designer_set, tags=tag_set, vendors=vendor)
    estimation.save()

    estimation.designers.add(designer)
    estimation.tags.add(tag)
    estimation.vendors.add(vendor)
    # except:
    #   print("error")

  if request.method == 'GET':
    designers = Designer.objects.all()
    designer_categories = set()

    for designer in designers:
      if designer.category not in designer_categories:
        designer_categories.add(designer.category)
  
    context = {
      'username': username,
      'designers': Designer.objects.all(),
      'tags': Tag.objects.all(),
      'vendors': Vendor.objects.all(),
      'designer_categories': designer_categories
    }
    return render(request, 'estimation/create_estimation.html', context)

def edit_estimation(request, estimation_id:int):

  if request.method == 'GET':
    estimation = Estimation.objects.get(id=estimation_id)
    print(estimation.description)
    # create edit estimation page here
    return render(request, 'estimation/edit_estimation.html', {'estimation': estimation})


