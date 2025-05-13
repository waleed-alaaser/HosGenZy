<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('room_id')->unique();
            $table->string('room_type')->nullable();
            $table->string('bed_id')->nullable();
            $table->foreignId('patient_id')->nullable()->constrained('patients');
            $table->string('availability_status')->nullable();
            $table->string('assigned_department')->nullable();
            $table->decimal('daily_charges', 8, 2)->nullable();
            $table->integer('duration_of_stay')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
};
