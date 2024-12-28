<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Post\StoreRequest;
use App\Http\Requests\Api\V1\Post\UpdateRequest;
use App\Http\Resources\Api\V1\PostResource;
use App\Models\Post;
use App\Services\PostService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PostController extends Controller
{
    private PostService $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    /**
     * Display a listing of the posts.
     */
    public function index(): ResourceCollection|JsonResponse
    {
        try {
            $posts = $this->postService->getAllPosts();
            return new ResourceCollection($posts);
        } catch (\Exception $e) {
            \Log::error('Error fetching posts: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);
            return response()->json(['error' => 'Failed to fetch posts.'], 500);
        }
    }

    /**
     * Store a newly created post in storage.
     */
    public function store(StoreRequest $request): PostResource
    {
        $post = $this->postService->createPost($request->validated());
        return new PostResource($post);
    }

    /**
     * Display the specified post.
     */
    public function show(Post $post): PostResource
    {
        return new PostResource($post->load(['user', 'categories', 'tags']));
    }

    /**
     * Update the specified post in storage.
     */
    public function update(UpdateRequest $request, Post $post): PostResource
    {
        $post = $this->postService->updatePost($post, $request->validated());
        return new PostResource($post);
    }

    /**
     * Remove the specified post from storage.
     */
    public function destroy(Post $post): JsonResponse
    {
        $this->postService->deletePost($post);
        return response()->json(null, 204);
    }

    /**
     * Display a listing of published posts.
     */
    public function published(): ResourceCollection
    {
        $posts = $this->postService->getPublishedPosts();
        return PostResource::collection($posts);
    }
}
