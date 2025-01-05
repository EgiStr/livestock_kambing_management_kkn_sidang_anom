<?php

namespace App\Filament\Resources\ManualConditionsResource\Pages;

use App\Filament\Resources\ManualConditionsResource;
use Filament\Actions;
use Filament\Forms\Components\Builder;
use Filament\Resources\Pages\ListRecords;

class ListManualConditions extends ListRecords
{
    protected static string $resource = ManualConditionsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
    protected function getTableQuery(): \Illuminate\Database\Eloquent\Builder|null
    {
        $user = auth()->user();
        $model = (new (static::$resource::getModel()))->newQuery();

        if (!$user->isSuperAdmin()) {
            $model = $model->whereHas('farm', function ($query) use ($user) {
                $query->where('users_id', '=', $user->id);
            });
        }

        return $model;
    }
}
