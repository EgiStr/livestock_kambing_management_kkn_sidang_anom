<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FarmResource\Pages;
use App\Models\Farm;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Dotswan\MapPicker\Fields\Map;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Set;

class FarmResource extends Resource
{
    protected static ?string $model = Farm::class;
    protected static ?string $navigationIcon = 'heroicon-o-building-office';
    protected static int $globalSearchResultsLimit = 20;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\FileUpload::make('image_url')
                            ->image()
                            ->directory('farms')
                            ->columnSpanFull(),

                        Forms\Components\Section::make()
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->required()
                                    ->maxLength(255),

                                Forms\Components\Hidden::make('user_id')
                                    ->default(fn() => auth()->id())
                                    ->required(),

                                Forms\Components\TextInput::make('capacity')
                                    ->required()
                                    ->numeric()
                                    ->minValue(0),

                                Forms\Components\Toggle::make('is_active')
                                    ->required()
                                    ->default(true),

                                Forms\Components\Textarea::make('description')
                                    ->required()
                                    ->maxLength(65535)
                                    ->columnSpanFull(),

                                Forms\Components\Textarea::make('location')
                                    ->required()
                                    ->columnSpanFull(),
                                    Grid::make()
                                    ->schema([
                                        TextInput::make('latitude')
                                            ->numeric()
                                            ->required()
                                            ->readonly()
                                            ->default(-5.2962)
                                            ->minValue(-90)
                                            ->maxValue(90)
                                            ->step('0.00000001'), // 8 decimal places
                        
                                        TextInput::make('longitude')
                                            ->numeric()
                                            ->required()
                                            ->readonly()
                                            ->default(105.4478)
                                            ->minValue(-180)
                                            ->maxValue(180)
                                            ->step('0.00000001'), // 8 decimal places
                                    ])
                                    ->columns(2),
                        
                                Map::make('location_map')
                                    ->label('Location')
                                    ->columnSpanFull()
                                    ->defaultLocation(latitude: -5.2962, longitude: 105.4478)
                                    ->clickable(true)
                                    ->showMarker()
                                    ->showZoomControl()
                                    ->draggable()
                                    ->afterStateUpdated(function ($state, Set $set): void {
                                        if ($state) {
                                            // Ensure 8 decimal precision
                                            $lat = number_format((float)$state['lat'], 8, '.', '');
                                            $lng = number_format((float)$state['lng'], 8, '.', '');
                                            
                                            $set('latitude', $lat);
                                            $set('longitude', $lng);
                                        }
                                    })
                                    ->afterStateHydrated(function ($state, $record, Set $set): void {
                                        if ($record) {
                                            $set('location_map', [
                                                'lat' => (float)$record->latitude,
                                                'lng' => (float)$record->longitude,
                                            ]);
                                        }
                                    }),

                            ])
                            ->columns(2)
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Status')
                            ->schema([
                                Forms\Components\Placeholder::make('createdAt')
                                    ->label('Created at')
                                    ->content(fn(?Farm $record): string => $record?->createdAt?? 'N/A'),
                            ])
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_url')
                    ->square()
                    ->label('Image'),
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('users.fullname')
                    ->searchable()
                    ->sortable()
                    ->label('Owner'),
                Tables\Columns\TextColumn::make('location')
                    ->searchable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('capacity')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\TextColumn::make('createdAt')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(),
            ])
            ->defaultSort('createdAt', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('users')
                    ->relationship('users', 'fullname')
                    ->searchable()
                    ->preload(),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Active Status'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
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
            'index' => Pages\ListFarms::route('/'),
            'create' => Pages\CreateFarm::route('/create'),
            'edit' => Pages\EditFarm::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return [
            'name',
            'location',
            'description',
            'users.fullname',
        ];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        return [
            'Owner' => $record->users->fullname,
            'Location' => $record->location,
            'Capacity' => $record->capacity,
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
