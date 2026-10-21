const ticker = {
    tickerName: "Reliance Industries",
    tickerCurrentPrice: "5367",
    tickerLastTradedPrice: "5425",
}

//console.log(ticker);
//console.log(ticker["tickerName"]);

const {tickerLastTradedPrice: LTP} = ticker;
console.log(`tickerLastTradedPrice: ${LTP}`)

// api-data-type : JSON (JavaScript Object Notation)

{
    "tickerName": "Reliance Industries",
    "tickerCurrentPrice": "5367",
    "tickerLastTradedPrice": "5425",
}

// response: api.github.com/users/laxmankrishnamurti

{
  "login": "laxmankrishnamurti",
  "id": 329662192,
  "node_id": "U_kgDOE6Y-8A",
  "avatar_url": "https://avatars.githubusercontent.com/u/329662192?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/laxmankrishnamurti",
  "html_url": "https://github.com/laxmankrishnamurti",
  "followers_url": "https://api.github.com/users/laxmankrishnamurti/followers",
  "following_url": "https://api.github.com/users/laxmankrishnamurti/following{/other_user}",
  "gists_url": "https://api.github.com/users/laxmankrishnamurti/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/laxmankrishnamurti/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/laxmankrishnamurti/subscriptions",
  "organizations_url": "https://api.github.com/users/laxmankrishnamurti/orgs",
  "repos_url": "https://api.github.com/users/laxmankrishnamurti/repos",
  "events_url": "https://api.github.com/users/laxmankrishnamurti/events{/privacy}",
  "received_events_url": "https://api.github.com/users/laxmankrishnamurti/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Laxman Krishnamurti",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Quant Developer",
  "twitter_username": "laxmankofficial",
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-09-15T17:37:21Z",
  "updated_at": "2026-10-12T10:19:51Z"
}

// api response: randomuser.me

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}