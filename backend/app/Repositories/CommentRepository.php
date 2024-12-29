<?php

namespace App\Repositories;

use App\Models\Comment;
use App\Repositories\Interfaces\CommentRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class CommentRepository implements CommentRepositoryInterface
{
    public function getAllForPost(int $postId, int $perPage = 15): LengthAwarePaginator
    {
        return Comment::where('post_id', $postId)
            ->latest()
            ->paginate($perPage);
    }

    public function getApprovedForPost(int $postId, int $perPage = 15): LengthAwarePaginator
    {
        return Comment::where('post_id', $postId)
            ->approved()
            ->latest()
            ->paginate($perPage);
    }

    public function findById(int $id): ?Comment
    {
        return Comment::find($id);
    }

    public function create(array $data): Comment
    {
        return Comment::create($data);
    }

    public function update(Comment $comment, array $data): bool
    {
        return $comment->update($data);
    }

    public function delete(Comment $comment): bool
    {
        return $comment->delete();
    }

    public function approve(Comment $comment): bool
    {
        return $comment->update(['status' => 'approved']);
    }

    public function markAsSpam(Comment $comment): bool
    {
        return $comment->update(['status' => 'spam']);
    }
}
