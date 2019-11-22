from django.shortcuts import render
from django.http import JsonResponse

words_id = {}
docs_id = {}

doc_to_words = {}
words_to_docs = {}


def clear_indexes(request):
    return JsonResponse()


def indexing_docs(request):
    data = request.GET.get('data')
    print(data)
    return JsonResponse()


def search_word(request):
    return JsonResponse()