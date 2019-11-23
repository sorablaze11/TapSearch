from django.urls import path
from . import views

urlpatterns = [
    path('/clear', views.clear_indexes),
    path('/index', views.indexing_docs),
    path('/search', views.search_word),
    path('/document/<int:id>', views.get_document),
    path('/getall', views.get_all),
]