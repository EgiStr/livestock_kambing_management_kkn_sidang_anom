<?php

namespace App\Filament\Resources\ManualConditionsResource\Pages;

use App\Filament\Resources\ManualConditionsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditManualConditions extends EditRecord
{
    protected static string $resource = ManualConditionsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
