<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use App\Services\CommentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CommentController extends Controller
{
    private CommentService $commentService;

    public function __construct(CommentService $commentService)
    {
        $this->commentService = $commentService;
    }

    public function index(Post $post): ResourceCollection
    {
        $comments = $this->commentService->getApprovedComments($post->id);
        return CommentResource::collection($comments);
    }

    public function store(Request $request, Post $post): CommentResource
    {
        $validated = $request->validate([
            'author_name' => 'required|string|max:255',
            'author_email' => 'required|email|max:255',
            'content' => 'required|string'
        ]);

        $validated['post_id'] = $post->id;
        $validated['status'] = 'pending';

        $comment = $this->commentService->createComment($validated);
        return new CommentResource($comment);
    }

    public function update(Request $request, Comment $comment): CommentResource
    {
        $this->authorize('update', $comment);

        $validated = $request->validate([
            'content' => 'required|string'
        ]);

        $comment = $this->commentService->updateComment($comment, $validated);
        return new CommentResource($comment);
    }

    public function destroy(Comment $comment): JsonResponse
    {
        $this->authorize('delete', $comment);

        $this->commentService->deleteComment($comment);
        return response()->json(null, 204);
    }

    public function approve(Comment $comment): CommentResource
    {
        $this->authorize('approve', $comment);

        $comment = $this->commentService->approveComment($comment);
        return new CommentResource($comment);
    }

    public function spam(Comment $comment): CommentResource
    {
        $this->authorize('markAsSpam', $comment);

        $comment = $this->commentService->markAsSpam($comment);
        return new CommentResource($comment);
    }
}
