<?php

namespace App\Filament\Resources\IotSensorsResource\Pages;

use App\Filament\Resources\IotSensorsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditIotSensors extends EditRecord
{
    protected static string $resource = IotSensorsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
