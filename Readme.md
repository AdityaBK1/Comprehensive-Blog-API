GET /API/POSTS
Retrieve a list of all blog posts.

Response
[
  {
    "_id": "1",
    "title": "Good",
    "content": "Real time post",
    "created_at": "2023-10-02T12:00:00Z",
    "updated_at": "2023-10-02T12:00:00Z",
    "category": ["Bharat","USA"]
  },
  {
    "_id": "2",
    "title": "Good One",
    "content": "Another real time post",
    "created_at": "2023-10-02T13:00:00Z",
    "updated_at": "2023-10-02T13:00:00Z",
    "category": ["Bharat"]
  }
]

GET /API/POSTS/:id
Retrieve a specific blog post by its ID.

Response
{
    "_id": "2",
    "title": "Good One",
    "content": "Another Real time post",
    "created_at": "2023-10-02T13:00:00Z",
    "updated_at": "2023-10-02T13:00:00Z",
    "category": ["Bharat1"]
  }

POST /api/posts/
Create a new blog post. The request body should contain title, content, and category_id.

Request Body
{
  "title": "Very good one",
  "content": "Present Real time post",
  "category_id": ["china", "uk"]
}

PUT /api/posts/:id
Update an existing blog post by its ID.

Request Body
{
  "title": "Very good one",
  "content": "Present Real time post",
  "category_id": ["china", "australia","USA"]
}

DELETE /api/posts/:id
Delete a blog post by its ID.

Response
{
  "message": "Blog post  has been deleted successfully."
}

GET /api/posts/latest (Authorized Users Only)

Retrieve the latest blog post from each unique category. Only authorized users have access to this endpoint.

Response
 {
    "_id": "1",
    "title": "Good",
    "content": "Real time post",
    "created_at": "2023-10-02T12:00:00Z",
    "updated_at": "2023-10-02T12:00:00Z",
    "category": ["Bharat","USA"]
  }
