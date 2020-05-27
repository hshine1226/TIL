# MongoDB 연결하기

## dotenv 설치하기

``` shell
npm install dotenv
```

dotenv를 설치하는 이유는 가끔 내가 어떤 부분을 숨기고 싶을 때 시용하기 위함이다.

지금은 localhost에 MongoDB가 설치되어 있지만 만약 Cloud와 같은 외부에 설치가 되어있다면, 내 코드에 있는 URL로부터 유저 데이터를 보는 것을 원하지 않을 것이다. 

따라서 이럴 때 데이터를 숨기기 위해서 dotenv를 사용하는 것이다.

## Mongoose로 MongoDB 연결하기

``` js
// db.js
import mongoose from "mongoose";

// MongoDB port: 27017(Mongod실행 후 확인)
mongoose.connect("mongodb://localhost:27017/youtube-clone", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

```

### import mongoose 

일단 mongoDB를 연결하기 위해서는 mongoose를 import해준다. 

그리고 mongoose를 통해서 MongoDB를 연결하려면 Mongoose는 아래와 같은 String으로 된 database 주소를 요청한다.

`mongodb://localhost:PORT_NUMBER/DATABASE_NAME`

여기서 PORT_NUMBER는 Terminal에서 `mongod`를 통해서 확인 가능하다. 

DATABASE_NAME은 원하는 이름을 정해주면 된다.

### Configuration 설정

그리고 추가로 새로운 버전의 Mongoose는 Configuration(useNewUrlParser, useFindAndModify)을 보낼 수 있다.

이것들은 이렇게 적어놓는 이유는 내가 MongoDB를 사용할 때마다 이 Configuration을 설정하는 것이다.

새 버전에서는 이것들이 기본으로 설정되어 있지만, 이렇게 적어줌으로서 더 확실하게 하기 위함이다. 

너무 크게 신경쓰지 말자!

### Import Database

그리고 위에서 연결한 MongoDB와의 Connection을 db라는 변수에 저장한다.  

mongoose.connection.SOMTHING 이런식으로 사용해도 되지만 코드가 지저분하기 때문에 db라는 변수에 저장할 것이다.



`db.once("open", LISTENER)`는 MongoDB가 한 번만 실행되게 하는 것이다.

`db.on("error", LISTENER)`는 에러가 발생하면 해당 에러를 반환하는 것이다.



그리고 이전에 videoController.js에서 db를 import 했던 것을 없애고, init.js에서 import 해줄 것이다. 아래와 같이 db 전체를 import해준다. 

그리고 NodeJS를 실행을 해보면 DB가 정상적으로 연결된 것을 확인할 수 있다. 

``` js
// init.js
import "./db";
```

