# Project
## Requirements:
- Include a package.json file for npm packages and a requirements.txt file for python packages ✅
- Push to your GitHub repository you created for this task. ✅

## Documentation:
- Provide comprehensive documentation for the code and the project
    - See below ✅
- Include explanations of the algorithms used, how the server is secured, and the steps taken to ensure efficiency.
    1. algorithms used -> 
        1. I think the code is simple enough so not needed to be explained, regardless I provided some comments at `./backend/UNHCR_django/routes.py`.
    2. server is secured ->
        1. Vercel takes care of the server hosting (though maybe GDPR and US servers are not friendly to each other)
        2. CORS is set to the frontend host only in `DEBUG = False` mode.
        3. Since Vercel takes care of the hosting; attacks such as DDoS are handled by them. (I think they use ?Cloudflaire?)
    3. steps taken to ensure efficiency
        1. I wrote the `./backend/UNHCR_django/routes.py` "algo" as efficiently as I could. If we were to care highly about efficiency I would rather use plain HTML / JS for the frontend for older machines.
        2. As a comment, I think premature optimization is one of the pit falls engineers such as myself tend to fall into. I think it should be avoided.
- Include information on how to install and run the application, as well as any other necessary information for future maintenance and development
    1. See Notes below
- Include how you would quickly test the functionalities of your application.
    1. FE -> Go throught the green light scenarios such as entering the "correct" stuff. Palindrome, non palindrome, then try something with weird characters that have weird encodings.
    2. BE -> Try the green light again, if that works try test CORS if it works correctly. Try different methods of requests (PUT, GET, etc.)


## Notes:
- Did I see correctly that this position was advertised as "Junior"? 👀
- Deployment flow is nice, the code is fairly clean, testing is omited but suggestions are made below.

# BE
## Requirements:
- The backend should be built using Django ✅
- Ensure that the server is secure and the algorithms are efficient ✅
- Use best practices in coding, testing, and deployment ✅*


## Notes:
- Run it locally via `python manage.py runserver`
- Hosted on Vercel. Deployable for me via `vercel deploy`.
- No tests written currently. But I should pytest the different routes. For such a small project I will omit them.


# FE 
## Requirements:
- The frontend should be built using React ✅
- Use a CSS framework of your choice -> see _Notes_ ✅
- Display the responses received from the API in a clear and organized manner ✅
- Check the requests is sent correctly ✅


## Notes:
- Find everything in `package.json`
- Runnable via `npm run dev`
- I used the [tabler](https://preview.tabler.io/) css library, I like it for it's light weight.
- Even if running locally, the server URL is hard coded. In a serious project I would install [config](https://www.npmjs.com/package/config) where I would set the _dev_ and _prod_ URLs respectively.
- No tests written for this small project. Though if we want we could have some JEST Component tests as well as Selenium / Storybook e2e test. I suspect this would be an overkill here.



Finished coding in 2h06m
Finished documentation in 2h35m

