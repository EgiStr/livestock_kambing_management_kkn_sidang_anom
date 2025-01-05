<?php

namespace App\Filament\Resources;

use App\Filament\Resources\IotSensorsResource\Pages;
use App\Models\IotSensors;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class IotSensorsResource extends Resource
{
    protected static ?string $model = IotSensors::class;
    protected static ?string $navigationIcon = 'heroicon-o-signal';
    protected static ?string $recordTitleAttribute = 'id';
    protected static int $globalSearchResultsLimit = 20;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Select::make('farm_id')
                            ->relationship('farm', 'name')
                            ->required()
                            ->searchable()
                            ->preload(),

                        Forms\Components\Grid::make()
                            ->schema([
                                Forms\Components\TextInput::make('temperature')
                                    ->required()
                                    ->numeric()
                                    ->suffix('°C'),

                                Forms\Components\TextInput::make('humidity')
                                    ->required()
                                    ->numeric()
                                    ->suffix('%'),

                                Forms\Components\TextInput::make('ammonia')
                                    ->required()
                                    ->numeric()
                                    ->suffix('ppm'),

                                Forms\Components\TextInput::make('light_intensity')
                                    ->required()
                                    ->numeric()
                                    ->suffix('lux'),
                            ])
                            ->columns(2),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('farm.name')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('temperature')
                    ->sortable()
                    ->numeric(2)
                    ->suffix('°C'),
                Tables\Columns\TextColumn::make('humidity')
                    ->sortable()
                    ->numeric(2)
                    ->suffix('%'),
                Tables\Columns\TextColumn::make('ammonia')
                    ->sortable()
                    ->numeric(2)
                    ->suffix('ppm'),
                Tables\Columns\TextColumn::make('light_intensity')
                    ->sortable()
                    ->numeric(2)
                    ->suffix('lux'),
                Tables\Columns\TextColumn::make('createdAt')
                    ->label('Recorded At')
                    ->dateTime()
                    ->sortable(),
            ])
            ->defaultSort('createdAt', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('farm')
                    ->relationship('farm', 'name'),
                Tables\Filters\Filter::make('createdAt')
                    ->form([
                        Forms\Components\DatePicker::make('created_from'),
                        Forms\Components\DatePicker::make('created_until'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query
                            ->when(
                                $data['created_from'],
                                fn($query) => $query->whereDate('createdAt', '>=', $data['created_from']),
                            )
                            ->when(
                                $data['created_until'],
                                fn($query) => $query->whereDate('createdAt', '<=', $data['created_until']),
                            );
                    })
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListIotSensors::route('/'),
            'create' => Pages\CreateIotSensors::route('/create'),
            'edit' => Pages\EditIotSensors::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return [
            'farm.name',
            'temperature',
            'humidity',
            'ammonia',
            'light_intensity',
        ];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        return [
            'Farm' => $record->farm->name,
            'Temperature' => $record->temperature . '°C',
            'Humidity' => $record->humidity . '%',
        ];
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Farm Management';
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
}