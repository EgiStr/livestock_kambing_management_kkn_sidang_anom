<?php

namespace App\Filament\Resources\FarmResource\Pages;

use App\Filament\Resources\FarmResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListFarms extends ListRecords
{
    protected static string $resource = FarmResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getTableQuery(): Builder
    {
        $user = auth()->user();
        $model = (new (static::$resource::getModel()))->newQuery();

        if (!$user->isSuperAdmin()) {
            $model = $model->where('users_id', '=', $user->id);
        }   

        return $model;
    }
}
