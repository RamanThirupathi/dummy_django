from django.shortcuts import render
from django.http  import HttpResponse

# Create your views here.
def wHome(request):
    if request.method == 'POST':
        message='This is post request'
        return render(request,'hello/baselayout.html',{'message':message , 'nbar': 'wHome'})
    else:
        message='This is get request'
        # return HttpResponse ("suceeded")
        return render(request,'hello/baselayout.html',{'message':message , 'nbar': 'wHome'})
