<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('iot_sensors', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('farm_id')->constrained("farms","id")->index()->name('iot_sensors_farm_id_foreign');
            $table->decimal('temperature');
            $table->decimal('humidity');
            $table->decimal('ammonia');
            $table->decimal('light_intensity');
            $table->timestamp('createdAt')->index()->useCurrent();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iot_sensors');
    }
};
