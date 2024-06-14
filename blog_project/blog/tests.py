from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post, Comment

class PostTests(APITestCase):
    def test_create_post(self):
        url = reverse('post-list-create')
        data = {'title': 'New Post', 'content': 'Content of the new post', 'author': 'Author Name'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 1)
        self.assertEqual(Post.objects.get().title, 'New Post')

    def test_get_posts(self):
        url = reverse('post-list-create')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
