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
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("material_id");
            $table->unsignedBigInteger("size_id");
            $table->float("price");
            $table->timestamps();

            $table->foreignId("price_type_id")
                ->references("id")
                ->on("price_types")
                ->onDelete("cascade");

            $table->foreign("material_id")  // Заменяем foreignId на foreign для material_id
            ->references("id")
                ->on("materials")
                ->onDelete("cascade");

            $table->foreign("size_id")  // Заменяем foreignId на foreign для size_id
            ->references("id")
                ->on("sizes")
                ->onDelete("cascade");

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prices');
    }
};
