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

        Schema::create('manual_conditions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->bigInteger('condition');
            $table->bigInteger('recommendation');
            $table->foreignUuid('farm_id')->constrained('farms', 'id')->index()->name('manual_conditions_farm_id_foreign');
            $table->timestamp('createdAt')->index()->useCurrent();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('manual_conditions');
    }
};
