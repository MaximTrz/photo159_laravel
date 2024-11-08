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
        Schema::create('sizes', function (Blueprint $table) {
            $table->id();
            $table->integer('width');
            $table->integer('height');
            $table->string("comment")->nullable();
            $table->unsignedBigInteger('size_type_id');
            $table->timestamps();

            $table->foreign('size_type_id')
                ->references('id')
                ->on('size_types')
                ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sizes');
    }
};
