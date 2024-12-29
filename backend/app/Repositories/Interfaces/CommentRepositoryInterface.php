<?php

namespace App\Repositories\Interfaces;

use App\Models\Comment;
use Illuminate\Pagination\LengthAwarePaginator;

interface CommentRepositoryInterface
{
    public function getAllForPost(int $postId, int $perPage = 15): LengthAwarePaginator;
    public function getApprovedForPost(int $postId, int $perPage = 15): LengthAwarePaginator;
    public function findById(int $id): ?Comment;
    public function create(array $data): Comment;
    public function update(Comment $comment, array $data): bool;
    public function delete(Comment $comment): bool;
    public function approve(Comment $comment): bool;
    public function markAsSpam(Comment $comment): bool;
}
