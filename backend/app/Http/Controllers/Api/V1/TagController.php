<?php


namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\TagResource;
use App\Models\Tag;
use App\Services\TagService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TagController extends Controller
{
    private TagService $tagService;

    public function __construct(TagService $tagService)
    {
        $this->tagService = $tagService;
    }

    public function index(): ResourceCollection
    {
        $tags = $this->tagService->getAllTags();
        return TagResource::collection($tags);
    }

    public function store(Request $request): TagResource
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:tags'
        ]);

        $tag = $this->tagService->createTag($validated);
        return new TagResource($tag);
    }

    public function show(Tag $tag): TagResource
    {
        return new TagResource($tag);
    }

    public function update(Request $request, Tag $tag): TagResource
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:tags,slug,' . $tag->id
        ]);

        $tag = $this->tagService->updateTag($tag, $validated);
        return new TagResource($tag);
    }

    public function destroy(Tag $tag): JsonResponse
    {
        $this->tagService->deleteTag($tag);
        return response()->json(null, 204);
    }
}
