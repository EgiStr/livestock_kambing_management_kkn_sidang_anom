<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ManualConditionsResource\Pages;
use App\Models\ManualConditions;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;

class ManualConditionsResource extends Resource
{
    protected static ?string $model = ManualConditions::class;
    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-list';
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
                                Forms\Components\Select::make('condition')
                                    ->required()
                                    ->options([
                                        1 => 'Very Poor',
                                        2 => 'Poor',
                                        3 => 'Fair',
                                        4 => 'Good',
                                        5 => 'Excellent'
                                    ])
                                    ->native(false),

                                Forms\Components\Select::make('recommendation')
                                    ->required()
                                    ->options([
                                        1 => 'Immediate Action Required',
                                        2 => 'Action Required',
                                        3 => 'Monitor Closely',
                                        4 => 'Maintain Current Practice',
                                        5 => 'Optimal Conditions'
                                    ])
                                    ->native(false),
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
                Tables\Columns\TextColumn::make('condition')
                    ->badge()
                    ->formatStateUsing(fn (int $state): string => match ($state) {
                        1 => 'Very Poor',
                        2 => 'Poor',
                        3 => 'Fair',
                        4 => 'Good',
                        5 => 'Excellent',
                    })
                    ->colors([
                        'danger' => 1,
                        'warning' => 2,
                        'info' => 3,
                        'success' => [4, 5],
                    ]),
                Tables\Columns\TextColumn::make('recommendation')
                    ->badge()
                    ->formatStateUsing(fn (int $state): string => match ($state) {
                        1 => 'Immediate Action Required',
                        2 => 'Action Required',
                        3 => 'Monitor Closely',
                        4 => 'Maintain Current Practice',
                        5 => 'Optimal Conditions',
                    })
                    ->colors([
                        'danger' => 1,
                        'warning' => 2,
                        'info' => 3,
                        'success' => [4, 5],
                    ]),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('farm')
                    ->relationship('farm', 'name'),
                Tables\Filters\SelectFilter::make('condition')
                    ->options([
                        1 => 'Very Poor',
                        2 => 'Poor',
                        3 => 'Fair',
                        4 => 'Good',
                        5 => 'Excellent'
                    ]),
                Tables\Filters\SelectFilter::make('recommendation')
                    ->options([
                        1 => 'Immediate Action Required',
                        2 => 'Action Required',
                        3 => 'Monitor Closely',
                        4 => 'Maintain Current Practice',
                        5 => 'Optimal Conditions'
                    ]),
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
            'index' => Pages\ListManualConditions::route('/'),
            'create' => Pages\CreateManualConditions::route('/create'),
            'edit' => Pages\EditManualConditions::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return [
            'farm.name',
            'condition',
            'recommendation',
        ];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        return [
            'Farm' => $record->farm->name,
            'Condition' => $record->condition,
            'Recommendation' => $record->recommendation,
        ];
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Farm Management';
    }
}