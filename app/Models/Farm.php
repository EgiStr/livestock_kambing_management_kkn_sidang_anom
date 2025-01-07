<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
class Farm extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'user_id',
        'name',
        'location',
        'capacity',
        'description',
        'image_url',
        'is_active',
        'longitude',
        'latitude',
        'pan_width',
        'pan_height',
        'pan_length',
    ];

    // dont fill updatedAt and createdAt
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function iot_sensors()
    {
        return $this->hasMany(IotSensors::class);
    }

    public function manual_sensors()
    {
        return $this->hasMany(ManualConditions::class);
    }
}
