<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IotSensors extends Model
{
    use HasFactory;
    use HasUuids;
    public $timestamps = true;
    
    protected $fillable = [
        'farm_id',
        'temperature',
        'humidity',
        'ammonia',
        'light_intensity',
    ];

    public function farm()
    {
        return $this->belongsTo(Farm::class);
    }
}