# MongoDB Errors

## MongoError: E11000 duplicate key error index ...

해당 에러는 unique 값으로 지정된 키의 중복으로 인해서 발생하는 에러이다. 

이 에러를 해결하기 위해서는 MongoDB에서 중복된 키 값들을 삭제해줘야 하는데, 현재 Index key의 확인은 다음의 명령어 `db.collection.getIndexes()`로 확인이 가능하다.

명령어를 확인해서 중복된 키 값이 어떤 키인지 확인한 후, 삭제하고 싶은 키는 다음의 명령어`db.toilets.dropIndex(index) - e.g. db.toilets.dropIndex( "indexName" ) or db.toilets.dropIndex( { "indexKey" : 1 } )`로 삭제가 가능하다. 

만약 인덱스를 전체 다 삭제하고 싶다면, `db.collection.dropIndexes()`를 사용하면 된다.