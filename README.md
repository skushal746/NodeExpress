this project is about creating a node express server with mongodb

this is the export of the postman requests : {
	"info": {
		"_postman_id": "bed40542-3876-4c25-9dda-8758353f11bc",
		"name": "NodeExpress",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "10396402"
	},
	"item": [
		{
			"name": "Register User",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"Kushal\",\n    \"email\": \"skushal746@gmail.com\",\n    \"password\":\"@Kusu2208\" \n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3400/kushapi/v1/users/register",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3400",
					"path": [
						"kushapi",
						"v1",
						"users",
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"email\": \"skushal746@gmail.com\",\n    \"password\":\"@Kusu2208\" \n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3400/kushapi/v1/users/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3400",
					"path": [
						"kushapi",
						"v1",
						"users",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Logout User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"email\": \"skushal746@gmail.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3400/kushapi/v1/users/logout",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3400",
					"path": [
						"kushapi",
						"v1",
						"users",
						"logout"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Post",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\":\"Test 1\",\n    \"description\": \"Test 1 Description\",\n    \"age\": 4\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3400/kushapi/v1/posts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3400",
					"path": [
						"kushapi",
						"v1",
						"posts"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Posts",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3400/kushapi/v1/posts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3400",
					"path": [
						"kushapi",
						"v1",
						"posts"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Post",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3400/kushapi/v1/posts/69436e534622a2b776b7ed3a",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3400",
					"path": [
						"kushapi",
						"v1",
						"posts",
						"69436e534622a2b776b7ed3a"
					]
				}
			},
			"response": []
		}
	]
}