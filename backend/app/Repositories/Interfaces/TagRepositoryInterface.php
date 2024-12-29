<?php

namespace App\Repositories\Interfaces;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface TagRepositoryInterface
{
    public function getAll(): Collection;
    public function getAllPaginated(int $perPage = 15): LengthAwarePaginator;
    public function findById(int $id): ?Tag;
    public function findBySlug(string $slug): ?Tag;
    public function create(array $data): Tag;
    public function update(Tag $tag, array $data): bool;
    public function delete(Tag $tag): bool;
}
