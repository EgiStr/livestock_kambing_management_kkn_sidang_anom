<?php

namespace App\Http\Controllers;

use App\Models\Farm;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class FarmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $farms = Farm::with(['user', 'iotSensors'])->where('users_id', Auth::id())->get();
        return Inertia::render('Index', [
            'farms' => $farms,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('farms/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string',
            'capacity' => 'required|integer|min:0',
            'description' => 'required|string',
            'image_url' => 'required|string',
            'is_active' => 'required|boolean',
            'longitude' => 'required|numeric|between:-180,180',
            'latitude' => 'required|numeric|between:-90,90',
        ]);

        $validated['users_id'] = Auth::id();

        Farm::create($validated);

        return redirect()->route('farms.index')->with('success', 'Farm created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Farm $farm): Response
    {
        $this->authorize('view', $farm);

        return Inertia::render('farms/show', [
            'farm' => $farm,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Farm $farm): Response
    {
        $this->authorize('update', $farm);

        return Inertia::render('farms/edit', [
            'farm' => $farm,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Farm $farm)
    {
        $this->authorize('update', $farm);

        $validated = $request->validate([
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

        return redirect()->route('farms.index')->with('success', 'Farm updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Farm $farm)
    {
        $this->authorize('delete', $farm);

        $farm->delete();

        return redirect()->route('farms.index')->with('success', 'Farm deleted successfully.');
    }
}
