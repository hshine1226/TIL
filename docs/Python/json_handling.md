# requests를 통해서 JSON 파일 다루기

API를 통해 받아온 JSON 파일을 다루기 위해서 requests를 사용할 수 있다. 

아래의 예제는 해당 url에서 JSON을 받아와서 다루는 예제이다.

1. `requests.get(url)`을 통해 받아온 요청을 `.json()`을 통해서 딕셔너리 형식으로 바꿀 수 있다.
2. Dictionary 형태로 변환되었기 때문에 Key, Value 접근 방식으로 데이터에 접근할 수 있다.

```python 
url="http://hn.algolia.com/api/v1/search_by_date?tags=story"
# JSON을 Dictionary로 변환
r = requests.get(url).json()
hits = r['hits']

results = []
for hit in hits:
    title = hit['title']
    url = hit['url']
    author = hit['author']
    comments = hit['num_comments']
    objectID = hit['objectID']
    points = hit['points']
    story = {'title': title, 'url': url, 'author': author, 'comments':comments, 'objectID': objectID, 'points': points}
    results.append(story)
```

JSON 형식

``` json
{
    "hits": [
        {
            "created_at": "2020-06-02T08:46:56.000Z",
            "title": "Convergent Evolution",
            "url": "https://en.wikipedia.org/wiki/List_of_examples_of_convergent_evolution",
            "author": "oli5679",
            "points": 1,
            "story_text": null,
            "comment_text": null,
            "num_comments": 0,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1591087616,
            "_tags": [
            "story",
            "author_oli5679",
            "story_23389020"
            ],
            "objectID": "23389020",
            "_highlightResult": {
            "title": {
            "value": "Convergent Evolution",
            "matchLevel": "none",
            "matchedWords": []
            },
            "url": {
            "value": "https://en.wikipedia.org/wiki/List_of_examples_of_convergent_evolution",
            "matchLevel": "none",
            "matchedWords": []
            },
            "author": {
            "value": "oli5679",
            "matchLevel": "none",
            "matchedWords": []
            }
        }
	},
        
// ...
        
		],
	}
}
```

