
from django.http import HttpRequest, JsonResponse, HttpResponse
from django.core.exceptions import BadRequest
import json


def index(request):
    return HttpResponse(200)


def palindrome(request: HttpRequest):

    response_str = ""
    query = ""

    # check for request method and query to be present
    if request.method == 'POST':
        body = json.loads(request.body)

        try:
            query = body["query"]
        except:
            return BadRequest("No query given")
    else:
        return BadRequest("Not a Post Request")
    
    # check for palindrome
    is_palindrome = query.lower() == query[::-1].lower()

    if is_palindrome:
        response_str += f"The input '{query}' is a palindrome"

        if len(query) % 2 == 1:
            middle_letter = query[len(query) // 2]
            response_str += f" and its middle letter is '{middle_letter}'."
        else:
            response_str += "."
    else:
        response_str = f"The input '{query}' is not a palindrome."

    return JsonResponse({'message': response_str})
