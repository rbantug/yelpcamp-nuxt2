# yelpcamp-nuxt2

Link to website: https://yelpcamp-nuxt2.onrender.com

STATUS: Offline

This is an attempt to replicate the Codewell.cc challenge found [here](https://www.codewell.cc/challenges/yelpcamp-by-colt-steele--6144c7c8a383e41090a3d84b)

The app is capable of simple signup and login using a username and a password. Front-end authentication is handled by Nuxt/Auth module while some of the API routes are protected and requires authentication for the routes to be accessed. User inputs are sanitized and validated before entering the database. 

All data are dynamic and none are hardcoded. The camp reviews are virtually populated when we request for a single camp. This means that there are no redundant data in the database.

And I intentionally disabled the user signup to prevent unnecessary traffic in the database. You can login using these credentials

- username: test user one
- password: test1234

## Tech Used

- Nuxt 2
- CSS
- Nuxt/auth module
- Express.js inside Nuxt 2 using serverMiddleware
- MongoDB + Mongoose
- Json web token

## Screenshots

### Landing Page

**Desktop**
![Landing Page Desktop](https://drive.google.com/uc?id=1TZkpAN64PED22eumCBaV9ZOI6VCEi4W1)

**Mobile**

![Landing Page Mobile](https://drive.google.com/uc?id=13I5btxouWg53f9xTaqnCiihzZkRk8rOt)

### Campgrounds

**Desktop**
![Campgrounds Page Desktop](https://drive.google.com/uc?id=1EEh64BOVKTCppnreD9F6Xiez4g82Ppei)

**Mobile**

![Campgrounds Page Mobile](https://drive.google.com/uc?id=1l3flR1BlBpKStucqt2POy99EMBz3fQBq)

### Camp

**Desktop**
![Camp Page Desktop](https://drive.google.com/uc?id=1g4ZFrbREDziWPQ1wQffkNDS_BJ_NlvTV)

**Mobile**

![Camp Page Mobile](https://drive.google.com/uc?id=1gz-a4K2AD4iY50rLrZPm3VHQg3yIy4Uf)

### Camp - Logged in

**Desktop**
![Camp Page Desktop](https://drive.google.com/uc?id=1FpghVtO8kWyuWb0fqslL6_F-CBBV1RA8)

**Mobile**

![Camp Page Mobile](https://drive.google.com/uc?id=116I3ZE2QV2CSbzymszDThRZqnE5h3aco)

### Login

**Desktop**
![Login Page Desktop](https://drive.google.com/uc?id=1A_k6gyBOHeoRX8i5cA6ZWUzIknmFvqE9)

**Mobile**

![Login Page Mobile](https://drive.google.com/uc?id=1fnsy0k1onRR_3fnCaXZ9Gk1gvyEWqSSL)

### Sign up

**Desktop**
![Sign up Page Desktop](https://drive.google.com/uc?id=1-QOmd07UFtL9Qdkdpotwcsyymt9rD3IQ)

**Mobile**

![Sign up Page Mobile](https://drive.google.com/uc?id=1sSzTM_yFNrhWtsMoBSNW7Dkx7V9asEh3)

### New Comment

**Desktop**
![New Comment Page Desktop](https://drive.google.com/uc?id=1x8H-gVaEZXnRPklP0BvGaGiITwQ8cBPV)

**Mobile**

![New Comment Page Mobile](https://drive.google.com/uc?id=1IoYDw7GiVgKuyLMR3K1KUjDuwB803uvA)
