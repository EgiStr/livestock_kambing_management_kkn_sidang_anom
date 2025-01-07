<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Farm;
use Illuminate\Http\Request;

class ApiFarmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Farm::query();

        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%')
                ->orWhere('location', 'like', '%' . $request->search . '%')
                ->orWhere('description', 'like', '%' . $request->search . '%');
        }

        if ($request->has('is_active')) {
            $query->where('is_active', $request->is_active);
        }

        if ($request->has('order_by')) {
            $orderBy = $request->order_by;
            $orderDirection = $request->order_direction ?? 'asc';
            $query->orderBy($orderBy, $orderDirection);
        }

        $farms = $query->paginate(10);

        return response()->json($farms);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|uuid|exists:users,id',
            'name' => 'required|string|max:255',
            'location' => 'required|string',
            'capacity' => 'required|integer|min:0',
            'description' => 'required|string',
            'image_url' => 'required|string',
            'is_active' => 'required|boolean',
            'longitude' => 'required|numeric|between:-180,180',
            'latitude' => 'required|numeric|between:-90,90',
        ]);

        $farm = Farm::create($validated);

        return response()->json($farm, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Farm $farm)
    {
        return response()->json($farm);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Farm $farm)
    {
        $validated = $request->validate([
            'user_id' => 'required|uuid|exists:users,id',
            'name' => 'required|string|max:255',
            'location' => 'required|string',
            'capacity' => 'required|integer|min:0',
            'description' => 'required|string',
            'image_url' => 'required|string',
            'is_active' => 'required|boolean',
            'longitude' => 'required|numeric|between:-180,180',
            'latitude' => 'required|numeric|between:-90,90',
        ]);

        $farm->update($validated);

        return response()->json($farm);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Farm $farm)
    {
        $farm->delete();

        return response()->json(null, 204);
    }
}
