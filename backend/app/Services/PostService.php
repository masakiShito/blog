<?php

namespace App\Services;

use App\Models\Post;
use App\Repositories\Interfaces\PostRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class PostService
{
    private PostRepositoryInterface $postRepository;

    public function __construct(PostRepositoryInterface $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function getAllPosts(int $perPage = 15): LengthAwarePaginator
    {
        return $this->postRepository->getAllPaginated($perPage);
    }

    public function getPublishedPosts(int $perPage = 15): LengthAwarePaginator
    {
        return $this->postRepository->getPublishedPaginated($perPage);
    }

    public function createPost(array $data): Post
    {
        $post = $this->postRepository->create($data);

        if (isset($data['category_ids'])) {
            $this->postRepository->attachCategories($post, $data['category_ids']);
        }

        if (isset($data['tag_ids'])) {
            $this->postRepository->attachTags($post, $data['tag_ids']);
        }

        return $post->fresh(['categories', 'tags']);
    }

    public function updatePost(Post $post, array $data): Post
    {
        $this->postRepository->update($post, $data);

        if (isset($data['category_ids'])) {
            $this->postRepository->attachCategories($post, $data['category_ids']);
        }

        if (isset($data['tag_ids'])) {
            $this->postRepository->attachTags($post, $data['tag_ids']);
        }

        return $post->fresh(['categories', 'tags']);
    }

    public function deletePost(Post $post): bool
    {
        return $this->postRepository->delete($post);
    }

    public function findPost(int $id): ?Post
    {
        return $this->postRepository->findById($id);
    }
}
