<?php

namespace App\Repositories;

use App\Models\Post;
use App\Repositories\Interfaces\PostRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class PostRepository implements PostRepositoryInterface
{
    public function getAllPaginated(int $perPage = 15): LengthAwarePaginator
    {
        return Post::with(['user'])
            ->latest()
            ->paginate($perPage);
    }

    public function getPublishedPaginated(int $perPage = 15): LengthAwarePaginator
    {
        return Post::with(['user'])
            ->published()
            ->latest('published_at')
            ->paginate($perPage);
    }

    public function findById(int $id): ?Post
    {
        return Post::with(['user'])
            ->find($id);
    }

    public function create(array $data): Post
    {
        return Post::create($data);
    }

    public function update(Post $post, array $data): bool
    {
        return $post->update($data);
    }

    public function delete(Post $post): bool
    {
        return $post->delete();
    }

    public function attachCategories(Post $post, array $categoryIds): void
    {
        $post->categories()->sync($categoryIds);
    }

    public function attachTags(Post $post, array $tagIds): void
    {
        $post->tags()->sync($tagIds);
    }
}
