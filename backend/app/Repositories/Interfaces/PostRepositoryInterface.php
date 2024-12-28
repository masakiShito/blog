<?php

namespace App\Repositories\Interfaces;

use App\Models\Post;
use Illuminate\Pagination\LengthAwarePaginator;

interface PostRepositoryInterface
{
    public function getAllPaginated(int $perPage = 15): LengthAwarePaginator;
    public function getPublishedPaginated(int $perPage = 15): LengthAwarePaginator;
    public function findById(int $id): ?Post;
    public function create(array $data): Post;
    public function update(Post $post, array $data): bool;
    public function delete(Post $post): bool;
    public function attachCategories(Post $post, array $categoryIds): void;
    public function attachTags(Post $post, array $tagIds): void;
}
