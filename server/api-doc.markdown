# **Go Rival Go Server**

Aplikasi Go Rival Go adalah aplikasi perekomendasian/pencarian lawan team disekitar dan dengan level yang sama atau level lebih tinggi, aplikasi ini dibuat untuk mempermudah pecinta olahraga khususnya futsal dalam menemukan lawan yang lebih bervarian, agar tidak adanya kebosanan, teman bertambah dan skill pun meningkat

---

* RESTful endpoint Go Rival Go operation
* respon format JSON

* General Respon (500)*
```
    {
        "message": "Internal Server Error"
    }
    
```

# RESTfull endPoints
## Team
1. GET/teams
   
    > Menampilkan semua team
    
*Request Body* 

   - not needed

*Response (200)* 
```
    [
        {
            "id": 1,
            "name": "Alumni Nafie Fc",
            "city": "cipanas",
            "imgUrl": "http://assets.stickpng.com/images/580b57fcd9996e24bc43c4df.png",
            "status": "active",
            "createdAt": "2021-10-10T15:45:56.703Z",
            "updatedAt": "2021-10-10T15:45:56.703Z",
        },
    ]
```

2. POST/teams
   
   > membuat team

*Request Body*
```
    {
        "name": "<team name>",
        "city": "<team city>",
        "imgUrl": "<team imgUrl>",
        "status": "active",
    }
```

*Response (201 - Created)*
```
    {
        "name": "<team name>",
        "city": "<team city>",
        "imgUrl": "<team imgUrl>",
        "status": "active",
        createdAt: <date>,
        updatedAt: <date>,
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

3. PUT/teams

   > edit team

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        role : admin
    }
```

*Request Body*
```
    {
        "name": "<team name>",
        "city": "<team city>",
        "imgUrl": "<team imgUrl>",
        "status": "active",
    }
```

*Response (200 - Updated)*
```
    {
        "id": 1,
        "name": "<team name>",
        "city": "<team city>",
        "imgUrl": "<team imgUrl>",
        "status": "active",
        "createdAt": <date>,
        "updatedAt": <date>
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

4. Patch/team
   
    >archive team

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        role : admin
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (200 - Archived)*
```
    {
        "status": "archived",
    }
```
## Player
1. GET/players
   
    > Menampilkan semua player bisa dikatakan juga sebagai user
    
*Request Body* 

   - not needed

*Response (200)* 
```
    [
        {
            "id": 7,
            "name": "dedi",
            "city": "cipanas",
            "username": "dedi05",
            "email": "dedi05@test.com",
            "password": "$2a$10$yCCAshbAnoDploP7ZskBEegb8osRdXqJGY.2skqCsdTqjaorKykC.",
            "date_of_birth": "25-12-1995",
            "gender": "laki-laki",
            "teamId": null,
            "gorId": 1,
            "role": "admin",
            "status": "active",
            "createdAt": "2021-10-11T09:00:32.235Z",
            "updatedAt": "2021-10-11T09:00:32.235Z",
        },
    ]
```

2. POST/players
   
   > menambah players

*Request Body*
```
    {
        "name": <name Player>,
        "city": <city player>,
        "username": <username Player>,
        "email": <email Player>,
        "password": <password player",
        "date_of_birth": <DOB player>,
        "gender": <gender Player>,
        "teamId": <team id Player>,
        "gorId": <gor id Player>,
        "role": <role Player>,
        "status": <status Player>
    }
```

*Response (201 - Created)*
```
    {
        "name": <name Player>,
        "city": <city player>,
        "username": <username Player>,
        "email": <email Player>,
        "password": <password player",
        "date_of_birth": <DOB player>,
        "gender": <gender Player>,
        "teamId": <team id Player>,
        "gorId": <gor id Player>,
        "role": <role Player>,
        "status": <status Player>
        createdAt: <date>,
        updatedAt: <date>,
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

3. PUT/players

   > edit Player

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        id : <id Player>
    }
```

*Request Body*
```
    {
        "name": <name Player>,
        "city": <city player>,
        "username": <username Player>,
        "email": <email Player>,
        "password": <password player",
        "date_of_birth": <DOB player>,
        "gender": <gender Player>,
        "teamId": <team id Player>,
        "gorId": <gor id Player>,
        "role": <role Player>,
        "status": <status Player>
    }
```

*Response (200 - Updated)*
```
    {
        "name": <name Player>,
        "city": <city player>,
        "username": <username Player>,
        "email": <email Player>,
        "password": <password player",
        "date_of_birth": <DOB player>,
        "gender": <gender Player>,
        "teamId": <team id Player>,
        "gorId": <gor id Player>,
        "role": <role Player>,
        "status": <status Player>
        "createdAt": <date>,
        "updatedAt": <date>
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (403)*
```
    {
        "message": "not authorized"
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

4. Patch/players
   
    >archive team

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        role : admin
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (403)*
```
    {
        "message": "not authorized"
    }
```

*Response (200 - Archived)*
```
    {
        "status": "archived",
    }
```
## Gor
1. GET/gors
   
    > Menampilkan semua gor
    
*Request Body* 

   - not needed

*Response (200)* 
```
    [
        {
            "id": 1,
            "name": "Berkah Gor",
            "city": "cipanas",
            "rent_price": 100000,
            "time_avaible": "from 8 am until 12 pm",
            "status": "active",
            "createdAt": "2021-10-11T09:00:32.224Z",
            "updatedAt": "2021-10-11T09:00:32.224Z"
        },
    ]
```

2. POST/gors
   
   > menambah gors

*Request Body*
```
    {
        "name": <name gor>,
        "city": <city gor>,
        "rent_price": <price_rent gor> min 100000,
        "time_avaible": <time available>
    }
```

*Response (201 - Created)*
```
    {
        "name": <name gor>,
        "city": <city gor>,
        "rent_price": <price_rent gor> min 100000,
        "time_avaible": <time available>
        "status":"active"
        createdAt: <date>,
        updatedAt: <date>,
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

3. PUT/gors

   > edit Player

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        id : <id Player>
    }
```

*Request Body*
```
    {
        "name": <name gor>,
        "city": <city gor>,
        "rent_price": <price_rent gor> min 100000,
        "time_avaible": <time available>
        "status":<status gor>
    }
```

*Response (200 - Updated)*
```
    {
        "name": <name gor>,
        "city": <city gor>,
        "rent_price": <price_rent gor> min 100000,
        "time_avaible": <time available>
        "status": <status gor>
        "createdAt": <date>,
        "updatedAt": <date>
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (403)*
```
    {
        "message": "not authorized"
    }
```

*Response (403)*
```
    {
        "message": "not authorized"
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

4. Patch/gors
   
    >archive team

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        role : admin
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (403)*
```
    {
        "message": "not authorized"
    }
```

*Response (200 - Archived)*
```
    {
        "status": "archived",
    }
```
## Invitations
1. GET/invitations
   
    > Menampilkan semua invitations
    
*Request Body* 

   - not needed

*Response (200)* 
```
    [
        {
            "id": 2,
            "teamIdA": 6,
            "teamIdB": 5,
            "gorId": 1,
            "theWinnerId": 1,
            "dateMatch": "2021-10-11T09:01:22.554Z"
            "status": "Pending",
            "createdAt": "2021-10-11T09:01:22.554Z",
            "updatedAt": "2021-10-11T09:01:22.554Z"
        },
    ]
```

2. POST/invitations
   
   > menambah invitations

*Request Body*
```
    {
        "teamIdA": <id team a>,
        "teamIdB": <id team b>,
        "gorId": <id gor>,
        "theWinnerId": <id team winner>,
        "dateMatch": "<date>"
    }
```

*Response (201 - Created)*
```
    {
        "teamIdA": <id team a>,
        "teamIdB": <id team b>,
        "gorId": <id gor>,
        "theWinnerId": <id team winner>,
        "dateMatch": "<date>"
        createdAt: <date>,
        updatedAt: <date>,
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

3. PUT/gors

   > edit Player

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        role : superAdmin
    }
```

*Request Body*
```
    {
        "teamIdA": <id team a>,
        "teamIdB": <id team b>,
        "gorId": <id gor>,
        "theWinnerId": <id team winner>,
        "dateMatch": "<date>"
    }
```

*Response (200 - Updated)*
```
    {
        "teamIdA": <id team a>,
        "teamIdB": <id team b>,
        "gorId": <id gor>,
        "theWinnerId": <id team winner>,
        "dateMatch": "<date>"
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (403)*
```
    {
        "message": "not authorized"
    }
```

*Response (400)*
```
    {
        "message": "Bad Request"
    }
```

4. Patch/invitations
   
    >archive invitations

*Request Params*
```
    {
        "id": 1,
    }
```

*Headers*
```
    {
        token : <access token>
        role : superAdmin
    }
```

*Response (404)*
```
    {
        "message": "user not found"
    }
```

*Response (403)*
```
    {
        "message": "not authorized"
    }
```

*Response (200 - Archived)*
```
    {
        "status": "archived",
    }
```
## News
1. GET/news
   
    > Menampilkan semua news

*Source 3rd Party
  - https://www.scorebat.com/video-api/v3/
  - method : GET 
    
*Request Body* 

   - not needed

*Response (200)* 
```
    [
        {
            "title": "Gabon - Angola",
            "competition": "WORLD CUP: Africa, Qualification Second stage",
            "matchviewUrl": "https://www.scorebat.com/embed/matchview/1123060/",
            "competitionUrl": "https://www.scorebat.com/embed/competition/world-cup-africa-qualification-second-stage/",
            "thumbnail": "https://www.scorebat.com/og/m/og1123060.jpeg",
            "date": "2021-10-11T13:00:00+0000",
            "videos": [
                {
                    "title": "Live Stream",
                    "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/6164481e30c38/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
                }
            ]
        },
    ]
```

## Weather
1. GET/weather/codeLocation
   
    > Menampilkan semua kode lokasi

*Request Body* 
   - not needed

*Request Params*
   - code location

*Source 3rd Party
  - https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json
  - method : GET 

*Response (200)* 
```
    [
        {
            "id": "501397",
            "propinsi": "Aceh",
            "kota": "Kota Banda Aceh",
            "kecamatan": "Banda Aceh",
            "lat": "5.544910",
            "lon": "95.343120"
        },
        {
            "id": "501398",
            "propinsi": "Aceh",
            "kota": "Kab. Bireuen",
            "kecamatan": "Bireun",
            "lat": "5.230000",
            "lon": "96.720000"
        },
        {
            "id": "501399",
            "propinsi": "Aceh",
            "kota": "Kab. Gayo Lues",
            "kecamatan": "Gayo Lues",
            "lat": "3.977980",
            "lon": "97.322960"
        },
        {
            "id": "501400",
            "propinsi": "Aceh",
            "kota": "Kab. Aceh Barat Daya",
            "kecamatan": "Aceh Barat Daya",
            "lat": "3.740000",
            "lon": "96.860000"
        },
        {
            "id": "501401",
            "propinsi": "Aceh",
            "kota": "Kab. Aceh Jaya",
            "kecamatan": "Aceh Jaya",
            "lat": "4.616667",
            "lon": "95.616700"
        },
        {
            "id": "501402",
            "propinsi": "Aceh",
            "kota": "Kab. Aceh Timur",
            "kecamatan": "Aceh Timur",
            "lat": "4.940461",
            "lon": "97.756348"
        },
        {
            "id": "501403",
            "propinsi": "Aceh",
            "kota": "Kab. Aceh Tamiang",
            "kecamatan": "Aceh Tamiang",
            "lat": "4.284788",
            "lon": "98.065338"
        }
    ]
```
2. GET/weather
   
    > Menampilkan semua cuaca

*Request Body* 
   - not needed

*Request Params*
   - code location

*Source 3rd Party
  - https://ibnux.github.io/BMKG-importer/cuaca/${codeLocation}.json
  - method : GET 

*Response (200)* 
```
    [
        {
            "jamCuaca": "2021-10-11 00:00:00",
            "kodeCuaca": "1",
            "cuaca": "Cerah Berawan",
            "humidity": "75",
            "tempC": "21",
            "tempF": "70"
        },
        {
            "jamCuaca": "2021-10-11 06:00:00",
            "kodeCuaca": "60",
            "cuaca": "Hujan Ringan",
            "humidity": "70",
            "tempC": "28",
            "tempF": "82"
        },
        {
            "jamCuaca": "2021-10-11 12:00:00",
            "kodeCuaca": "3",
            "cuaca": "Berawan",
            "humidity": "85",
            "tempC": "20",
            "tempF": "68"
        }
    ]
```