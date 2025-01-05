<?php

namespace App\Filament\Resources\IotSensorsResource\Pages;

use App\Filament\Resources\IotSensorsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListIotSensors extends ListRecords
{
    protected static string $resource = IotSensorsResource::class;

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
            $model = $model->whereHas('farm', function ($query) use ($user) {
                $query->where('users_id', '=', $user->id);
            });
        }

        return $model;
    }
}