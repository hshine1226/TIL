# MongoDB의 geospatial, geojson을 이용해서 특정 범위의 위치 데이터 받아오기

MongoDB를 통해서 위치 좌표를 관리할 때, 어떤 한 포인트의 근처 위치들을 받아오고 싶을 때가 있을 것이다. 

이번에는 MongoDB와 Mongoose를 활용해서 이를 해결해 볼 것이다. 

## 1. Mongoose로 GeoJson 형태의 스키마 생성하기

GeoJson이란 위치 정보를 표현하기 위한 JSON 형태의 데이터 포맷이다. 

GeoJson은 `Point`, `LineString`,`Polygon`,`MultiPoint`,`MultiLineString` 등의 **Geometry type**들을 지원한다.

GeoJson의 대한 정보는 [geojson.org](https://geojson.org/)에서 확인할 수 있다.

일단 GeoJson 형태로 위치 정보를 표현하기 위해서 아래와 같이 Mongoose Schema를 구성할 수 있다. 

이 스키마는 화장실 정보를 나타내는 스키마로써, type, name, address, location 등으로 구성되어 있다. 

아래는 스키마의 전체 구성 코드이다.

``` js
import mongoose from "mongoose";

const ToiletSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
    unique: false,
  },
  unisexToilet: String,
  openTime: {
    type: String,
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
});

ToiletSchema.index({ location: "2dsphere" });

const model = mongoose.model("Toilet", ToiletSchema);

export default model;
```

위의 스키마에서 우리가 주목해야 할 부분은 위치 정보를 정의한 `location` property이다.

해당 부분만 아래에서 따로 살펴보자.

``` js
location: {
	type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  }
```

location property는 object로서 type, coordinates를 포함하고 있다.

type의 **Geometry type**은 `Point`로서 longitude(경도)와 latitude(위도) 값을 배열 형태로 받아올 것이다.

또 하나 중요한 점은 우리는 MongoDB의 Geospatial query가 지정하는 범위의 위치 정보를 받아올 수 있게 하는 `$near` operator를 사용할 것이기 때문에, 아래와 같이 스키마의 index를 `2dsphere`로 지정해주어야 한다.

``` js
ToiletSchema.index({ location: "2dsphere" });
```

## 2. 스키마로 생성한 모델을 통해 MongoDB에 위치 정보 저장하기

아래와 같이 우리가 위에서 만든 모델을 통해서 위치 정보를 저장할 수 있다.

``` js
import Toilet from "./models/Toilet"

const toilet = new Toilet({
    name: "남산타워",
    openTime: "09:00~18:00",
    location: {
        type: "Point",
        coordinates: [37.5511736, 126.9860379]
    }
})

toilet.save((err, message) => {
    if (err) console.log(err);
    console.log(message);
})
```

## 3. $near operator를 이용해서 주변 위치 받아오기

위치 정보를 정상적으로 저장했다면 아래의 과정을 통해서 주변의 위치들을 MongoDB에서 받아올 수 있다.

`$near` operator의 Syntax는 아래와 같다. Syntax의 자세한 Document는 [Mongo db docs](https://docs.mongodb.com/manual/reference/operator/query/near/)에서 확인할 수 있다.

``` js
{
   <location field>: {
     $near: {
       $geometry: {
          type: "Point" ,
          coordinates: [ <longitude> , <latitude> ]
       },
       $maxDistance: <distance in meters>,
       $minDistance: <distance in meters>
     }
   }
}
```

실제 코드를 작성해보며 `$near` operator를 활용해 주변 위치 정보들을 받아와보자.

``` js
import Toilet from "./models/Toilet"

const findNearToilets = async (latt, long) => {
    try {
        const toilet = await Toilet.find({
            location: {
                $near: {
                    // 해당하는 포인트로부터 최대 1km(1000m) 범위
                    $maxDistance: 1000,
                    $geometry: {
                        type: "Point",
                        coordinates: [latt, long],
                    },
                },
            }.
        });
        return toilet;
    } catch (err) {
        console.log(err);
    }
};

const getNearToilets = async (req, res) => {
    const {
        query: { latt, long },
    } = req;
    
	const toilets = await findNearToilets(latt, long);
    
}

```

위와 같이  MongoDB의 `$near` operator를 이용해서 원하는 반경 내에 있는 위치 정보들을 받아올 수 있는 방법을 알아보았다. 

더 다양한 query들을 원한다면 MongoDB의 document에서 많은 정보들을 확인할 수 있다.

## 4. $box operator를 이용해서 지도 위의 사각형 범위 위치 받아오기

`$box` operator를 사용하기 위해서는 사각형의 오른쪽 위, 왼쪽 아래 좌표가 필요하다.

> 좌표는 [longitude, latitude] 순으로 저장되어야 한다.

``` js
{
  <location field>: {
     $geoWithin: {
        $box: [
          [ <bottom left coordinates> ],
          [ <upper right coordinates> ]
        ]
     }
  }
}
```



``` js
export const findBoxToilets = async (bl, ur) => {
  try {
    const toilets = await Toilet.find({
      location: {
        $geoWithin: {
          $box: [bl, ur],
        },
      },
    });
    return toilets;
  } catch (err) {
    console.log(err);
  }
};
```



