<?php

namespace App\Services;

use App\Models\Comment;
use App\Repositories\Interfaces\CommentRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class CommentService
{
    private CommentRepositoryInterface $commentRepository;

    public function __construct(CommentRepositoryInterface $commentRepository)
    {
        $this->commentRepository = $commentRepository;
    }

    public function getAllComments(int $postId, int $perPage = 15): LengthAwarePaginator
    {
        return $this->commentRepository->getAllForPost($postId, $perPage);
    }

    public function getApprovedComments(int $postId, int $perPage = 15): LengthAwarePaginator
    {
        return $this->commentRepository->getApprovedForPost($postId, $perPage);
    }

    public function createComment(array $data): Comment
    {
        return $this->commentRepository->create($data);
    }

    public function updateComment(Comment $comment, array $data): Comment
    {
        $this->commentRepository->update($comment, $data);
        return $comment->fresh();
    }

    public function deleteComment(Comment $comment): bool
    {
        return $this->commentRepository->delete($comment);
    }

    public function approveComment(Comment $comment): Comment
    {
        $this->commentRepository->approve($comment);
        return $comment->fresh();
    }

    public function markAsSpam(Comment $comment): Comment
    {
        $this->commentRepository->markAsSpam($comment);
        return $comment->fresh();
    }
}
