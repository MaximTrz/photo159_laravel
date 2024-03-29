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
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("order_id");
            $table->string("file_name");
            $table->unsignedBigInteger("size_id");
            $table->unsignedBigInteger("material_id");
            $table->integer("amount");
            $table->timestamps();

            $table->foreign("order_id")
                ->references("id")
                ->on("orders")
                ->onDelete("cascade");

            $table->foreign("size_id")
                ->references("id")
                ->on("sizes")
                ->onDelete("cascade");

            $table->foreign("material_id")
                ->references("id")
                ->on("materials")
                ->onDelete("cascade");

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photos');
    }
};
