<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManualConditions extends Model
{
    use HasFactory;
    use HasUuids;
    public $timestamps = false;
    
    protected $fillable = [
        'farm_id',
        'condition',
        'recommendation'
    ];

    public function farm()
    {
        return $this->belongsTo(Farm::class);
    }
}