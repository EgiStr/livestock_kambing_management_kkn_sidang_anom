<?php

namespace App\Http\Controllers;

use App\Models\IotSensors;
use Illuminate\Http\Request;

class IotSensorController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'farm_id' => 'required|exists:farms,id',
            'temperature' => 'required|numeric',
            'humidity' => 'required|numeric',
            'ammonia' => 'required|numeric',
            'light_intensity' => 'required|numeric',
        ]);

        IotSensors::create($validated);

        return response()->json(['message' => 'Data sensor berhasil disimpan'], 201);
    }
}
