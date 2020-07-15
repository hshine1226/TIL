# Migrating the MongoDB to MongoAtlas

## 1. Creating Cluster

Cluster는 서버와 같다고 보면 된다.

Cloud Provider: AWS

Region: N. Virginia

> 만약 Heroku를 이용해서 배포를 한다면, US에 있는 서버를 골라야 한다.

Cluster가 생성이 된 후 나의 Application과 연결을 시켜주어야 한다.

Application과 연결시키기 전에 먼저 Database user를 하나 생성한다.

후에 클러스터에서 `Connect your application`을 선택한 후 연결 코드를 나의 application 코드에 넣어주면 된다.

``` js
// .env

MONGO_URL="mongodb+srv://<ID>:<PW>@cluster0.m6qhp.mongodb.net/youtube-clone?retryWrites=true&w=majority"
```

## 2. IP Whitelist

IP Whitelist는 어떤 IP주소가 Cluster에 접근할 수 있는지 설정하는 것이다.

모든 IP에서 접근가능하게 설정하려면 

`0.0.0.0/0`을 추가하면 된다.