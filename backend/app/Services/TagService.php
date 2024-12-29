<?php

namespace App\Services;

use App\Models\Tag;
use App\Repositories\Interfaces\TagRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class TagService
{
    private TagRepositoryInterface $tagRepository;

    public function __construct(TagRepositoryInterface $tagRepository)
    {
        $this->tagRepository = $tagRepository;
    }

    public function getAllTags(): Collection
    {
        return $this->tagRepository->getAll();
    }

    public function getPaginatedTags(int $perPage = 15): LengthAwarePaginator
    {
        return $this->tagRepository->getAllPaginated($perPage);
    }

    public function createTag(array $data): Tag
    {
        return $this->tagRepository->create($data);
    }

    public function updateTag(Tag $tag, array $data): Tag
    {
        $this->tagRepository->update($tag, $data);
        return $tag->fresh();
    }

    public function deleteTag(Tag $tag): bool
    {
        return $this->tagRepository->delete($tag);
    }

    public function findTag(int $id): ?Tag
    {
        return $this->tagRepository->findById($id);
    }

    public function findTagBySlug(string $slug): ?Tag
    {
        return $this->tagRepository->findBySlug($slug);
    }
}
